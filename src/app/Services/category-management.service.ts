import {
  Firestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  getDocs,
  QuerySnapshot,
  DocumentSnapshot,
  setDoc,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { WordCategory } from '../shared/model/WordCategory';
import { categoriesConverter } from './converters/categories-converters';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagementService {
  private collectionName = 'categories';

  constructor(private firestore: Firestore) {}

  async add(newCategory: WordCategory): Promise<void> {
    const categoriesCollection = collection(
      this.firestore,
      this.collectionName
    ).withConverter(categoriesConverter);
    await addDoc(categoriesCollection, newCategory);
  }

  async update(existingCategory: WordCategory): Promise<void> {
    existingCategory.lastUpdate = new Date();

    const personDocRef = doc(
      this.firestore,
      this.collectionName,
      existingCategory.id
    ).withConverter(categoriesConverter);
    return setDoc(personDocRef, existingCategory);
  }

  async delete(categoryId: string): Promise<void> {
    const personDocRef = doc(
      this.firestore,
      this.collectionName,
      categoryId
    ).withConverter(categoriesConverter);
    return deleteDoc(personDocRef);
  }

  async get(categoryId: string): Promise<WordCategory | undefined> {
    const personDocRef = doc(
      this.firestore,
      this.collectionName,
      categoryId
    ).withConverter(categoriesConverter);
    return (await getDoc(personDocRef)).data();
  }

  async list(): Promise<WordCategory[]> {
    const collectionConnection = collection(
      this.firestore,
      this.collectionName
    ).withConverter(categoriesConverter);
    const querySnapshot: QuerySnapshot<WordCategory> = await getDocs(
      collectionConnection
    );

    const result: WordCategory[] = [];
    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<WordCategory>) => {
      const data = docSnap.data();
      if (data) result.push(data);
    });

    return result;
  }
}
