import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDescriptiveComponent } from './number-descriptive.component';

describe('StreetNumberDescriptiveComponent', () => {
  let component: NumberDescriptiveComponent;
  let fixture: ComponentFixture<NumberDescriptiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberDescriptiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDescriptiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
