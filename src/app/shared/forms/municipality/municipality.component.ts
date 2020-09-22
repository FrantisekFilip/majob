import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.scss']
})
export class MunicipalityComponent implements OnInit {

  @Input()
  public value;

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'Obec';

  @Input()
  public placeholder = 'Ex. Prague';

  @Input()
  public requiredError = 'Municipality is required';

  municipalityFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('municipality', this.municipalityFormControl);
  }

}
