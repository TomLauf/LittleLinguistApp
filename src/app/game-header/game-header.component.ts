import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExitGameDialogComponent } from '../exit-game-dialog/exit-game-dialog.component';
import { CategoryManagementService } from '../Services/category-management.service';
import { WordCategory } from '../shared/model/WordCategory';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css',
})
export class GameHeaderComponent implements OnInit {
  GameName = '';
  category: WordCategory | undefined;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private CategoryManagementService: CategoryManagementService
  ) {
    const id = this.route.snapshot.paramMap.get('categoryId');
    if (id != null) {
      this.CategoryManagementService.get(id).then((category) => {
        this.category = category;
      });
    }
  }

  ngOnInit(): void {
    const URLGameName = this.route.snapshot.url[0]?.path;
    this.GameName = this.formatGameName(URLGameName);
  }

  formatGameName(name: string): string {
    return name.replace(/([A-Z])/g, ' $1').trim();
  }

  openExitGameDialog(): void {
    const dialogRef = this.dialog.open(ExitGameDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/chooseGame']);
      }
    });
  }
}
