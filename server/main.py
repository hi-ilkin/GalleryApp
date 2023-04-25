import os.path
import random
import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse

from data_processor import Processor

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

processor = None


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


@app.get("/grouped_data")
def get_grouped_data(group_by: str = 'name'):
    global processor
    if processor is None:
        processor = Processor()

    return processor.get_grouped_data(by=group_by)


image_map = {
    1: os.path.realpath('../demo/a happy day/day 2/IMG_9751_e.jpg')
}


@app.get("/get_file/{file_id}")
async def get_file(file_id: int):
    print("get_file is correct")
    return FileResponse(os.path.realpath(image_map[file_id]), media_type="image/jpeg")


if __name__ == '__main__':
    uvicorn.run(app="main:app", host="localhost", port=8000, debug=True, reload=True)
