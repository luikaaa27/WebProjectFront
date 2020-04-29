import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Category} from "../models";

@Component({
  selector: 'app-recipe-categories-details',
  templateUrl: './recipe-categories-details.component.html',
  styleUrls: ['./recipe-categories-details.component.css']
})
export class RecipeCategoriesDetailsComponent implements OnInit {
  categories: Category[];
  constructor(public categoriesService: RecipeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList() {
    this.categoriesService.getCategoryList().subscribe(products => this.categories = products);
  }
}
