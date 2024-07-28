import { Component } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { ActivatedRoute } from '@angular/router';
import { CategoryManagementService } from '../Services/category-management.service';

@Component({
  selector: 'app-sort-game',
  standalone: true,
  imports: [],
  templateUrl: './sort-game.component.html',
  styleUrl: './sort-game.component.css'
})
export class SortGameComponent {

  category: WordCategory | undefined;

  constructor(private route: ActivatedRoute, private CategoryManagementService: CategoryManagementService){
    let CategoryId = this.route.snapshot.paramMap.get('CategoryId');
    if (CategoryId != null){
      this.category = this.CategoryManagementService.get(parseInt(CategoryId));
    }
  }
}
