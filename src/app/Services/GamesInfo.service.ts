import { Injectable } from '@angular/core';
import { GameProfile } from '../shared/model/GameProfile';
// import { ActivatedRoute } from '@angular/router';
// import { WordCategory } from '../shared/model/WordCategory';
 
@Injectable({
  providedIn: 'root',
})
export class GamesInfoService {
  private games: GameProfile[] = [
    new GameProfile(
      1,
      'Translate Game',
      'Translate words and phrases from Hebrew to English.',
      'TranslateGame',
      1
    ),
    new GameProfile(
      2,
      'Sort Words',
      'Arrange jumbled words to form correct sentences.',
      'SortGame',
      3
    ),
    new GameProfile(
      3,
      'Mixed Words',
      'Unscramble letters to form correct English words.',
      'MixedWordsGame',
      1
    ),
    new GameProfile(
      4,
      'Trivia',
      'Answer multiple-choice questions on various topics.',
      'TriviaGame',
      1
    ),
  ];

  constructor() {}

  list(): GameProfile[] {
    return this.games;
  }

  getGameById(id: number): GameProfile | undefined {
    return this.games.find(game => game.GameId === id);
  }

}