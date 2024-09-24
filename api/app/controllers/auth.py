from datetime import datetime, timedelta, timezone
from os import environ

from models.user import RoleEnum, User
from passlib.context import CryptContext
from sqlalchemy.future import select
from fastapi import Depends, HTTPException
from jose import JWTError, jwt
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from fastapi.security import OAuth2PasswordBearer

SECRET_KEY = environ["AUTH_SECRET"]
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


async def get_user_by_email(db, email: str):
    result = await db.execute(select(User).filter_by(email=email))
    return result.scalar_one_or_none()


async def get_user_by_uuid(db, uuid: str):
    result = await db.execute(select(User).filter_by(uuid=uuid))
    return result.scalar_one_or_none()


async def get_current_user(
    token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_db)
):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        uuid: str = payload.get("sub")
        if uuid is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = await get_user_by_uuid(db, uuid)
    if user is None:
        raise credentials_exception

    return user


async def authenticate_user(db, email: str, password: str):
    user = await get_user_by_email(db, email)
    if user and verify_password(password, user.password):
        return user
    return None


async def create_user(db, register_data):
    hashed_password = get_password_hash(register_data.password)
    new_user = User(
        email=register_data.email,
        password=hashed_password,
        first_name=register_data.first_name,
        last_name=register_data.last_name,
        role=RoleEnum.user,
        position_title=register_data.position_title
        if register_data.position_title
        else None,
        phone=register_data.phone if register_data.phone else None,
        createdAt=datetime.now(timezone.utc),
        updatedAt=datetime.now(timezone.utc),
    )

    # Добавляем и сохраняем нового пользователя
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user