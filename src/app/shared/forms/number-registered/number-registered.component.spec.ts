import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRegisteredComponent } from './number-registered.component';

describe('StreetNumberRegisteredComponent', () => {
  let component: NumberRegisteredComponent;
  let fixture: ComponentFixture<NumberRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
