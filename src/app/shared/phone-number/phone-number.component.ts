import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {CountryISO} from "ngx-intl-tel-input"
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  @Input() phoneNumber;
  @Output() phoneEvent = new EventEmitter(); 
  constructor() {
    
   }

  ngOnInit(): void {
    this.phoneForm = new FormGroup({
      phone: new FormControl(this.phoneNumber, [Validators.required])
    });
    this.phoneForm.valueChanges.subscribe(x => {
      this.phoneEvent.emit(x)
    })
  }
  CountryISO = CountryISO
  phoneForm: FormGroup
}
