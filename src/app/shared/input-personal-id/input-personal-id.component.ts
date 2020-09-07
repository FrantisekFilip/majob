import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NgControl, NG_VALUE_ACCESSOR, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { rodnecislo } from 'rodnecislo';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-personal-id',
  templateUrl: './input-personal-id.component.html',
  styleUrls: ['./input-personal-id.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPersonalIdComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputPersonalIdComponent),
      multi: true,
    }
  ],
})
export class InputPersonalIdComponent implements OnInit, ControlValueAccessor, Validator {
  onChange = (_: any) => {};
  onTouched = () => {};
  onValidationChange: any = () => {};
  constructor() {}

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  color: string = 'accent';
  personalNumber: any;

  value: string;
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

  onKeyPress(event) {
    let charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode > 31 && (charCode < 48 || charCode > 57)) ||
      event.target.value.length == 11
    ) {
      return false;
    }
  }

  onKeyUp(event) {
    if (event.target.value.length == 6 && event.which != 8) {
      event.target.value = event.target.value + '/';
    }
    this.personalNumber = rodnecislo(event.target.value);
    this.color = this.personalNumber.isValid() ? '' : 'accent';
    this.value = event.target.value;
    this.onChange(this.value);
    this.onValidationChange();
  }

  validate(control: AbstractControl): ValidationErrors {
    const isValid = rodnecislo(this.value).isValid();
    return !isValid ? {error: 'chybné rč'} : null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
  }

  ngOnInit(): void {}
}
