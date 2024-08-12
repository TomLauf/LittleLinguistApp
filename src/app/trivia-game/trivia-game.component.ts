import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { WordCategory } from '../shared/model/WordCategory';
import { GameHeaderComponent } from "../game-header/game-header.component";

@Component({
  selector: 'app-trivia-game',
  standalone: true,
  imports: [GameHeaderComponent],
  templateUrl: './trivia-game.component.html',
  styleUrl: './trivia-game.component.css'
})
export class TriviaGameComponent {

  category: WordCategory | undefined;

  constructor(private route: ActivatedRoute, private CategoryManagementService: CategoryManagementService){
    let CategoryId = this.route.snapshot.paramMap.get('CategoryId');
    if (CategoryId != null){
      this.category = this.CategoryManagementService.get(parseInt(CategoryId));
    }
  }
}
