from pathlib import Path
from typing import List, Optional

from controllers import auth as auth_controller
from controllers import company as company_controller
from fastapi import APIRouter, Depends, File, Header, HTTPException, Request, UploadFile
from models.database import get_db
from pydantic import BaseModel
from sqlalchemy.orm import Session

router = APIRouter()


class LoginData(BaseModel):
    email: str
    password: str


class RegisterData(BaseModel):
    companyName: str
    vatId: str
    businessLicenseDocument: List[UploadFile] = File(...)

    streetAndNumber: str
    postcode: str
    city: str
    country: str
    companyPhone: str
    website: Optional[str] = None

    name: str
    surname: str
    jobTitle: Optional[str] = None
    phoneNumber: Optional[str] = None
    workingTimeForContact: Optional[str] = None
    timezone: Optional[str] = None

    acceptPrivacyPolicy: bool
    acceptTermsAndConditions: bool
    subscribeNewsletter: bool

    loginEmail: str
    password: str
    passwordCheck: str


class UpdateUserData(BaseModel):
    email: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]
    phone: Optional[str]
    position_title: Optional[str]
    news_subscribe: Optional[bool]


@router.post("/signup", tags=["Auth"], summary="Register new user")
async def register_user(data: RegisterData, db: Session = Depends(get_db)):
    existing_user = await auth_controller.get_user_by_email(data.loginEmail, db)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    existing_company = await company_controller.get_company_by_tax_id(data.vatId, db)
    if existing_company:
        raise HTTPException(status_code=400, detail="Company already registered")

    try:
        for file in data.businessLicenseDocument:
            directory_path = Path(f"/code/app/public/uploads/documents/company/{data.vatId}.{data.companyName.replace(' ', '_')}")
            directory_path.mkdir(parents=True, exist_ok=True)
            file_path = directory_path / file.filename
            with open(file_path, "wb") as f:
                f.write(file.file.read())
        
            print(f"Received file: {file.filename}")

        new_user = await auth_controller.create_user(data, db)
        new_company = await company_controller.create_company(data, db)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    return {
        "msg": "User registered successfully",
        "user": new_user,
        "company": new_company,
    }


@router.post("/signin", tags=["Auth"], summary="Login and get access token")
async def login_for_access_token(
    request: Request,
    login_data: LoginData,
    db: Session = Depends(get_db),
    authorization: str = Header(None),
):
    user = await auth_controller.authenticate_user(
        login_data.email,
        login_data.password,
        db,
    )
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")

    data = {"sub": user.uuid, "ip": request.client.host}

    if authorization is None:
        access_token = auth_controller.create_access_token(data=data)
    else:
        key = authorization.split(" ")[1]
        access_token = await auth_controller.get_or_create_access_token(
            key=key, data=data, db=db
        )

    access_token = auth_controller.create_access_token(data=data)
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/signout", tags=["Auth"], summary="Logout and revoke access token")
async def logout(current_user: str = Depends(auth_controller.get_current_user)):
    # Реализуйте логику аннулирования токена, если храните их на сервере
    return {"msg": "Logged out"}


@router.get("/user", tags=["User"], summary="Fetch current user data")
async def read_users_me(
    current_user: str = Depends(auth_controller.get_current_user),
    db: Session = Depends(get_db),
):
    user = await auth_controller.get_user_by_email(current_user, db)
    return {
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
    }


@router.get("/user/{uuid}", tags=["User"], summary="Fetch user data by UUID")
async def get_user_by_id(uuid: str, db: Session = Depends(get_db)):
    user = await auth_controller.get_user_by_uuid(uuid, db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user


@router.put("/user", tags=["User"], summary="Update current user data")
async def update_user(
    uuid: str,
    update_data: UpdateUserData,
    current_user: str = Depends(auth_controller.get_current_user),
    db: Session = Depends(get_db),
):
    user = await auth_controller.get_user_by_uuid(uuid, db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.email != current_user:
        raise HTTPException(status_code=403, detail="Not enough permissions")

    updated_user = await auth_controller.update_user(update_data, db)
    return {"msg": "User updated successfully", "user": updated_user}


@router.put("/user/{uuid}", tags=["Admin"], summary="Update user data by UUID")
async def update_user_by_uuid(
    uuid: str,
    update_data: UpdateUserData,
    current_user: str = Depends(auth_controller.get_current_user),
    db: Session = Depends(get_db),
):
    user = await auth_controller.get_user_by_uuid(uuid, db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.email != current_user:
        raise HTTPException(status_code=403, detail="Not enough permissions")

    updated_user = await auth_controller.update_user(update_data, db)
    return {"msg": "User updated successfully", "user": updated_user}


@router.delete("/user/{uuid}", tags=["Admin"], summary="Block user by UUID")
async def block_user_by_uuid(
    uuid: str,
    current_user: str = Depends(auth_controller.get_current_user),
    db: Session = Depends(get_db),
):
    user = await auth_controller.get_user_by_uuid(uuid, db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.email != current_user:
        raise HTTPException(status_code=403, detail="Not enough permissions")

    await auth_controller.delete_user(user, db)
    return {"msg": "User deleted successfully"}
