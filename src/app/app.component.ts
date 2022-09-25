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

  deleteImage() {
    console.log('Item deleted');
  }
}
