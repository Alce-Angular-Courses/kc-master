import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tareas-control',
  templateUrl: './tareas-control.component.html',
  styleUrls: ['./tareas-control.component.css']
})
export class TareasControlComponent implements OnInit {

  public aTareas: Array<string>;
  public sTarea: string;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTareas(tarea) {
    this.aTareas.push(tarea);
  }
}
