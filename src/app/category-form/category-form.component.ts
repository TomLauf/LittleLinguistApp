import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  currentCategory: WordCategory = new WordCategory(
    '',
    '',
    Language.English,
    Language.Hebrew
  );

  constructor(
    private categoryManagementService: CategoryManagementService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('categoryId');

    if (id != null) {
      this.categoryManagementService.get(id).then((category) => {
        if (category) {
          console.log(category);

          this.currentCategory = category;
        }
      });
    }
  }

  addWordsPairToCategory() {
    this.currentCategory.words.push(new WordsPair('', ''));
  }

  deleteWordsPairToCategory(wordsPair: WordsPair) {
    this.currentCategory.words = this.currentCategory.words.filter(
      (wp) => wp != wordsPair
    );
  }

  saveCategory() {
    if (this.currentCategory.words.length == 0) {
      alert('you must have at least one pair of words!');
      return;
    }
    if (this.currentCategory.id == '') {
      this.categoryManagementService.add(this.currentCategory).then(() => {
        this.router.navigate(['/Admin']);
        console.log('add', this.currentCategory);
      });
    } else {
      this.categoryManagementService.update(this.currentCategory).then(() => {
        this.router.navigate(['/Admin']);
        console.log('update', this.currentCategory);
      });
    }
  }
}
