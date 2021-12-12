import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPrincipalComponent } from './proyectos-principal.component';

describe('ProyectosPrincipalComponent', () => {
  let component: ProyectosPrincipalComponent;
  let fixture: ComponentFixture<ProyectosPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
