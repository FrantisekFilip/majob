import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-number-oriented',
  templateUrl: './number-oriented.component.html',
  styleUrls: ['./number-oriented.component.scss']
})
export class NumberOrientedComponent implements OnInit {

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'Č. orientační';

  @Input()
  public placeholder = 'Ex. 1281/';

  @Input()
  public requiredError = 'Number Oriented is required';

  numberOrientedFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('numberOriented', this.numberOrientedFormControl);
  }
}
