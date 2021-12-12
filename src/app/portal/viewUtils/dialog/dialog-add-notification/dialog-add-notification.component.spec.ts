import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNotificationComponent } from './dialog-add-notification.component';

describe('DialogAddNotificationComponent', () => {
  let component: DialogAddNotificationComponent;
  let fixture: ComponentFixture<DialogAddNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
