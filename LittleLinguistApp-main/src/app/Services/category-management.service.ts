import { Injectable } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagementService {
  constructor(private firestorreService: Firestore) {}
  list(): WordCategory[] {
    return [];
  }

  get(Id: string): WordCategory | undefined {
    return undefined;
  }

  add(newCategory: WordCategory) {}

  update(existingCategory: WordCategory): void {}

  delete(existingCategory: WordCategory): void {}

  // getNextId() {
  //   let nextId = 0;
  //   const LastUsedId = localStorage.getItem('LastUsedId');
  //   if (LastUsedId != null) {
  //     nextId = parseInt(LastUsedId);
  //   }
  //   return nextId;
  // }

  // add(newCategory: WordCategory) {
  //   newCategory.CategoryId = this.getNextId();
  //   newCategory.CategoryId++;
  //   localStorage.setItem(
  //     newCategory.CategoryId.toString(),
  //     JSON.stringify(newCategory)
  //   );
  //   localStorage.setItem('LastUsedId', newCategory.CategoryId.toString());
  // }

  // update(existingCategory: WordCategory) {
  //   if (localStorage.getItem(existingCategory.CategoryId.toString()) != null) {
  //     localStorage.setItem(
  //       existingCategory.CategoryId.toString(),
  //       JSON.stringify(existingCategory)
  //     );
  //     existingCategory.LastUpdate = new Date();
  //   } else {
  //     throw new Error(
  //       'update(): Word Category Id ' +
  //         existingCategory.CategoryId.toString() +
  //         ' Not Found'
  //     );
  //   }
  // }

  // delete(CategoryId: number) {
  //   if (localStorage.getItem(CategoryId.toString()) != null) {
  //     localStorage.removeItem(CategoryId.toString());
  //   } else {
  //     throw new Error(
  //       'delete(): Word Category Id ' + CategoryId.toString() + ' Not Found'
  //     );
  //   }
  // }

  // get(CategoryId: string): WordCategory {
  //   const category = localStorage.getItem(CategoryId.toString());
  //   if (category != null) {
  //     return JSON.parse(category);
  //   }
  //   throw new Error(
  //     'get(): Word Category Id' + CategoryId.toString() + ' Not Found'
  //   );
  // }

  // list(): WordCategory[] {
  //   const categories = [];
  //   const LastUsedId = this.getNextId();
  //   for (let index = 0; index <= LastUsedId; index++) {
  //     try {
  //       const category = this.get(index);
  //       categories.push(category);
  //     } catch {
  //       /* ignore ifcategory is not found */
  //     }
  //   }
  //   return categories;
  // }
}