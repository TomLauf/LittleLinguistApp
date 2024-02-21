import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryManagementService } from '../Services/category-management.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WordCategory } from '../shared/model/WordCategory';
import { Language } from '../shared/model/Language';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-translate-game',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatInputModule, MatTableModule, MatIconModule, MatButtonModule,
    RouterModule, FormsModule],
  templateUrl: './translate-game.component.html',
  styleUrl: './translate-game.component.css'
})
export class TranslateGameComponent implements OnInit {

  currentCategory: WordCategory = new WordCategory(0, "", Language.English, Language.Hebrew);
  dataSource: any[] = [];
  displayedColumns: string[] = ['EnglishWord', 'HebrewTranslation', 'CheckAnswer', 'Translated']
  userAnswerMessage: string = "";
  showTranslation: boolean = false;

  constructor(private categoryManagementService: CategoryManagementService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('CategoryId');
    if (id != null) {
      let category = this.categoryManagementService.get(parseInt(id));
      if (category != null) {
        this.currentCategory = category;
        for (let index = 0; index < category.Words.length; index++) {
          const wordsPair = category.Words[index];

          this.dataSource.push({
            Origin: wordsPair.Origin,
            Translated: wordsPair.Translated,
            UserAnswerTry: '',
            AnswerIsRight: null
          });
        }
      }
    }
  }

  checkUserAnswers() {
    let numOfRightAns = 0;

    for (let index = 0; index < this.dataSource.length; index++) {
      const element = this.dataSource[index];
      if (element.Translated == element.UserAnswerTry) {
        element.AnswerIsRight = true;
        numOfRightAns++;
      } else {
        element.AnswerIsRight = false;
      }
    }

    if (numOfRightAns == this.dataSource.length) {
      this.userAnswerMessage = "Well done, You finished!!"
    }
    else {
      this.userAnswerMessage = "You translated " + numOfRightAns + " out of " + this.dataSource.length + " words correctly, try again";
    }
  }

  onShowTranslation() {
    this.showTranslation = true;
  }

  onHideTranslation() {
    this.showTranslation = false;
  }
}
