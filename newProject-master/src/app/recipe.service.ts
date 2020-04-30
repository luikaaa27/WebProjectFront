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
  BASE_URL = 'http://127.0.0.1:8000';
  recipes: Recipe[] = RECIPES.concat(myRecipes) ;
  categories: Category[] = CATEGORIES;

  constructor(private http: HttpClient) {
  }
  getRecipeList(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.BASE_URL}/api/recipes/`);
  }
  getRecipeById(id): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.BASE_URL}/api/recipes/${id}/`);
  }
  delete(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.BASE_URL}/api/recipes/${id}/`);
  }
  initCategories() {
    this.categories.forEach((category: any) => category.recipes = this.recipes
      .filter(product => product.categoryId === category.id));
  }

  getAlternativeProductList(): Observable<any[]> {
    this.initCategories();
    return of(this.categories);
  }
  addRecipe(name, ingredients, description, rating, image, categoryId, owner): Observable <Recipe> {
    return this.http.post<Recipe>(`${this.BASE_URL}/api/recipes/`, {
      name,
      ingredients,
      description,
      rating,
      image,
      categoryId,
      owner
    });
  }
  search(name: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.BASE_URL}/api/recipes/search/${name}/`);
  }
  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }
  getCategory(id: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.BASE_URL}/api/categories/${id}/recipes`);
  }
  change(recipe: Recipe, id: number): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.BASE_URL}/api/recipes/${id}/`, {
      recipe
    });
  }
}
