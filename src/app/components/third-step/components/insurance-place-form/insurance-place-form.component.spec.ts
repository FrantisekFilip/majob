import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePlaceFormComponent } from './insurance-place-form.component';

describe('InsurancePlaceFormComponent', () => {
  let component: InsurancePlaceFormComponent;
  let fixture: ComponentFixture<InsurancePlaceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancePlaceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePlaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
