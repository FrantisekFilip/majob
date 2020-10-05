import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialInsuranceFormComponent } from './residential-insurance-form.component';

describe('ResidentialInsuranceFormComponent', () => {
  let component: ResidentialInsuranceFormComponent;
  let fixture: ComponentFixture<ResidentialInsuranceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialInsuranceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialInsuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
