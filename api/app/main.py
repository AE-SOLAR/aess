import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import goods, root, user

app = FastAPI(root_path="/api/v1")

origins = [
    "https://devshop.ae-solar.com",
    "https://shop.ae-solar.com",
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(root.router)
app.include_router(user.router)
app.include_router(goods.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8088, reload=True)
