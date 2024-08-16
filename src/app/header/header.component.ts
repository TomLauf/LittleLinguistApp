import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';
// import { ExitGameDialogComponent } from '../exit-game-dialog/exit-game-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatTooltipModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // isGameComponent: boolean = false;
  // constructor(private dialog:MatDialog, private router: Router, private route: ActivatedRoute) {}

  // if(isGameComponent = this.router.url.includes('Game')){

  // }
  // openExitGameDialog(): void {
  //   if(this.isGameComponent){
  //     const dialogRef = this.dialog.open(ExitGameDialogComponent);

  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result) {
  //         this.router.navigate(['/chooseGame']);
  //       }
  //     });
  //   }
    
}
