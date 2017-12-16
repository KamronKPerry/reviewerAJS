import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public email = '';
public confirmEmail = '';
public password = '';
public confirmPassword = '';
public register = () => {
  if (!!this.email && !!this.confirmEmail && !!this.password && !!this.confirmPassword) {
    if (this.password === this.confirmPassword && this.email === this.confirmEmail) {
alert('Register Success');
      } else {
       alert('Register Failed');
    }
  }
}
  constructor() { }
  ngOnInit() {
  }
}
