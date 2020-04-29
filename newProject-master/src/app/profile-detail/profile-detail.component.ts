import { Component, OnInit } from '@angular/core';
import {myRecipes} from '../myRecipes';
import {LoginService} from '../login.service';
import {Observable} from 'rxjs';
import {User} from '../models';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  logged;
  user: User;
  username='';
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.loginService.getUser().
    subscribe(user => this.user = user);
  }
    logOut() {
    localStorage.clear();
    this.logged = false;
    this.loginService.logged = false;
  }
  save() {
    this.user.username = this.username;
  }
}
