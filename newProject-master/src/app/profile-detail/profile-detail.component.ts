import { Component, OnInit } from '@angular/core';
import {user} from '../users';
import {myRecipes} from '../myRecipes';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  user = user;
  recipes = myRecipes;
  constructor() { }
  ngOnInit(): void {
  }
  change(value: string, value2: string, value3: string) {
    this.user.name = value;
    this.user.last_name = value2;
    this.user.email = value3;
  }
}
