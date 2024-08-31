import { Component } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { ActivatedRoute } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { GameHeaderComponent } from '../game-header/game-header.component';
import { GameProfile } from '../shared/model/GameProfile';
import { GamesInfoService } from '../Services/GamesInfo.service';
import { MixedWord } from '../shared/model/MixedWord';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GamePointsComponent } from "../game-points/game-points.component";
import { GameSummeryComponent } from "../game-summery/game-summery.component";

@Component({
  selector: 'app-mixed-words-game',
  standalone: true,
  imports: [
    GameHeaderComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    GamePointsComponent,
    GameSummeryComponent
],
  templateUrl: './mixed-words-game.component.html',
  styleUrl: './mixed-words-game.component.css',
})
export class MixedWordsGameComponent {
  category: WordCategory | undefined;
  currentGame: GameProfile | undefined;
  mixedWords: MixedWord[] = [];
  wordIndex = 0;
  message: string = '';
  inputValue: string = '';
  isGameOn: boolean = true;
  points: number = 0;
  numCorrectAns: number = 0;
  gameResults: {
    origin: string;
    target: string;
    isCorrect: boolean;
  }[] = [];
  showGameButtons: boolean = true;
  progressValue: number = 0;

  constructor(
    private route: ActivatedRoute,
    private CategoryManagementService: CategoryManagementService,
    private gameInfoService: GamesInfoService
  ) {
    // Init game category
    let CategoryId = this.route.snapshot.paramMap.get('CategoryId');
    if (CategoryId != null) {
      this.category = this.CategoryManagementService.get(parseInt(CategoryId));
    }

    // Init game words
    this.currentGame = this.gameInfoService.getGameById(3);
    if (this.category) {
      const categoryWords = this.category.Words;
      for (let word of categoryWords) {
        this.mixedWords.push(
          new MixedWord(
            word.Origin,
            this.shuffleString(word.Origin).toUpperCase(),
            word.Translated
          )
        );
      }
    }
  }

  shuffleString(str: string): string {
    let shuffled = str;
    while (shuffled === str) {
      let arr = str.split('');
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      shuffled = arr.join('');
    }
    return shuffled;
  }

  resetInput() {
    this.inputValue = '';
  }

  isInputValid(): boolean {
    return /^[a-zA-Z]+$/.test(this.inputValue);
  }

  checkAnswer() {
    this.showGameButtons = false;
    const currentWord = this.mixedWords[this.wordIndex];
    const isCorrect = currentWord.origin.toLocaleLowerCase() === this.inputValue.toLocaleLowerCase();

    if (isCorrect) {
      this.message = 'YAY! Correct Answer!';
      this.points += 100 / this.mixedWords.length;
      this.numCorrectAns++;
    } else {
      this.message = 'Sorry, Wrong answer!';
    }

    // Update game results
    this.gameResults.push({
      origin: currentWord.translated,
      target: this.inputValue,
      isCorrect: isCorrect,
    });

    if (this.wordIndex < this.mixedWords.length - 1) {
      setTimeout(() => {
      this.wordIndex++;
      this.progressValue = this.calculateProgressValue();
        this.message = '';
        this.inputValue = '';
        this.showGameButtons = true;
      }, 2000);
    } else {
      this.points = Math.floor(this.points);
      this.isGameOn = false;
    }
  }

  calculateProgressValue() {
    return (this.wordIndex / this.mixedWords.length) * 100;
  }

  getRoundedPoints() {
    return Math.floor(this.points);
  }

  newGame() {
    this.wordIndex = 0;
    this.message = '';
    this.inputValue = '';
    this.isGameOn = true;
    this.points = 0;
    this.numCorrectAns = 0;
    this.gameResults = [];
    this.showGameButtons = true;
    this.progressValue = 0;
  }
}
