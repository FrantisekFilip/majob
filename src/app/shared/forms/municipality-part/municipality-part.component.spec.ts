import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityPartComponent } from './municipality-part.component';

describe('MunicipalityPartComponent', () => {
  let component: MunicipalityPartComponent;
  let fixture: ComponentFixture<MunicipalityPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalityPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
