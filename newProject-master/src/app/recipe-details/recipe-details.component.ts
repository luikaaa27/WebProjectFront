import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe, RECIPES} from '../recipes';
import {Location} from '@angular/common';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  constructor(private route: ActivatedRoute , public recipeService: RecipeService, private router: Router,
              private loginService: LoginService) {}
  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(id).subscribe(item => this.recipe = item);
  }
  change(newDescription, newIngr) {
    this.recipe.description = newDescription;
    this.recipe.ingredients = newIngr;
  }

  /* delete(): void {
     RECIPES.filter(recipe => recipe.id !== this.recipe.id);
     this.router.navigate(['/recipes']);
   }*/
  delete() {
    this.recipeService.delete(this.recipe.id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => console.log(error));
  }
}
