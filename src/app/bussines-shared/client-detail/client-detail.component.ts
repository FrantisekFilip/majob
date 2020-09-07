import { Component, OnInit } from '@angular/core';
import { RisksService } from '../../catalogue/risks.service';
import { UserService } from '../../cache/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  constructor(private risksService: RisksService, private userService: UserService, private fb: FormBuilder) { }

  personalForm = this.fb.group({
    personalNumber: ['']
  });


  ngOnInit(): void {
    console.log(this.risksService.getMockRisk());
    console.log(this.userService.getMockUser());
  }

  onSubmit() {
    console.log(this.personalForm);
  }
}
