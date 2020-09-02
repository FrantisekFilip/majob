import { Component, OnInit } from '@angular/core';
import { RisksService } from '../../catalogue/risks.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  constructor(private risksService: RisksService) { }

  ngOnInit(): void {
    console.log(this.risksService.getMockRisk());
  }

}
