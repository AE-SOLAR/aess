from contextlib import asynccontextmanager

import uvicorn
from database import init_db
from fastapi import FastAPI
from routers import goods, root, user


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield


app = FastAPI(root_path="/api/v2")


app.include_router(root.router)
app.include_router(user.router)
app.include_router(goods.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8088, reload=True)
