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
  imports: [CommonModule,MatFormFieldModule,MatSelectModule,MatButtonModule,MatDialogModule],
  templateUrl: './choose-category-dialog.component.html',
  styleUrl: './choose-category-dialog.component.css'
})

export class ChooseCategoryDialogComponent implements OnInit {

  categories: WordCategory[] = [];
  public selectedCategory: WordCategory | undefined;

  constructor(private categoryManagementService: CategoryManagementService, @Inject (MAT_DIALOG_DATA) private game: GameProfile, private router: Router) {}
  ngOnInit(): void {
    this.categories = this.categoryManagementService.list();
  }

  playGame() {
    if(this.game != undefined && this.selectedCategory != undefined){
      let gameURL= this.game.GameURL;
      let category= this.selectedCategory.CategoryId;
      this.router.navigate([gameURL,category]);
    }
    }
}