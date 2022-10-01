import random

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:4200"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_mock_group():
    group = []
    for i in range(random.randint(1, 10)):
        group.append({
            "id": random.randint(0, 1_000_000),
            "imagePath": f'https://picsum.photos/id/{random.randint(0, 1000)}/900/500'
        })
    return group


@app.get("/mock_data")
def get_mock_data(groups: int = None):
    groups = random.randint(1, 10) if groups is None else groups
    items = [get_mock_group() for _ in range(groups)]
    print(f'Returning {len(items)}: {",".join([str(len(it)) for it in items])} items')
    return items


@app.get("/")
async def root():
    return {"message": "Hello World!"}
