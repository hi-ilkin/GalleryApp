import glob
import json
import os.path
import pandas as pd
from typing import Union
from PIL import Image


class Processor:
    def __init__(self):
        self.PATHS = ['../demo/**/*.JPG']
        self.all_files = self.get_files()
        self.df_files = self.get_files_info()

    def get_files(self) -> list:
        files = []
        for path in self.PATHS:
            print(path)
            files.extend(glob.glob(path, recursive=True))

        return files

    def get_image_info(self, filepath):
        with Image.open(filepath) as img:
            width, height = img.size

        name = os.path.basename(filepath)
        file_stats = os.stat(filepath).st_size // 1024  # in kB
        return {
            'name': name,
            'width': width,
            'height': height,
            'size_kb': file_stats,
            'imagePath': 'http://localhost:8000/get_file/' + filepath.replace('\\', '/')
        }

    def get_files_info(self):
        all_file_stats: Union[list, dict] = [self.get_image_info(filepath) for filepath in self.all_files]
        df_files = pd.DataFrame.from_dict(all_file_stats)
        df_files['is_hidden'] = False
        df_files['id'] = pd.RangeIndex
        return df_files

    def get_grouped_data(self, by='name') -> list:
        items = []
        if len(self.df_files) == 0:
            return items

        groups = self.df_files.groupby(by)
        for idx, group in groups:
            items.append(json.loads(group.to_json(orient="records")))

        return items
