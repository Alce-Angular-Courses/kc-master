import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasControlComponent } from './tareas-control.component';

describe('TareasControlComponent', () => {
  let component: TareasControlComponent;
  let fixture: ComponentFixture<TareasControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
