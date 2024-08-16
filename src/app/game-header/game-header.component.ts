import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExitGameDialogComponent } from '../exit-game-dialog/exit-game-dialog.component';


@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css'
})
export class GameHeaderComponent {
  GameName = "";
  constructor(private route: ActivatedRoute, private dialog:MatDialog, private router: Router) {}

  ngOnInit(): void {
    const URLGameName = this.route.snapshot.url[0]?.path;
      this.GameName = this.formatGameName(URLGameName);
    }
  
    formatGameName(name: string): string {
      return name.replace(/([A-Z])/g, ' $1').trim();
    }

    openExitGameDialog(): void {
      const dialogRef = this.dialog.open(ExitGameDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.router.navigate(['/chooseGame']);
        }
      });
    }

  }  

