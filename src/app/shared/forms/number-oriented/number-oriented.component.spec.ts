import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOrientedComponent } from './number-oriented.component';

describe('StreetNumberOrientedComponent', () => {
  let component: NumberOrientedComponent;
  let fixture: ComponentFixture<NumberOrientedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOrientedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOrientedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
