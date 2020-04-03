import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  email: string = '' ;
  password: string = '' ;
  titleAlert: string = 'Please Enter your Email' ;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      // for the email and password and all quotes may or may not be added
      email: [null, Validators.required] , // the first value null sets the initial value of the form
     password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      validate: ''
    }) ;
  }

  addPost(post){
    this.password = post.password;
    this.email = post.email ;
  }


  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if(validate == '1'){
          this.rForm.get('email').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'Email should consist of at least 3 characters' ;
        } else {
          this.rForm.get('email').setValidators(Validators.required) ;
        }
        this.rForm.get('email').updateValueAndValidity() ;
      }
    ) ;
  }


}
