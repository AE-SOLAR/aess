from uuid import uuid4

from models import Base
from sqlalchemy import JSON, Column, ForeignKey, Integer, SmallInteger, String, Text
from sqlalchemy.orm import relationship


class Series(Base):
    __tablename__ = "panel_series"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String(255), unique=True, nullable=False)

    def __repr__(self):
        return f"<Series(id={self.id}, name={self.name})>"


class CellType(Base):
    __tablename__ = "panel_cell_types"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String(255), unique=True, nullable=False)

    def __repr__(self):
        return f"<CellType(id={self.id}, name={self.name})>"


class Design(Base):
    __tablename__ = "panel_design"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String(255), unique=True, nullable=False)

    def __repr__(self):
        return f"<Design(id={self.id}, name={self.name})>"


class BackCoverType(Base):
    __tablename__ = "panel_backcover_type"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String(255), unique=True, nullable=False)

    def __repr__(self):
        return f"<BackCoverType(id={self.id}, name={self.name})>"


class Color(Base):
    __tablename__ = "panel_color"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String(255), unique=True, nullable=False)

    def __repr__(self):
        return f"<Color(id={self.id}, name={self.name})>"


class Panel(Base):
    __tablename__ = "panels"

    uuid = Column(
        String(36), primary_key=True, index=True, default=lambda: str(uuid4())
    )
    model = Column(String(255), nullable=False, index=True)
    singularity = Column(
        JSON,
        nullable=False,
        default={"advantages": [], "features": [], "applications": []},
    )
    description = Column(Text, nullable=True)
    power_range = Column(JSON, nullable=False, index=True, default={"min": 0, "max": 0})
    length = Column(SmallInteger, nullable=True, index=True)
    width = Column(SmallInteger, nullable=True, index=True)
    height = Column(SmallInteger, nullable=True, index=True)
    weight = Column(SmallInteger, nullable=True, index=True)
    efficiency = Column(SmallInteger, nullable=True, index=True)
    warranty = Column(SmallInteger, nullable=True, index=True)
    price = Column(SmallInteger, nullable=True, index=True)
    weee = Column(String(128), nullable=True)
    units_per_pallet = Column(SmallInteger, nullable=True)
    units_per_container = Column(SmallInteger, nullable=True)
    stock = Column(SmallInteger, default=0, index=True)

    series_id = Column(Integer, ForeignKey("panel_series.id"))
    cell_type_id = Column(Integer, ForeignKey("panel_cell_types.id"))
    design_id = Column(Integer, ForeignKey("panel_design.id"))
    back_cover_type_id = Column(Integer, ForeignKey("panel_backcover_type.id"))
    module_color_id = Column(Integer, ForeignKey("panel_color.id"))
    frame_color_id = Column(Integer, ForeignKey("panel_color.id"))

    series = relationship("Series")
    cell_type = relationship("CellType")
    design = relationship("Design")
    back_cover_type = relationship("BackCoverType")
    module_color = relationship("Color", foreign_keys=[module_color_id])
    frame_color = relationship("Color", foreign_keys=[frame_color_id])

    def __repr__(self):
        return (
            f"<Panel(model={self.model}, series={self.series.name if self.series else None}, "
            f"module_color={self.module_color.name if self.module_color else None}, "
            f"cell_type={self.cell_type.name if self.cell_type else None})>"
        )
