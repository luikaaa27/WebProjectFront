import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {LogInComponent} from '../log-in/log-in.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  logged = this.loginService.logged;
  constructor( public loginService: LoginService) { }
  ngOnInit(): void {
    this.logged = this.loginService.logged;
  }
  logout() {
    localStorage.clear();
    this.logged = false;
    this.loginService.logged = false;
  }
}
