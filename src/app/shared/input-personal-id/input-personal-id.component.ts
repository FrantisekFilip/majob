import { Component, OnInit, Input } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { NgControl } from '@angular/forms';
import { rodnecislo } from 'rodnecislo';

@Component({
  selector: 'app-input-personal-id',
  templateUrl: './input-personal-id.component.html',
  styleUrls: ['./input-personal-id.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: InputPersonalIdComponent}]
})
export class InputPersonalIdComponent implements OnInit, MatFormFieldControl<string> {

  constructor() { }
  color: string = 'accent';
  personalNumber: any;
  value: any;
  stateChanges: Observable<void>;
  id: string;
  placeholder: string;
  ngControl: NgControl;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  @Input()
  required: boolean = true;
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  autofilled?: boolean;
  userAriaDescribedBy?: string;
  setDescribedByIds(ids: string[]): void {
    throw new Error("Method not implemented.");
  }
  onContainerClick(event: MouseEvent): void {
    throw new Error("Method not implemented.");
  }
  onKeyPress(event) {
    let charCode = (event.which) ? event.which : event.keyCode
    if((charCode > 31 && (charCode < 48 || charCode > 57)) || event.target.value.length == 11) {
      return false;
    }
    if(event.target.value.length == 6) {
      event.target.value = event.target.value + '/';
    }
    this.value = event.target.value;
  }
  onKeyUp(event) {
    this.personalNumber = rodnecislo(event.target.value);
    this.color = this.personalNumber.isValid() ? '' : 'accent';
  }

  ngOnInit(): void {
  }

}
