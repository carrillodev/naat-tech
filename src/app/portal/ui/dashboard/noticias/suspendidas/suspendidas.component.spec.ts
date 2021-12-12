import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendidasComponent } from './suspendidas.component';

describe('SuspendidasComponent', () => {
  let component: SuspendidasComponent;
  let fixture: ComponentFixture<SuspendidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
