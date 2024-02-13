import { Routes } from '@angular/router';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { TranslateGameComponent } from './translate-game/translate-game.component';

export const routes: Routes = [
    { path: "", component: CategoryTableComponent},
    { path: "newCategory", component: CategoryFormComponent },
    { path: "Category/:CategoryId", component: CategoryFormComponent },
    { path: "chooseCategory", component: ChooseCategoryComponent },
    { path: "translateGame/:CategoryId", component: TranslateGameComponent }
];