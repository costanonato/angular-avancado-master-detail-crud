import { Component } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/components/base-resource-list/base-resource-list.component";

import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {

  constructor(private categoryService: CategoryService) { 
    super(categoryService);
  }

}
