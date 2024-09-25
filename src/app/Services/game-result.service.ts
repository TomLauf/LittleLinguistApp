import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { GameResult } from '../shared/model/GameResult';
import { gameResultConverter } from './converters/game-result-converters';

@Injectable({
  providedIn: 'root',
})
export class GameResultService {
  private collectionName = 'GameResult';

  constructor(private firestore: Firestore) {}

  async addGameResult(newGameResult: GameResult): Promise<void> {
    const gameResultCollection = collection(
      this.firestore,
      this.collectionName
    ).withConverter(gameResultConverter);
    await addDoc(gameResultCollection, newGameResult);
  }

  async list(): Promise<GameResult[]> {
    const gameResultCollection = collection(
      this.firestore,
      this.collectionName
    ).withConverter(gameResultConverter);
    const querySnapshot: QuerySnapshot<GameResult> = await getDocs(
      gameResultCollection
    );

    const result: GameResult[] = [];
    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<GameResult>) => {
      const data = docSnap.data();
      if (data) result.push(data);
    });

    return result;
  }
}
