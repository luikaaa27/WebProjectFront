import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthInterceptor} from './auth.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeCategoriesDetailsComponent } from './recipe-categories-details/recipe-categories-details.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeCategoriesDetailsComponent,
    RecipeDetailsComponent,
    RecipesComponent,
    TopBarComponent,
    LogInComponent,
    SignUpComponent,
    ProfileComponent,
    ProfileDetailComponent,
    RecipeSearchComponent,
    AddRecipeComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'categories', component: RecipeCategoriesDetailsComponent},
      {path: 'categories/:id', component: CategoryDetailsComponent},
      {path: 'recipes/:id', component: RecipeDetailsComponent},
      {path: 'recipes', component: RecipesComponent},
      {path: 'login', component: LogInComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/details', component: ProfileDetailComponent},
      {path: 'recipe/add', component: AddRecipeComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
