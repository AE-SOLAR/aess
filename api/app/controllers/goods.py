from models.panel import Panel, Series, CellType, Design, BackCoverType, Color
from sqlalchemy.orm import Session, joinedload


def get_panels_with_filters(db: Session, filters={}):
    query = db.query(Panel)

    if filters.get("model"):
        query = query.filter(Panel.model.ilike(f'%{filters["model"]}%'))
    if filters.get("min_power"):
        query = query.filter(Panel.min_power >= filters["min_power"])
    if filters.get("max_power"):
        query = query.filter(Panel.max_power <= filters["max_power"])

    if filters.get("series"):
        query = query.join(Panel.series).filter(
            Series.name.ilike(f'%{filters["series"]}%')
        )
    if filters.get("cell_type"):
        query = query.join(Panel.cell_type).filter(
            CellType.name.ilike(f'%{filters["cell_type"]}%')
        )
    if filters.get("design"):
        query = query.join(Panel.design).filter(
            Design.name.ilike(f'%{filters["design"]}%')
        )
    if filters.get("back_cover_type"):
        query = query.join(Panel.back_cover_type).filter(
            BackCoverType.name.ilike(f'%{filters["back_cover_type"]}%')
        )
    if filters.get("module_color"):
        query = query.join(Panel.module_color).filter(
            Color.name.ilike(f'%{filters["module_color"]}%')
        )
    if filters.get("frame_color"):
        query = query.join(Panel.frame_color).filter(
            Color.name.ilike(f'%{filters["frame_color"]}%')
        )

    if filters.get("limit"):
        query = query.limit(filters["limit"])
    if filters.get("offset"):
        query = query.offset(filters["offset"])

    query = query.options(
        joinedload(Panel.series),
        joinedload(Panel.cell_type),
        joinedload(Panel.design),
        joinedload(Panel.back_cover_type),
        joinedload(Panel.module_color),
        joinedload(Panel.frame_color),
    )

    data = query.all()
    result = []
    for row in data:
        result.append(
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
    return result
