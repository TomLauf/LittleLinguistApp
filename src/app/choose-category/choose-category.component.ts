import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CategoryManagementService } from '../Services/category-management.service';
import { WordCategory } from '../shared/model/WordCategory';

@Component({
  selector: 'app-choose-category',
  standalone: true,
  imports: [MatFormFieldModule,MatOptionModule,MatSelectModule],
  templateUrl: './choose-category.component.html',
  styleUrl: './choose-category.component.css'
})
export class ChooseCategoryComponent {
  categories: WordCategory[] = [];

  constructor(private categoryManagementService: CategoryManagementService){
    this.categories = categoryManagementService.list()
  }
}
