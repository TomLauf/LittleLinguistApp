import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WordCategory } from '../shared/model/WordCategory';
import { Language } from '../shared/model/Language';
import { WordsPair } from '../shared/model/WordsPair';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { partition } from 'rxjs';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit {

  currentCategory: WordCategory = new WordCategory(0, "", Language.English, Language.Hebrew);

  constructor(private CategoryManagementService: CategoryManagementService, private router: ActivatedRoute) {
      let id = this.router.snapshot.paramMap.get('CategoryId');

      // Edit mode
      if (id !=null){
          let idAsNumber = parseInt(id);
          let category = CategoryManagementService.get(idAsNumber);
          if (category != null){
            this.currentCategory = category;
          }
      }
  }

  ngOnInit(): void {
    // if (this.CategoryId) {
    //   let id: number = parseInt(this.CategoryId);
    //   let WordCategory = this.CategoryManagementService.get(id);
    //   // this.currentCategory.Words.push(new WordsPair("",""));
    //   if (WordCategory) {
    //     this.currentCategory = WordCategory;
    //   }
    // }
  }

  addWordsPairToCategory() {
    this.currentCategory.Words.push(new WordsPair("", ""));
  }
}
