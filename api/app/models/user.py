import enum
from uuid import uuid4

from models import Base
from sqlalchemy import Boolean, Column, DateTime, Enum, SmallInteger, String
from sqlalchemy.orm import relationship

from .company import user_company_association


class RoleEnum(enum.Enum):
    user = 1
    manager = 2
    publisher = 3
    admin = 4


class User(Base):
    __tablename__ = "users"

    uuid = Column(
        String(36), primary_key=True, index=True, default=lambda: str(uuid4())
    )
    email = Column(String(64), unique=True, index=True)
    password = Column(String(255))

    role = Column(Enum(RoleEnum))

    first_name = Column(String(64), nullable=False)
    last_name = Column(String(64), nullable=False)
    position_title = Column(String(64), nullable=True)
    phone = Column(String(18), nullable=True)
    utc_offset = Column(SmallInteger, default=1)

    createdAt = Column(DateTime)
    updatedAt = Column(DateTime)

    terms_accepted = Column(Boolean, default=False)
    policy_accepted = Column(Boolean, default=False)
    news_subscribe = Column(Boolean, default=False)

    companies = relationship(
        "Company", secondary=user_company_association, back_populates="users"
    )

    def __repr__(self):
        return f"<User(username={self.username})>"
