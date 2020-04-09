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

  shiftLeft(divs) {
    if (divs.hasClass('zoomRight')) {
      divs.mail.toggleClass('zoomRight zoomLeft');
    } else { divs.mail.addClass('zoomLeft'); }
  }

  shiftRight(divs) {
    if (divs.hasClass('zoomLeft')) {
      divs.toggleClass('zoomRight zoomLeft');
    } else { divs.addClass('zoomRight'); }
  }

}
