import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipes';
import {Observable, of} from 'rxjs';
import {RECIPES} from '../recipes';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  recipes: Recipe[];
  name: string;
  ngOnInit(): void {
    this.name = '';
  }
  private search() {
    this.recipes = [];
    this.recipeService.search(this.name)
      .subscribe(recipes => this.recipes = recipes);
  }
  onSubmit() {
    this.search();
  }
}
