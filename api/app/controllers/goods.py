from models.panel import BackCoverType, CellType, Color, Design, Panel, Series
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload


async def get_panels_with_filters(db: AsyncSession, filters={}):
    stmt = select(Panel)
    conditions = []

    # Filtering conditions
    if filters.get("model"):
        conditions.append(Panel.model.ilike(f'%{filters["model"]}%'))
    if filters.get("min_power"):
        conditions.append(Panel.min_power >= filters["min_power"])
    if filters.get("max_power"):
        conditions.append(Panel.max_power <= filters["max_power"])

    if filters.get("series"):
        conditions.append(Panel.series.has(Series.name.ilike(f'%{filters["series"]}%')))
    if filters.get("cell_type"):
        conditions.append(
            Panel.cell_type.has(CellType.name.ilike(f'%{filters["cell_type"]}%'))
        )
    if filters.get("design"):
        conditions.append(Panel.design.has(Design.name.ilike(f'%{filters["design"]}%')))
    if filters.get("back_cover_type"):
        conditions.append(
            Panel.back_cover_type.has(
                BackCoverType.name.ilike(f'%{filters["back_cover_type"]}%')
            )
        )
    if filters.get("module_color"):
        conditions.append(
            Panel.module_color.has(Color.name.ilike(f'%{filters["module_color"]}%'))
        )
    if filters.get("frame_color"):
        conditions.append(
            Panel.frame_color.has(Color.name.ilike(f'%{filters["frame_color"]}%'))
        )

    # Apply conditions to the statement
    if conditions:
        stmt = stmt.where(*conditions)

    # Limit and offset
    if filters.get("limit"):
        stmt = stmt.limit(filters["limit"])
    if filters.get("offset"):
        stmt = stmt.offset(filters["offset"])

    # Eager loading of related models
    stmt = stmt.options(
        selectinload(Panel.series),
        selectinload(Panel.cell_type),
        selectinload(Panel.design),
        selectinload(Panel.back_cover_type),
        selectinload(Panel.module_color),
        selectinload(Panel.frame_color),
    )

    # Execute the statement asynchronously
    result = await db.execute(stmt)
    data = result.scalars().all()

    # Process the results
    result_list = []
    for row in data:
        result_list.append(
            {
                "id": row.uuid,
                "series": row.series.name,
                "model": row.model,
                "cell_type": row.cell_type.name,
                "design": row.design.name,
                "back_cover_type": row.back_cover_type.name,
                "module_color": row.module_color.name,
                "frame_color": row.frame_color.name,
                "power_range": [row.min_power, row.max_power],
                "dimensions": {
                    "length": row.length,
                    "width": row.width,
                    "height": row.height,
                    "weight": row.weight,
                },
                "efficiency": row.efficiency,
                "warranty": row.warranty,
                "stock": row.stock,
                "price": row.price,
                "weee": row.weee,
                "units_per_pallet": row.units_per_pallet,
                "units_per_container": row.units_per_container,
                "singularity": row.singularity,
                "description": row.description,
                "files": row.files,
                "images": row.images,
            }
        )
    return result_list
