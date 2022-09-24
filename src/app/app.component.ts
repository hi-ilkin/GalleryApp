import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GalleryApp';

  data = [
    {
      image: 'https://picsum.photos/id/945/900/500',
      head: 'First slide label',
      data: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      image: 'https://i.imgur.com/RJ5VAad.jpg',
      head: 'Second slide label',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://picsum.photos/id/0/900/500',
      head: 'Third slide label',
      data: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ];
}
