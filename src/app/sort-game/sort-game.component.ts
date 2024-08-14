import { Component } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { ActivatedRoute } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { GameHeaderComponent } from "../game-header/game-header.component";
import { WordsPair } from '../shared/model/WordsPair';

@Component({
  selector: 'app-sort-game',
  standalone: true,
  imports: [GameHeaderComponent],
  templateUrl: './sort-game.component.html',
  styleUrls: ['./sort-game.component.css']
})
export class SortGameComponent {

  currentCategory: WordCategory | undefined;
  allCategories: WordCategory[] = [];
  currentWord: String = "";

  constructor(private route: ActivatedRoute, private categoryManagementService: CategoryManagementService) {
    let categoryId = this.route.snapshot.paramMap.get('CategoryId');
    if (categoryId != null) {
      this.currentCategory = this.categoryManagementService.get(parseInt(categoryId));
    }

    let firstRandomWordsCurrentCategory: WordsPair[] = [];
    if (this.currentCategory) {
      let randomWordsCurrentCategory = this.currentCategory.Words.sort(() => Math.random() - 0.5);
      firstRandomWordsCurrentCategory = randomWordsCurrentCategory.slice(0, 3);
    }

    this.allCategories = this.categoryManagementService.list();
    let randomCategory: WordCategory | undefined;
    let firstRandomWordsRandomCategory: WordsPair[] = [];

    if (this.allCategories) {
      let randomAllCategories = this.allCategories.sort(() => Math.random() - 0.5);

      for (let category of randomAllCategories) {
        if (this.currentCategory?.CategoryId !== category.CategoryId) { 
          randomCategory = category;
          break;
        }
      }
      
      if (randomCategory) {
        firstRandomWordsRandomCategory = randomCategory.Words.slice(0, 3);
      }
    }

    let wordsToSort: WordsPair[] = [];
    if (firstRandomWordsRandomCategory && firstRandomWordsCurrentCategory) {
      let randomWords = firstRandomWordsRandomCategory.concat(firstRandomWordsCurrentCategory);
      wordsToSort = randomWords.sort(() => Math.random() - 0.5);
    }

    console.log(wordsToSort);

    if(wordsToSort){
      for(let word of wordsToSort){
        this.currentWord = word.Origin;
      }

    }
  }
}