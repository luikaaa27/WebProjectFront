import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-categories-details',
  templateUrl: './recipe-categories-details.component.html',
  styleUrls: ['./recipe-categories-details.component.css']
})
export class RecipeCategoriesDetailsComponent implements OnInit {
  categoriesWithRecipes: any;
  constructor(public categoriesService: RecipeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getAlternativeProducts();
  }
  getAlternativeProducts() {
    this.categoriesService.getAlternativeProductList().subscribe(products => this.categoriesWithRecipes = products);
  }
}
