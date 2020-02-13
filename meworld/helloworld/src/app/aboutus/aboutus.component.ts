import { Component, OnInit } from '@angular/core';
import { MyService } from "../common.service";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { MyInjectabelService } from './myinjectbale.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  loginForm: FormGroup;
  submit = false;
  registerForm: FormGroup;
  errorObj = {
    error: false,
    somoetherclas: false
  }
  constructor(
    public myserv: MyService,
    public myS: MyInjectabelService,
    public http: HttpClient) {
    this.loginForm = new FormGroup({
      uname: new FormControl('', Validators.required),
      psw: new FormControl('', [Validators.required, Validators.min(10)]),
      ckb1: new FormControl(''),
      edbk1: new FormControl(''),
      items: new FormArray([]),
      phonnumbers: new FormArray([]),
      address: new FormGroup({
        line1: new FormControl('', [Validators.required, Validators.min(10)]),
        pincode: new FormControl(''),
        state: new FormControl(''),
        myaddress: new FormGroup({
          line1: new FormControl('', [Validators.required, Validators.min(10)]),
          pincode: new FormControl(''),
          state: new FormControl(''),
        })
      })
    });

    this.registerForm = new FormGroup({
      uname: new FormControl(''),
      psw: new FormControl(''),
      ckb1: new FormControl(''),
      edbk1: new FormControl(''),
      address: new FormGroup({
        line1: new FormControl(''),
        pincode: new FormControl(''),
        state: new FormControl(''),
      })
    });
    // this.loginForm.valueChanges.subscribe((dt) => {
    //   console.log(dt)

    // });
    this.loginForm.get('uname').valueChanges.subscribe((dt) => {
      console.log(dt);

    });

  }
  get psw() {
    return this.loginForm.get('psw');
  }
  get uname() {
    return this.loginForm.get('uname');
  }
  set uname(value) {
    this.uname = value;
  }
  get addressLine1() {
    return this.loginForm.get('address.line1');
  }
  get addressLineInner() {
    return this.loginForm.get('address.myaddress.line1');
  }
  get addItem() {
    return this.loginForm.get('items') as FormArray;
  }
  get phonnumbers() {
    return this.loginForm.get('phonnumbers') as FormArray;

  }
  addphonnumbers() {
    this.phonnumbers.push(new FormControl('', [Validators.required, Validators.min(10)]));
  }
  addIT() {
    this.addItem.push(new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
    }));
  }
  myalert() {
    console.log('alert');
  }
  ngOnInit() {
    console.log(this.myserv.data)
  }
  myMethod() {
    alert(this.loginForm.valid);
    this.errorObj.error = true;
    this.errorObj.somoetherclas = true;
    this.submit = true;
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.loginForm.value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);

        },
        () => {
          console.log('comple');
        });
    this.myS.postData(this.loginForm.value).then((response) => {
      console.log(response);
    });
  }
}
