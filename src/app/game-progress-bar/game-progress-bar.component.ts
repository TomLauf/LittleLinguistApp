import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-game-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './game-progress-bar.component.html',
  styleUrl: './game-progress-bar.component.css'
})
export class GameProgressBarComponent {
  progressValue: number = 0;

}
