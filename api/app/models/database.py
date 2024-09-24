import os

from fastapi import Depends
from models import BackCoverType, Base, CellType, Color, Design, Series
from sqlalchemy import create_engine
from sqlalchemy.future import select
from sqlalchemy.orm import Session, sessionmaker

DATABASE_URL = os.environ['DATABASE_URL']

engine = create_engine(DATABASE_URL, echo=False)
session = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Dependency
def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()


async def add_items(item_list: list, model, db: Session = Depends(get_db)):
    found = await db.execute(select(model).filter_by(name=item_list[0]))
    found = found.scalar_one_or_none()
    if not found:
        for item in item_list:
            db.add(model(name=item))
        await db.commit()


async def init_db():
    Base.metadata.create_all(bind=engine)

    series_list = [
        "Aurora",
        "Comet",
        "Terra",
        "ShadeStar",
        "Neptune",
        "Meteor",
        "Horizon",
    ]

    design_list = [
        "Mono-facial",
        "Bifacial",
    ]

    cell_type_list = [
        "P type PERC",
        "N type HJT",
        "N type TOPCon",
    ]

    cover_type_list = [
        "Foil",
        "Double Glass",
    ]

    colors_list = [
        "White",
        "Black",
        "Silver",
        "Transparent",
    ]

    async for db in get_db():
        await add_items(series_list, Series, db)
        await add_items(design_list, Design, db)
        await add_items(cell_type_list, CellType, db)
        await add_items(cover_type_list, BackCoverType, db)
        await add_items(colors_list, Color, db)

        await db.commit()
