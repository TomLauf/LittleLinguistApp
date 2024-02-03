import { Routes } from '@angular/router';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryFormComponent } from './category-form/category-form.component';

export const routes: Routes = [
    { path: "", component: CategoryTableComponent},
    { path: "newCategory", component: CategoryFormComponent },
    { path: "Category/:CategoryId", component: CategoryFormComponent }
];
