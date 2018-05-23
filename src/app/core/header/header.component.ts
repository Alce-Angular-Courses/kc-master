import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public logo: string;

  constructor() { }

  ngOnInit() {
    this.title = 'KeepCoding';
    this.logo = '../assets/logo-angular.svg';
  }

}
