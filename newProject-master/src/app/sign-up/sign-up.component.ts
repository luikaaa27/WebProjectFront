import { Component, OnInit } from '@angular/core';
import {users} from '../users';
import {LoginService} from '../login.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username = '' ;
  email = '';
  password = '';
  constructor(private loginService: LoginService,
              private route: Router) {
  }

  ngOnInit(): void {

  }

  /*signUp() {
    this.loginService.signUp(this.username, this.email, this.password)
      .subscribe(res => {
      this.username = ''h;
      this.email = '';
      this.password = '';
      /*this.loginService.logged = true;
      this.location.back();

    });
  }*/

  signUp() {
    this.loginService.signUp(this.username, this.email, this.password)
      .subscribe(res => {
        this.loginService.login(this.username, this.password)
          .subscribe(res1 => {
            localStorage.setItem('token', res1.token);
            this.username = '';
            this.password = '';
            this.loginService.logged = true;
            this.route.navigate(['/']);
          });
      });

  }
}
