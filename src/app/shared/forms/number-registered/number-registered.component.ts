import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-number-registered',
  templateUrl: './number-registered.component.html',
  styleUrls: ['./number-registered.component.scss']
})
export class NumberRegisteredComponent implements OnInit {

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'Číslo evidenční';

  @Input()
  public placeholder = 'Ex. 1281/';

  @Input()
  public requiredError = 'Number Registered is required';

  numberRegisteredFormControl = new FormControl('',  []);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('numberRegistered', this.numberRegisteredFormControl);
  }

}
