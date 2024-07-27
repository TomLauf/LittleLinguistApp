import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CategoryManagementService } from '../Services/category-management.service';
import { WordCategory } from '../shared/model/WordCategory';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-choose-category-dialog',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatSelectModule,MatButtonModule,MatDialogModule],
  templateUrl: './choose-category-dialog.component.html',
  styleUrl: './choose-category-dialog.component.css'
})

export class ChooseCategoryDialogComponent implements OnInit {
  categories: WordCategory[] = [];

  constructor(private categoryManagementService: CategoryManagementService) {}
  ngOnInit(): void {
    this.categories = this.categoryManagementService.list();
  }
}


