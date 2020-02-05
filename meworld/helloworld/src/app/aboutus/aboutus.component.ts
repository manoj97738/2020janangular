import { Component, OnInit } from '@angular/core';
import { MyService } from "../common.service";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  loginForm: FormGroup;
  submit = false;
  registerForm: FormGroup;
  constructor(public myserv: MyService) {
    this.loginForm = new FormGroup({
      uname: new FormControl('', [Validators.required]),
      psw: new FormControl(''),
      ckb1: new FormControl(''),
      edbk1: new FormControl(''),
      items: new FormArray([]),
      phonnumbers: new FormArray([]),
      address: new FormGroup({
        line1: new FormControl(''),
        pincode: new FormControl(''),
        state: new FormControl(''),
        myaddress: new FormGroup({
          line1: new FormControl(''),
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
  get uname() {
    return this.loginForm.get('uname');
  }
  set uname(value) {
    this.uname = value;
  }
  get addItem() {
    return this.loginForm.get('items') as FormArray;
  }
  get phonnumbers() {
    return this.loginForm.get('phonnumbers') as FormArray;

  }
  addphonnumbers() {
    this.phonnumbers.push(new FormControl(''));
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
    this.submit = true;
    console.log(this.loginForm);
    console.log(this.loginForm.value)

  }
}
