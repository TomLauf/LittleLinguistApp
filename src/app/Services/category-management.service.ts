import { Injectable } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  QuerySnapshot,
  DocumentSnapshot,
  doc,
} from '@angular/fire/firestore';
import { categoriesConverter } from './converters/categories-converters';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagementService {
  constructor(private firestoreService: Firestore) {}

  async list(): Promise<WordCategory[]> {
    const categoriesCollection = collection(
      this.firestoreService,
      'categories'
    ).withConverter(categoriesConverter);

    const querySnapshot: QuerySnapshot<WordCategory> = await getDocs(
      categoriesCollection
    );

    const result: WordCategory[] = [];

    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<WordCategory>) => {
      const data = docSnap.data();
      if (data) {
        result.push(data);
      }
    });

    return result;
  }

  get(id: string): WordCategory | undefined {
    return undefined;
  }

  async add(newWordCategoryData: WordCategory) {
    const categoriesCollection = collection(
      this.firestoreService,
      'categories'
    ).withConverter(categoriesConverter);
    await addDoc(categoriesCollection, newWordCategoryData);
  }

  update(existingCategory: WordCategory): void {
    async get(id: string) :Promise <WordCategory | undefined> {
     const categoriesDocRef = doc(this.firestoreService, 'categories',
      id).withConverter(
        categoriesConverter
      );
      return (await getDoc(categoriesDocRef)).data();
    }
  }

  delete(existingCategoryId: string): void {

    
  }

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
