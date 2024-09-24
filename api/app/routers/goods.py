from typing import Union

from controllers.goods import get_panels_with_filters
from fastapi import APIRouter, Depends, Request, Query
from models.database import get_db
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/panels", tags=["Goods"], summary="List all items with filters")
def read_items(
    request: Request,
    series: str = Query(None, title="Filter by Series"),
    model: str = Query(None, title="Filter by Model"),
    cell_type: str = Query(None, title="Filter by Cell Type"),
    design: str = Query(None, title="Filter by Module Design"),
    back_cover_type: str = Query(None, title="Filter by Back Cover Type"),
    module_color: str = Query(None, title="Filter by Module Color"),
    frame_color: str = Query(None, title="Filter by Frame Color"),
    min_power: int = Query(None, title="Filter by Minimum Power"),
    max_power: int = Query(None, title="Filter by Maximum Power"),
    limit: int = Query(None, title="Set items limit"),
    offset: int = Query(None, title="Set items offset"),
    db: Session = Depends(get_db),
):
    filters = request.query_params
    return get_panels_with_filters(db, filters)


@router.get("/items/{item_id}", tags=["Goods"], summary="Read item")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
