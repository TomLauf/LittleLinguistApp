import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { WordCategory } from '../shared/model/WordCategory';
import { RouterModule } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';

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


  constructor(private categoryManagementService: CategoryManagementService, private dialog: MatDialog) {
    this.dataSource = this.categoryManagementService.list();
  }

  deleteCategory(categoryId: number): void {
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent, { data: categoryId });

    dialogRef.afterClosed().subscribe(deleteConfirmed => {
      if (deleteConfirmed) {
        this.categoryManagementService.delete(categoryId);
        this.dataSource = this.categoryManagementService.list();
      }
    });
  }
}
