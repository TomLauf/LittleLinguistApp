import { Component } from '@angular/core';
import { GameHeaderComponent } from "../game-header/game-header.component";

@Component({
  selector: 'app-trivia-game',
  standalone: true,
  imports: [GameHeaderComponent],
  templateUrl: './trivia-game.component.html',
  styleUrl: './trivia-game.component.css'
})
export class TriviaGameComponent {

  constructor(){
    
  }
}
