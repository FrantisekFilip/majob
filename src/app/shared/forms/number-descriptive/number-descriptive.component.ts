import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-number-descriptive',
  templateUrl: './number-descriptive.component.html',
  styleUrls: ['./number-descriptive.component.scss']
})
export class NumberDescriptiveComponent implements OnInit {

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'Č. popisné';

  @Input()
  public placeholder = 'Ex. 572';

  @Input()
  public requiredError = 'Number Oriented is required';

  numberDescriptiveFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('numberDescriptive', this.numberDescriptiveFormControl);
  }

}
