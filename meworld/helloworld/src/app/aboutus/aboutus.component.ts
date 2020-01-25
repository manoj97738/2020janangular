import { Component, OnInit } from '@angular/core';
import { MyService } from "../common.service";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public myserv: MyService) { }

  ngOnInit() {
    console.log(this.myserv.data)
  }

}
