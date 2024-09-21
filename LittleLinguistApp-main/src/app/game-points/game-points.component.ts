import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-game-points',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './game-points.component.html',
  styleUrl: './game-points.component.css',
})
export class GamePointsComponent {
  @Input() points!: number;
}
