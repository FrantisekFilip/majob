import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPersonalIdComponent } from './input-personal-id.component';

describe('InputPersonalIdComponent', () => {
  let component: InputPersonalIdComponent;
  let fixture: ComponentFixture<InputPersonalIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPersonalIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPersonalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
