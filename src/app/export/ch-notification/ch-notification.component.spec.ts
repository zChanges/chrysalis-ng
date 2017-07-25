import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChNotificationComponent } from './ch-notification.component';

describe('ChNotificationComponent', () => {
  let component: ChNotificationComponent;
  let fixture: ComponentFixture<ChNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
