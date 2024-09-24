from typing import Optional

from controllers import auth as auth_controller
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

router = APIRouter()


class LoginData(BaseModel):
    email: str
    password: str


class RegisterData(BaseModel):
    email: str
    password: str
    first_name: str
    last_name: str
    position_title: Optional[str] = None
    phone: Optional[str] = None


class UpdateUserData(BaseModel):
    email: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]
    phone: Optional[str]
    position_title: Optional[str]
    news_subscribe: Optional[bool]


@router.post("/signup", tags=["Auth"], summary="Register new user")
async def register_user(register_data: RegisterData):
    existing_user = await auth_controller.get_user_by_email(register_data.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = await auth_controller.create_user(register_data)
    return {"msg": "User registered successfully", "user": new_user}


@router.post("/signin", tags=["Auth"], summary="Login and get access token")
async def login_for_access_token(login_data: LoginData):
    user = await auth_controller.authenticate_user(
        login_data.email, login_data.password
    )
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")

    access_token = auth_controller.create_access_token(data={"sub": user.uuid})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/signout", tags=["Auth"], summary="Logout and revoke access token")
async def logout(current_user: str = Depends(auth_controller.get_current_user)):
    # Реализуйте логику аннулирования токена, если храните их на сервере
    return {"msg": "Logged out"}


@router.get("/user", tags=["User"], summary="Fetch current user data")
async def read_users_me(
    current_user: str = Depends(auth_controller.get_current_user),
):
    user = await auth_controller.get_user_by_email(current_user)
    return {
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
    }


@router.get("/user/{uuid}", tags=["User"], summary="Fetch user data by UUID")
async def get_user_by_id(uuid: str):
    user = await auth_controller.get_user_by_uuid(uuid)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user


@router.put("/user", tags=["User"], summary="Update current user data")
async def update_user(
    uuid: str,
    update_data: UpdateUserData,
    current_user: str = Depends(auth_controller.get_current_user),
):
    user = await auth_controller.get_user_by_uuid(uuid)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.email != current_user:
        raise HTTPException(status_code=403, detail="Not enough permissions")

    updated_user = await auth_controller.update_user(user, update_data)
    return {"msg": "User updated successfully", "user": updated_user}


@router.put("/user/{uuid}", tags=["Admin"], summary="Update user data by UUID")
async def update_user_by_uuid(
    uuid: str,
    update_data: UpdateUserData,
    current_user: str = Depends(auth_controller.get_current_user),
):
    user = await auth_controller.get_user_by_uuid(uuid)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.email != current_user:
        raise HTTPException(status_code=403, detail="Not enough permissions")

    updated_user = await auth_controller.update_user(user, update_data)
    return {"msg": "User updated successfully", "user": updated_user}


@router.delete("/user/{uuid}", tags=["Admin"], summary="Block user by UUID")
async def block_user_by_uuid(
    uuid: str,
    current_user: str = Depends(auth_controller.get_current_user),
):
    user = await auth_controller.get_user_by_uuid(uuid)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.email != current_user:
        raise HTTPException(status_code=403, detail="Not enough permissions")

    await auth_controller.delete_user(user)
    return {"msg": "User deleted successfully"}
