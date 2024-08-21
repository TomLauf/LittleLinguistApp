import { Component } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { ActivatedRoute } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { GameHeaderComponent } from "../game-header/game-header.component";
import { WordsPair } from '../shared/model/WordsPair';
import { GameProfile } from '../shared/model/GameProfile';
import { GamesInfoService } from '../Services/GamesInfo.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { GamePointsComponent } from "../game-points/game-points.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-sort-game',
  standalone: true,
  imports: [GameHeaderComponent, CommonModule, MatButtonModule, GamePointsComponent,MatProgressBarModule],
  templateUrl: './sort-game.component.html',
  styleUrls: ['./sort-game.component.css']
})
export class SortGameComponent {

  currentCategory: WordCategory | undefined;
  allCategories: WordCategory[] = [];
  randomCategory: WordCategory | undefined;
  currentGame: GameProfile | undefined;
  wordsToSort: WordsPair[] = [];
  wordIndex = 0;
  message: string = '';
  userAnswer: boolean = true;
  points: number = 0;
  progressValue: number = 0;


  constructor(private route: ActivatedRoute, private categoryManagementService: CategoryManagementService, private gameInfoService: GamesInfoService) {
    let categoryId = this.route.snapshot.paramMap.get('CategoryId');
    if (categoryId != null) {
      this.currentCategory = this.categoryManagementService.get(parseInt(categoryId));
    }

    this.currentGame = this.gameInfoService.getGameById(2);

    let firstRandomWordsCurrentCategory: WordsPair[] = [];
    if (this.currentCategory) {
      let randomWordsCurrentCategory = this.currentCategory.Words.sort(() => Math.random() - 0.5);
      firstRandomWordsCurrentCategory = randomWordsCurrentCategory.slice(0, 3);
    } //3 random words from current category. current = body.

    this.allCategories = this.categoryManagementService.list(); //fruits, body, colors, feelings
    let firstRandomWordsRandomCategory: WordsPair[] = [];

    if (this.allCategories && this.currentGame) {
      let randomAllCategories = this.allCategories.sort(() => Math.random() - 0.5);//body,colors,fruits, feelings

      for (let category of randomAllCategories) {
        if (this.currentCategory?.CategoryId !== category.CategoryId && category.Words.length >= this.currentGame?.MinWordsNo) { 
          this.randomCategory = category;
          break;
        }
      }
      
      if (this.randomCategory) {
        let randomWordsRandomCategory = this.randomCategory.Words.sort(() => Math.random() - 0.5);
        firstRandomWordsRandomCategory = randomWordsRandomCategory.slice(0, 3);
      }
    }


    if (firstRandomWordsCurrentCategory && firstRandomWordsRandomCategory) { //apple, banna, kiwi && head, leg, hand
      let randomWords = firstRandomWordsRandomCategory.concat(firstRandomWordsCurrentCategory);//apple, banana, kiwi, head, leg, hand
      this.wordsToSort = randomWords.sort(() => Math.random() - 0.5);//kiwi,head,apple,hand,leg,banana
    }

    console.log(this.wordsToSort);
    }

    checkAnswer(answer: boolean) {
      this.userAnswer = answer;

      const currentWord = this.wordsToSort[this.wordIndex];
      const isInCategory = this.currentCategory?.Words.some(word => word.Origin === currentWord.Origin);

  if (isInCategory === this.userAnswer) {
    this.message = 'YAY! Correct Answer!';
    this.points += 100 / this.wordsToSort.length;
  } else {
    this.message = 'Sorry, Wrong answer!';
  }
      console.log(this.wordIndex);

  if (this.wordIndex < this.wordsToSort.length - 1){
    setTimeout(() => {
      setTimeout(() => {
        this.wordIndex++;
        this.message = '';  
        this.progressValue = this.calculateProgressValue();
      });
    }, 2000);
  }else {
    this.points = Math.floor(this.points);
      
  }
}
  
  getRoundedPoints() {
    return Math.floor(this.points);
  }

  calculateProgressValue() {
    return (this.wordIndex / this.wordsToSort.length) * 100;
  }
}