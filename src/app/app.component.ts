import { Item } from './image-items';
import { ITEMS } from './mock-items';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GalleryApp';

  data: Item[] = ITEMS;

  delete(item: Item) {
    const index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }

  deleteImage(item: Item) {
    const index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }
}
