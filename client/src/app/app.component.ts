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

  similarItemGroups: Item[][] = ITEMS;

  // delete(group: ItemGroup, item: Item) {
  //   const index = group.items.indexOf(item);
  //   this.similarItemGroups.splice(index, 1);
  // }

  deleteImage(itemGroup: Item[], item: Item) {
    const groupIndex = this.similarItemGroups.indexOf(itemGroup);
    this.similarItemGroups[groupIndex] = this.similarItemGroups[
      groupIndex
    ].filter((i) => i !== item);

    if (this.similarItemGroups[groupIndex].length === 0) {
      this.similarItemGroups.splice(groupIndex, 1);
    }
    console.log(this.similarItemGroups.length);
  }

  // deleteImage(item: Item) {
  //   // const index = this.similarItemGroups.indexOf(item);
  //   // this.similarItemGroups.splice(index, 1);
  // }
}
