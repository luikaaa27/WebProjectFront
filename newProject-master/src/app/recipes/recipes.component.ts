import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor(public recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipeList().
    subscribe((
      products
    ) => this.recipes = products);
  }

}
