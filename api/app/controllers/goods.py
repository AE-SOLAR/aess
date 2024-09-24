from models.panel import Panel
from sqlalchemy.orm import Session


async def get_panels_with_filters(db: Session, filters={}):
    res = await db.query(Panel).all()
    print(res)
    return res
