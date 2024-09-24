from typing import Union

from fastapi import APIRouter, Depends
from controllers.goods import get_panels_with_filters
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db

router = APIRouter()


@router.get("/panels", tags=["Goods"], summary="List all items with filters")
async def read_items(
    q: Union[str, None] = None,
    db: AsyncSession = Depends(get_db),
):
    return await get_panels_with_filters(db, {})


@router.get("/items/{item_id}", tags=["Goods"], summary="Read item")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
