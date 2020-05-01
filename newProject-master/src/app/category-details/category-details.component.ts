import { Component, OnInit } from '@angular/core';
import {Category, Recipe} from '../models';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  recipes: Recipe[];
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getCategory(id).subscribe(item => this.recipes = item);
  }
}
