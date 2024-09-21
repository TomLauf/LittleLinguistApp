import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CategoryManagementService } from '../Services/category-management.service';
import { WordCategory } from '../shared/model/WordCategory';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { GameProfile } from '../shared/model/GameProfile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-category-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './choose-category-dialog.component.html',
  styleUrl: './choose-category-dialog.component.css',
})
export class ChooseCategoryDialogComponent implements OnInit {
  categories: WordCategory[] = [];
  public selectedCategory: WordCategory | undefined;
  public errorMessage: string = '';

  constructor(
    private categoryManagementService: CategoryManagementService,
    @Inject(MAT_DIALOG_DATA) private game: GameProfile,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.categories = this.categoryManagementService.list();
  }
  gameName = this.game.GameName;
  checkGameReady() {
    if (
      this.selectedCategory &&
      this.selectedCategory.words.length < this.game.MinWordsNo
    ) {
      this.errorMessage = `Note that at least ${this.game.MinWordsNo} words required.`;
    } else {
      this.errorMessage = '';
    }
  }

  playGame() {
    if (this.game != undefined && this.selectedCategory != undefined) {
      const gameURL = this.game.GameURL;
      const category = this.selectedCategory.categoryId;
      this.router.navigate([gameURL, category]);
    }
  }
}
