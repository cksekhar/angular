/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardReportComponent } from './card-report.component';

describe('CardReportComponent', () => {
  let component: CardReportComponent;
  let fixture: ComponentFixture<CardReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
