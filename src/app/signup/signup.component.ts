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
    const divs = {
      mail: $('#emailDiv'),
      uname: $('#usernameDiv'),
      pword: $('#passDiv'),
      cpword: $('#cpassDiv'),
    }

    if(id == 2) { // email

      if(divs.uname.hasClass('zoomRight')) {
        divs.uname.toggleClass('zoomRight zoomLeft');
      } else { divs.uname.addClass('zoomLeft'); }

      setTimeout(() => {
        Object.assign(this.step, {username: true, email: false, password: true, confirmPassword: true, agree: true, submitBtn: true}) ;
        if (divs.mail.hasClass('zoomLeft')) {
          divs.mail.toggleClass('zoomRight');
        } else { divs.mail.addClass('zoomRight'); }
      }, 1000);

    }


    if (id == 3) { // password

      if(divs.mail.hasClass('zoomRight')) {
        divs.mail.toggleClass('zoomRight zoomLeft');
      } else { divs.mail.addClass('zoomLeft'); }

      setTimeout(() => {
        Object.assign(this.step, {username: true, email: true, password: false, confirmPassword: true, agree: true, submitBtn: true}) ;
        if(divs.pword.hasClass('zoomLeft')) {
          divs.pword.toggleClass('zoomRight');
        } else { divs.pword.addClass('zoomRight'); }
      }, 1000);
    }


    if(id == 4) { // cpwrd, agree nd submit

      if(divs.pword.hasClass('zoomRight')) {
        divs.pword.toggleClass('zoomRight zoomLeft');
      } else { divs.pword.addClass('zoomLeft'); }

      setTimeout(() => {
        Object.assign(this.step, {username: true, email: true, password: true, confirmPassword: false, agree: false, submitBtn: false}) ;
        if(divs.cpword.hasClass('zoomLeft')) {
          divs.cpword.toggleClass('zoomRight');
        } else { divs.cpword.addClass('zoomRight'); }
      }, 1000);
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
    const divs = {
      mail: $('#emailDiv'),
      uname: $('#usernameDiv'),
      pword: $('#passDiv'),
      cpword: $('#cpassDiv'),
    }
    if (id == 1) { // username

      if (divs.mail.hasClass('zoomRight')) {
        divs.mail.toggleClass('zoomRight zoomLeft');
      } else { divs.mail.addClass('zoomLeft'); }

      setTimeout(() => {
        Object.assign(this.step, {username: false, email: true, password: true, confirmPassword: true, agree: true, submitBtn: true}) ;
        if (divs.uname.hasClass('zoomLeft')) {
          divs.uname.toggleClass('zoomRight zoomLeft');
        } else { divs.uname.addClass('zoomRight'); }
      }, 1000);

    }

    if(id == 2) { // email

      if (divs.pword.hasClass('zoomRight')) {
        divs.pword.toggleClass('zoomRight zoomLeft');
      } else { divs.pword.addClass('zoomLeft'); }

      setTimeout(() => {
        Object.assign(this.step, {username: true, email: false, password: true, confirmPassword: true, agree: true, submitBtn: true}) ;
        if (divs.mail.hasClass('zoomLeft')) {
          divs.mail.toggleClass('zoomRight zoomLeft');
        } else { divs.mail.addClass('zoomRight'); }
      }, 1000);

    }
    if(id == 3) { // password

      if (divs.cpword.hasClass('zoomRight')) {
        divs.cpword.toggleClass('zoomRight zoomLeft');
      } else { divs.cpword.addClass('zoomLeft'); }

      setTimeout(() => {
        Object.assign(this.step, {username: true, email: true, password: false, confirmPassword: true, agree: true, submitBtn: true}) ;
        if (divs.pword.hasClass('zoomLeft')) {
          divs.pword.toggleClass('zoomRight zoomLeft');
        } else { divs.pword.addClass('zoomRight'); }
      }, 1000);

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
