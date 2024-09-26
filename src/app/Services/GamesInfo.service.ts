import { Injectable } from '@angular/core';
import { GameProfile } from '../shared/model/GameProfile';

@Injectable({
  providedIn: 'root',
})
export class GamesInfoService {
  private games: GameProfile[] = [
    new GameProfile(
      1,
      'Translate Words',
      'Translate words and phrases from Hebrew to English.',
      'TranslateGame',
      'assets/game-pics/translateWordsPic.png',
      1
    ),
    new GameProfile(
      2,
      'Sort Words',
      'Sort the words that appear on the screen into the correct categories',
      'SortGame',
      'assets/game-pics/sortWordsPic.png',
      3
    ),
    new GameProfile(
      3,
      'Mixed Words',
      'Unscramble letters to form correct English words.',
      'MixedWordsGame',
      'assets/game-pics/mixedWordsPic.png',
      1
    ),
    new GameProfile(
      4,
      'Trivia',
      'Answer multiple-choice questions on various topics.',
      'TriviaGame',
      'assets/game-pics/triviaPic.png',
      1
    ),
  ];

  constructor() {}

  list(): GameProfile[] {
    return this.games;
  }

  getGameById(id: number): GameProfile | undefined {
    return this.games.find((game) => game.GameId === id);
  }
}
