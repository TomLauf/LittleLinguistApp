import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CategoryManagementService } from '../Services/category-management.service';
import { WordCategory } from '../shared/model/WordCategory';
import { RouterModule } from '@angular/router';
import { Language } from '../shared/model/Language';

@Component({
  selector: 'app-choose-category',
  standalone: true,
  imports: [MatFormFieldModule, MatOptionModule, MatSelectModule, RouterModule],
  templateUrl: './choose-category.component.html',
  styleUrl: './choose-category.component.css'
})
export class ChooseCategoryComponent {
  categories: WordCategory[] = [];
  selectedCategory: WordCategory = new WordCategory(0, "", Language.English, Language.Hebrew);

  constructor(private categoryManagementService: CategoryManagementService) {
    this.categories = categoryManagementService.list()
  }
}
