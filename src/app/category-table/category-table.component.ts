import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { WordCategory } from '../shared/model/WordCategory';
import { RouterModule } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { Language } from '../shared/model/Language';


@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.css'
})

export class CategoryTableComponent {
  displayedColumns: string[] = ['CategoryName', 'NumOfWords', 'LastUpdate', 'Actions'];
  dataSource: WordCategory[] = [];

  constructor(private categoryManagementService: CategoryManagementService) {
    this.dataSource = this.categoryManagementService.list();
  }

  deleteCategory(categoryId: number): void {
    this.categoryManagementService.delete(categoryId);
    this.dataSource = this.categoryManagementService.list();
  }
}
