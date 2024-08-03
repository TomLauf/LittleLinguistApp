import { Component, OnInit, } from '@angular/core';
import { GameProfile } from '../shared/model/GameProfile';
import { GamesInfoService } from '../Services/GamesInfo.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChooseCategoryDialogComponent } from '../choose-category-dialog/choose-category-dialog.component';

@Component({
  selector: 'app-choose-game',
  standalone: true,
  imports: [CommonModule,MatCardModule,RouterModule],
  templateUrl: './choose-game.component.html',
  styleUrl: './choose-game.component.css'
})

export class ChooseGameComponent implements OnInit {
  public games: GameProfile[] = [];

  constructor(private gamesInfoService: GamesInfoService, private dialog: MatDialog) {
  }

  ngOnInit(): void { 
    this.games = this.gamesInfoService.list();
  }

  chooseCategory(game: GameProfile) {
      console.log("hello")
    this.dialog.open(ChooseCategoryDialogComponent, {data:game})
    } 

}