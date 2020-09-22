import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.scss']
})
export class StreetComponent implements OnInit {

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'Ulice';

  @Input()
  public placeholder = 'Ex. Husova';

  @Input()
  public requiredError = 'Street is required';

  streetFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('street', this.streetFormControl);
  }

}
