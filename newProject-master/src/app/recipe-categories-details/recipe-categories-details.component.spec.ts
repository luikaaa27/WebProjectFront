import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoriesDetailsComponent } from './recipe-categories-details.component';

describe('RecipeCategoriesDetailsComponent', () => {
  let component: RecipeCategoriesDetailsComponent;
  let fixture: ComponentFixture<RecipeCategoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCategoriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCategoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
