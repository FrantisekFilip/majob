import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {CountryISO} from 'ngx-intl-tel-input'
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  @Input() phoneNumber;
  @Output() phoneEvent = new EventEmitter();

  CountryISO = CountryISO;

  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  public onChange(event){
    if (event && event.e164Number) {
      this.phoneEvent.emit(event.e164Number);
    }
  }

}
