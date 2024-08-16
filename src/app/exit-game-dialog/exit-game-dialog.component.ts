import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-game-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './exit-game-dialog.component.html',
  styleUrl: './exit-game-dialog.component.css'
})

export class ExitGameDialogComponent {
 constructor(public dialogRef:MatDialogRef<ExitGameDialogComponent>){}

 stayInGame(): void {
  this.dialogRef.close(false);
}

exitGame(): void {
  this.dialogRef.close(true);
}
}
