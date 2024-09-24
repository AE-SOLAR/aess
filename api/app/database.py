import os

from models import BackCoverType, Base, CellType, Color, Design, Series
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.future import select
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = f"mysql+aiomysql://{os.environ['MYSQL_USER']}:{os.environ['MYSQL_PASSWORD']}@{os.environ['MYSQL_HOST']}:{os.environ['PMA_PORT']}/{os.environ['MYSQL_DATABASE']}"

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

async_session = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)
local_session = sessionmaker(autocommit=False, autoflush=False, bind=engine)


async def get_db():
    async with async_session() as session:
        yield session


async def add_items(item_list: list, model, db: AsyncSession):
    found = await db.execute(select(model).filter_by(name=item_list[0]))
    found = found.scalar_one_or_none()
    if not found:
        for item in item_list:
            db.add(model(name=item))
        await db.commit()


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

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
