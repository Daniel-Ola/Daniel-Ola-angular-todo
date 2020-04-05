import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  registerProcess() {
    return [
      {
        step : '1',
        username : '',
        value: '',
        template: '',
        valid: false
      } ,
      {
        step: '2' ,
        email: '',
        value: '',
        template: '',
        valid: false
      } ,
      {
        step: '3' ,
        password: '',
        value: '',
        template: '',
        valid: false
      } ,
      {
        step: '4' ,
        confirmPassword: '',
        value: '',
        template: '',
        valid: false
      }
    ] ;
  }

  getFormValues(){
    const formValues = {
      username: '',
      email: '',
      password: ''
    };
    return formValues;
  }

}
