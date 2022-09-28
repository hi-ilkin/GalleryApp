import { Item } from './image-items';
import { getRandomItems, ITEMS } from './mock-items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GalleryApp';

  similarItemGroups: Item[][] = ITEMS;

  endIndex: number = 3;
  constructor() {
    console.log(`Size of original: ${this.similarItemGroups.length}`);
  }

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
  }

  onScroll() {
    console.log('scrolled!!');
    if (this.endIndex >= this.similarItemGroups.length) {
      this.similarItemGroups.push(getRandomItems());
    }

    this.endIndex++;

    console.log(`Size of original: ${this.similarItemGroups.length}`);
  }

  // deleteImage(item: Item) {
  //   // const index = this.similarItemGroups.indexOf(item);
  //   // this.similarItemGroups.splice(index, 1);
  // }
}
