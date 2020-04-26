import { Component, OnInit } from '@angular/core';
import {users} from '../users';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginService} from '../login.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  username = '';
  password = '';

  constructor(private loginService: LoginService,
              private location: Location) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.logged = true;
    }
  }
  login() {
    this.loginService.login(this.username, this.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.loginService.logged = true;
        this.username = '';
        this.password = '';
        this.location.back();
      });
  }
}
