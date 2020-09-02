import { Component, OnInit } from '@angular/core';
import { RisksService } from '../../catalogue/risks.service';
import { UserService } from '../../cache/user.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  constructor(private risksService: RisksService, private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.risksService.getMockRisk());
    console.log(this.userService.getMockUser());
  }

}
