import { Item } from './image-items';
import { getRandomItems, ITEMS } from './mock-items';
import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GalleryApp';
  faTrashCan = faEye;

  similarItemGroups: Item[][] = ITEMS;
  endIndex: number = 3;
  url = 'http://127.0.0.1:8000/mock_data';

  constructor(private http: HttpClient) {
    console.log(this.similarItemGroups);
    console.log(`Size of original: ${this.similarItemGroups.length}`);
    this.http
      .get<Item[][]>(this.url)
      .subscribe((items) => (this.similarItemGroups = items));
  }

  hideGroup(itemGroup: Item[]) {
    console.log('Clicked');
    const index = this.similarItemGroups.indexOf(itemGroup);
    this.similarItemGroups.splice(index, 1);
  }

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
