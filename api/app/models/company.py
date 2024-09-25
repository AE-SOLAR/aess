from uuid import uuid4

from sqlalchemy import Column, DateTime, ForeignKey, String, Table, Text
from sqlalchemy.orm import relationship

from models import Base

user_company_association = Table(
    "user_company",
    Base.metadata,
    Column("user_uuid", String(36), ForeignKey("users.uuid"), primary_key=True),
    Column("company_uuid", String(36), ForeignKey("companies.uuid"), primary_key=True),
)


class Company(Base):
    __tablename__ = "companies"

    uuid = Column(
        String(36), primary_key=True, index=True, default=lambda: str(uuid4())
    )
    name = Column(String(64), unique=True, nullable=False)
    country = Column(String(64))
    zipcode = Column(String(9))
    city = Column(String(64))
    address = Column(String(128))
    phone = Column(String(18))
    website = Column(String(128))
    tax_id = Column(String(128))

    activated_ts = Column(DateTime, nullable=True)
    activated_by = Column(String(36))

    comment = Column(Text)

    createdAt = Column(DateTime)
    updatedAt = Column(DateTime)

    users = relationship(
        "User", secondary=user_company_association, back_populates="companies"
    )

    def __repr__(self):
        return f"<Company(name={self.name})>"
