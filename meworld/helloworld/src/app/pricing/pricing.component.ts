import { Component, OnInit } from '@angular/core';
import { MyService } from '../common.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(public myserv: MyService) {

  }

  ngOnInit() {
    console.log(this.myserv);
  }

}
