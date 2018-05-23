import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  sItem: string;
  @Output() evtAddItem: EventEmitter<string>;

  constructor() {
    this.evtAddItem = new EventEmitter()
   }

  ngOnInit() {
  }

  btnAdd() {
    this.evtAddItem.emit(this.sItem);
    this.sItem = '';
  }
}
