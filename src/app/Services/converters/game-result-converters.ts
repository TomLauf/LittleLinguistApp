import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from '@angular/fire/firestore';
import { GameResult } from '../../shared/model/GameResult';

export const gameResultConverter = {
  toFirestore: (gameResultToSave: GameResult) => {
    return {
      categoryId: gameResultToSave.categoryId,
      gameId: gameResultToSave.gameId,
      date: Timestamp.fromDate(gameResultToSave.date),
      numOfPoints: gameResultToSave.numOfPoints,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    const gameResult = new GameResult(
      snapshot.id,
      data['categoryId'],
      data['gameId'],
      data['numOfPoints']
    );
    gameResult.date = data['date'].toDate();
    return gameResult;
  },
};
