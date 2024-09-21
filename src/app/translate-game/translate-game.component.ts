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
import { GameHeaderComponent } from '../game-header/game-header.component';

interface TranslationData {
  origin: string;
  translated: string;
  userAnswerTry: string;
  answerIsRight: boolean | null;
}

@Component({
  selector: 'app-translate-game',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    GameHeaderComponent,
  ],
  templateUrl: './translate-game.component.html',
  styleUrl: './translate-game.component.css',
})
export class TranslateGameComponent implements OnInit {
  currentCategory: WordCategory = new WordCategory(
    '',
    '',
    Language.English,
    Language.Hebrew
  );

  dataSource: TranslationData[] = [];
  displayedColumns: string[] = [
    'EnglishWord',
    'HebrewTranslation',
    'CheckAnswer',
    'Translated',
  ];
  userAnswerMessage: string = '';
  showTranslation: boolean = false;

  constructor(
    private categoryManagementService: CategoryManagementService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('CategoryId');
    if (id != null) {
      const category = this.categoryManagementService.get(id);
      if (category != null) {
        this.currentCategory = category;
        for (let index = 0; index < category.words.length; index++) {
          const wordsPair = category.words[index];
          this.dataSource.push({
            origin: wordsPair.Origin,
            translated: wordsPair.Translated,
            userAnswerTry: '',
            answerIsRight: null,
          });
        }
      }
    }
  }

  checkUserAnswers() {
    let numOfRightAns = 0;

    for (let index = 0; index < this.dataSource.length; index++) {
      const element = this.dataSource[index];
      if (element.translated == element.userAnswerTry) {
        element.answerIsRight = true;
        numOfRightAns++;
      } else {
        element.answerIsRight = false;
      }
    }

    if (numOfRightAns == this.dataSource.length) {
      this.userAnswerMessage = 'Well done, You finished!!';
    } else {
      this.userAnswerMessage =
        'You translated ' +
        numOfRightAns +
        ' out of ' +
        this.dataSource.length +
        ' words correctly, try again';
    }
  }

  onShowTranslation() {
    this.showTranslation = true;
  }

  onHideTranslation() {
    this.showTranslation = false;
  }
}
