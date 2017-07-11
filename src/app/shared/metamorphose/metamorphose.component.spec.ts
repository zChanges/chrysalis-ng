/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetamorphoseComponent } from './metamorphose.component';

describe('MetamorphoseComponent', () => {
  let component: MetamorphoseComponent;
  let fixture: ComponentFixture<MetamorphoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetamorphoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamorphoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});