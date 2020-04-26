import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../recipes';
import {myRecipes} from '../myRecipes';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(name: string, description: string, ingredients: string, image) {
    if (name === '' || description === '' || ingredients === '' || image === '') {
      return window.alert('You need to add something!!!');
    }
    name = name.trim();
    description = description.trim();
    ingredients = ingredients.trim();
    image = image.trim();
    if (!name) { return; }
    RECIPES.push({categoryId: null, ingredients, id: Math.random(), name, description, rating: 0, image});
    myRecipes.push({categoryId: null, id: Math.random(), name, description, ingredients, rating: 0, image});
  }
}
