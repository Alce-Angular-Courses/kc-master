import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-home',
  template: `
    <kc-saludo></kc-saludo>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
