from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

from models.company import Company  # noqa: E402, F401
from models.panel import (  # noqa: E402, F401
    BackCoverType,
    CellType,
    Color,
    Design,
    Panel,
    Series,
)
from models.user import User  # noqa: E402, F401
