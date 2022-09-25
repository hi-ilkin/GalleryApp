import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-item', // html tag used to embed in other html codes
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent implements OnInit {
  // Use input to pass value to this component from another component
  @Input() imgSrc: string = 'https://picsum.photos/id/945/300/250';
  @Input() imageItem = '';
  @Output() btnClick = new EventEmitter();
  faTrashCan = faTrashCan;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
  onDelete() {
    console.log('Deleted');
  }
}
