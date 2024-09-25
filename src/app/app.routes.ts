import { Routes } from '@angular/router';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { TranslateGameComponent } from './translate-game/translate-game.component';
import { HelpComponent } from './help/help.component';
import { MixedWordsGameComponent } from './mixed-words-game/mixed-words-game.component';
import { SortGameComponent } from './sort-game/sort-game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Admin', component: CategoryTableComponent },
  { path: 'chooseGame', component: ChooseGameComponent },
  { path: 'help', component: HelpComponent },
  { path: 'newCategory', component: CategoryFormComponent },
  { path: 'Category/:categoryId', component: CategoryFormComponent },
  { path: 'MixedWordsGame/:categoryId', component: MixedWordsGameComponent },
  { path: 'SortGame/:categoryId', component: SortGameComponent },
  { path: 'TranslateGame/:categoryId', component: TranslateGameComponent }, //old
  { path: 'TriviaGame/:categoryId', component: TriviaGameComponent },
  { path: 'chooseCategory/:categoryId', component: ChooseCategoryComponent }, //old
];
