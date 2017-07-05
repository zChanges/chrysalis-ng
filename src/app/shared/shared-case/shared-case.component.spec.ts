/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedCaseComponent } from './shared-case.component';

describe('SharedCaseComponent', () => {
  let component: SharedCaseComponent;
  let fixture: ComponentFixture<SharedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});