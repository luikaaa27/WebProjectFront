import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  logged;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.logged = this.loginService.logged;
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }
}
