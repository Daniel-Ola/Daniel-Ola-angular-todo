import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

rForm: FormGroup;
signup = '' ;
email = '' ;
password = '' ;
confirmPassword = '' ;
username = '' ;
post;
confirmPasswordState = true;
template;
step = {
  username: false,
  email: true,
  password: true,
  confirmPassword: true,
  agree: true,
  submitBtn: true
};
currentStep = 1;



  constructor(public regProc: RegisterService, private fb: FormBuilder) {
    this.rForm = fb.group({
      email: [null, Validators.compose([
        Validators.required, Validators.email])] ,
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])] ,
      username: [null, Validators.required] ,
      confirmPassword: [null, Validators.required],
      agree: ''
    }) ;
  }

  ngOnInit() {
    // console.log($('#username')); npm i @types/jquery
    this.template = this.regProc.registerProcess() ;
  }

  nextStep(id) {
    if(id == 2) { // email
      Object.assign(this.step, {username: true, email: false, password: true, confirmPassword: true, agree: true, submitBtn: true}) ;
      $('#usernameDiv').addClass('zoomLeft');
    }
    if(id == 3) { // password
      Object.assign(this.step, {username: true, email: true, password: false, confirmPassword: true, agree: true, submitBtn: true}) ;
    }
    if(id == 4) { // cpwrd, agree nd submit
      Object.assign(this.step, {username: true, email: true, password: true, confirmPassword: false, agree: false, submitBtn: false}) ;
    }
    this.currentStep = id;
  }

  confirmMyPassword(x, y) {
    if(x === y) {
      this.confirmPasswordState = false ;
    } else {
      this.confirmPasswordState = true ;
    }
  }

  backStep(id) {
    if(id == 1) { // username
      Object.assign(this.step, {username: false, email: true, password: true, confirmPassword: true, agree: true, submitBtn: true}) ;
    }
    if(id == 2) { // email
      Object.assign(this.step, {username: true, email: false, password: true, confirmPassword: true, agree: true, submitBtn: true}) ;
    }
    if(id == 3) { // password
      Object.assign(this.step, {username: true, email: true, password: false, confirmPassword: true, agree: true, submitBtn: true}) ;
    }
    this.currentStep = id;
  }

  addPost(post) {
    // console.log(post);
    this.template = this.regProc.getFormValues();
    this.template.username = post.username;
    this.template.email = post.email;
    this.template.password = post.password;
  }




  log(x) {
    console.log(x);
  }

}
