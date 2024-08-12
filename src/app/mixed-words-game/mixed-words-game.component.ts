import { Component } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { ActivatedRoute } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';
import { GameHeaderComponent } from "../game-header/game-header.component";

@Component({
  selector: 'app-mixed-words-game',
  standalone: true,
  imports: [GameHeaderComponent],
  templateUrl: './mixed-words-game.component.html',
  styleUrl: './mixed-words-game.component.css'
})
export class MixedWordsGameComponent {

  category: WordCategory | undefined;

  constructor(private route: ActivatedRoute, private CategoryManagementService: CategoryManagementService){
    let CategoryId = this.route.snapshot.paramMap.get('CategoryId');
    if (CategoryId != null){
      this.category = this.CategoryManagementService.get(parseInt(CategoryId));
    }
  }
}
