import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CategoryManagementService } from '../Services/category-management.service';
import { ActivatedRoute } from '@angular/router';
import { WordCategory } from '../shared/model/WordCategory';
import { Language } from '../shared/model/Language';

@Component({
  selector: 'app-translate-game',
  standalone: true,
  imports: [MatFormFieldModule,CommonModule,MatInputModule],
  templateUrl: './translate-game.component.html',
  styleUrl: './translate-game.component.css'
})
export class TranslateGameComponent implements OnInit{
  currentCategory: WordCategory = new WordCategory(0, "", Language.English, Language.Hebrew);

  constructor(private categoryManagementService: CategoryManagementService, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('CategoryId');
    if (id != null) {
      let category = this.categoryManagementService.get(parseInt(id));
      if (category != null) {
        this.currentCategory = category;
      }
    }
  }
}
