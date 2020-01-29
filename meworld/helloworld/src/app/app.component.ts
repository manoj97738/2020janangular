import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe, DecimalPipe } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HELLO worlDDDDD and I am NOobOdy';
  mySalary = 2500000.2457896;
  dateObj = new Date();
  dtPipe: DatePipe;
  myData = [
    { id: 1, name: 'manoj' },
    { id: 2, name: 'suraj' }
  ];
  constructor(public router: Router, public decimalPie: DecimalPipe) {
    this.dtPipe = new DatePipe('en-US');
    console.log(this.dtPipe.transform(new Date(), 'dd-MMM-yyyy hh:mm a'));
    console.log(this.decimalPie.transform(10520215151.2));
  }
  myclick(dty) {
    this.router.navigate(['/contact', dty.id, dty.name]);
    localStorage.setItem('mydata', JSON.stringify(dty));
  }
}
