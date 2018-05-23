import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() aItems: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
