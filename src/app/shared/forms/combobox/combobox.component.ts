import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'Typ objektu';

  @Input()
  public placeholder = 'Ex. Prague';

  @Input()
  formName: string;

  @Input()
  options: any[];

  @Input()
  public requiredError = 'Value is required';

  matcher = new MyErrorStateMatcher();

  comboboxForm: FormControl = new FormControl('', []);

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl(this.formName, this.comboboxForm);
  }

}
