/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MebmerCardComponent } from './mebmer-card.component';

describe('MebmerCardComponent', () => {
  let component: MebmerCardComponent;
  let fixture: ComponentFixture<MebmerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MebmerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MebmerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
