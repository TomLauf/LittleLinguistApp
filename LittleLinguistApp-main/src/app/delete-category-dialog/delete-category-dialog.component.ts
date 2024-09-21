import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { WordCategory } from '../shared/model/WordCategory';

@Component({
  selector: 'app-delete-category-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete-category-dialog.component.html',
  styleUrl: './delete-category-dialog.component.css',
})
export class DeleteCategoryDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public category: WordCategory
  ) {}
}
