import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  myData = [
    { id: 1, name: 'manoj' },
    { id: 2, name: 'suraj' }
  ]
  constructor(public router: Router) {

  }
  myclick(dty) {
    this.router.navigate(['/contact', dty.id, dty.name]);
    localStorage.setItem('mydata', JSON.stringify(dty));
  }
}
