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

@Component({
  selector: 'app-sort-game',
  standalone: true,
  imports: [GameHeaderComponent, CommonModule, MatButtonModule],
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

    checkandGotonextWord(answer: boolean) {
      this.userAnswer = answer;

      const currentWord = this.wordsToSort[this.wordIndex];
      const isInCategory = this.currentCategory?.Words.some(word => word.Origin === currentWord.Origin);
      const messageElement = document.querySelector('.message') as HTMLElement;

  if (isInCategory === this.userAnswer) {
    this.message = 'YAY! Correct Answer!';
    messageElement.classList.add('correct');
    messageElement.classList.remove('wrong');
  } else {
    this.message = 'Sorry, Wrong answer!';
    messageElement.classList.add('wrong');
    messageElement.classList.remove('correct');
  }
      console.log(this.wordIndex);

      setTimeout(() => {
        messageElement.classList.add('fade'); // Add fade-out effect
        setTimeout(() => {
          this.wordIndex++;
          this.message = '';  
          messageElement.classList.remove('fade'); // Reset for next message
        }, 500); // Wait until the fade-out effect is done
      }, 5000);
  }}