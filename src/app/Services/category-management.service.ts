import { Injectable } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { Language } from '../shared/model/Language';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  categories = new Map<number, WordCategory>();
  nextId = 1;

  constructor() {
    this.categories.set(1, new WordCategory(1, "Animals", Language.English, Language.Hebrew));
    this.categories.set(2, new WordCategory(2, "Colors", Language.English, Language.Hebrew));
    this.categories.set(3, new WordCategory(3, "Feelings", Language.English, Language.Hebrew));
  }

  list(): WordCategory[] {
    return Array.from(this.categories.values());
  }

  get(CategoryId: number): WordCategory | undefined {
    return this.categories.get(CategoryId);
  }

  delete(CategoryId: number): void {
    this.categories.delete(CategoryId);
  }

  update(existingCategory: WordCategory): void {
    if (this.categories.has(existingCategory.CategoryId)) {
      existingCategory.LastUpdate = new Date();
    }
  }

  add(newCategory: WordCategory) {
    newCategory.CategoryId = this.nextId;
    newCategory.LastUpdate = new Date();
    this.categories.set(this.nextId, newCategory);
    this.nextId++
  }
}