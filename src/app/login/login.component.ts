import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  public login = () => {
    if (!!this.password && !!this.email) {
    alert('Login Success');
    // this.AuthDataService.Login(email, password).then()
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
