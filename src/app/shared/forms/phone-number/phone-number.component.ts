import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CountryISO } from 'ngx-intl-tel-input';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {

  @Input()
  public publicForm: FormGroup;

  @Input() phoneNumber;
  @Output() phoneEvent = new EventEmitter();

  CountryISO = CountryISO;

  phoneFormControl = new FormControl(undefined, [Validators.required]);

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('phone', this.phoneFormControl);
  }

  public onChange(event): void {
    if (event && event.e164Number) {
      this.phoneEvent.emit(event.e164Number);
    }
  }

}
