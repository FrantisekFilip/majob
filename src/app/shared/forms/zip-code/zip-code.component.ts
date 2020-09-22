import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.scss']
})
export class ZipCodeComponent implements OnInit {

  @Input()
  public value: string;

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'PSČ';

  @Input()
  public placeholder = 'Ex. 190 00';

  @Input()
  public zipCodeError = 'The length of Zip code must be 5 characters';

  @Input()
  public requiredError = 'Zip code is required';

  zipCodeFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('zipCode', this.zipCodeFormControl);
  }

}
