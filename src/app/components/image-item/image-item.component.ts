import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-item', // html tag used to embed in other html codes
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent implements OnInit {
  // Use input to pass value to this component from another component
  @Input() imgSrc: string = 'https://picsum.photos/id/945/300/250';

  constructor() {}

  ngOnInit(): void {}
}
