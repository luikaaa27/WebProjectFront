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
  neededRecipe: Recipe;
  ngOnInit(): void {
  }
  search(name): void {
    const recipeWeNeed = RECIPES.find((recipe: any) => recipe.name === name);
    this.neededRecipe = recipeWeNeed;
  }

}
