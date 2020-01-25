import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from "../common.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, public myserv: MyService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      console.log(data);
      console.log(localStorage.getItem('mydata'));
    });
  }
  gotoMyService() {
    this.myserv.data = { id: 210, name: 'manoj' }
    this.router.navigate(['/aboutus']);
  }

}
