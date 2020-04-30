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
    alert('Your request has been received. Please, wait for confirm letter');
    this.loginService.putUser(this.user.username, this.user.email).subscribe();
  }
}
