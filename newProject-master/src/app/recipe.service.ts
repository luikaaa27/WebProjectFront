import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Recipe, RECIPES} from './recipes';
import {CATEGORIES, Category} from './recipeCategories';
import {catchError, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {myRecipes} from './myRecipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = RECIPES.concat(myRecipes) ;
  categories: Category[] = CATEGORIES;

  getRecipeList(): Observable<Recipe[]> {
    this.recipes = RECIPES.concat(myRecipes);
    return of(this.recipes);
  }
  getCategoryList(): Observable<Category[]> {
    return of(this.categories);
  }
  getRecipeById(id): Observable<any> {
    const productWeNeed = this.recipes.find((recipe: any) => recipe.id === id);
    return of(productWeNeed);
  }

  initCategories() {
    this.categories.forEach((category: any) => category.recipes = this.recipes
      .filter(product => product.categoryId === category.id));
  }

  getAlternativeProductList(): Observable<any[]> {
    this.initCategories();
    return of(this.categories);
  }

}
