import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/email/email.component';

@Component({
  selector: 'app-municipality-part',
  templateUrl: './municipality-part.component.html',
  styleUrls: ['./municipality-part.component.scss']
})
export class MunicipalityPartComponent implements OnInit {

  @Input()
  public value;

  @Input()
  public publicForm: FormGroup;

  @Input()
  public label = 'Část obce';

  @Input()
  public placeholder = 'Ex. Praha - Branik';

  @Input()
  public requiredError = 'Municipality Part is required';

  municipalityPartFormControl = new FormControl('', []);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.publicForm.addControl('municipalityPart', this.municipalityPartFormControl);
  }

}
