import { Component, OnInit, } from '@angular/core';
import { GameProfile } from '../shared/model/GameProfile';
import { GamesInfoService } from '../Services/GamesInfo.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-choose-game',
  standalone: true,
  imports: [CommonModule,MatCardModule,RouterModule],
  templateUrl: './choose-game.component.html',
  styleUrl: './choose-game.component.css'
})
// export class ChooseGameComponent {
//   private games: GameProfile[] = [];
// }

// constructor(private GamesInfoService: GamesInfoService) {
//   this.games = GamesInfoService.list()
// }


export class ChooseGameComponent implements OnInit { // Implement OnInit for lifecycle hook
  public games: GameProfile[] = [];

  constructor(private gamesInfoService: GamesInfoService) { // Fixed naming convention: GamesInfoService -> gamesInfoService
  }

  ngOnInit(): void { // Use ngOnInit lifecycle hook for initialization
    this.games = this.gamesInfoService.list(); // Corrected method call: GamesInfoService.list() -> this.gamesInfoService.list()
  }
}