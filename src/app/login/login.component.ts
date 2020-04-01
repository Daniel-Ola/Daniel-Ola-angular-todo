import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email = 'hello there' ;
username = 'Username' ;
password ;

  constructor() { }
  ngOnInit() {
    console.log(this.email);
  }

  log(val){
    console.log(val);

  }

}
