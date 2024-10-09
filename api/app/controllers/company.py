from datetime import datetime, timezone

from models.company import Company
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def get_company_by_tax_id(tax_id: str, db: AsyncSession):
    result = await db.execute(select(Company).filter_by(tax_id=tax_id))
    return result.scalar_one_or_none()


async def create_company(data, db: AsyncSession):
    new_company = Company(
        name=data.companyName,
        tax_id=data.vatId,
        country=data.country,
        zipcode=data.postcode,
        city=data.city,
        address=data.streetAndNumber,
        phone=data.companyPhone,
        website=data.website,
        createdAt=datetime.now(timezone.utc),
        updatedAt=datetime.now(timezone.utc),
    )

    db.add(new_company)
    await db.commit()
    await db.refresh(new_company)
    return new_company
