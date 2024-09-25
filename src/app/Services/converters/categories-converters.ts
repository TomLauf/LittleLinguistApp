import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from '@angular/fire/firestore';
import { WordCategory } from '../../shared/model/WordCategory';
import { WordsPair } from '../../shared/model/WordsPair';

export const categoriesConverter = {
  toFirestore: (categoryToSave: WordCategory) => {
    const wordsArr = [];

    for (let i = 0; i < categoryToSave.words.length; ++i) {
      wordsArr.push({
        ...categoryToSave.words[i],
      });
    }

    return {
      categoryName: categoryToSave.categoryName,
      lastUpdate: Timestamp.fromDate(categoryToSave.lastUpdate),
      originLanguage: categoryToSave.originLanguage,
      translatedLanguage: categoryToSave.translatedLanguage,
      words: wordsArr,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    const words = data['words'];
    const wordCategory = new WordCategory(
      snapshot.id,
      data['categoryName'],
      data['originLanguage'],
      data['translatedLanguage']
    );
    wordCategory.lastUpdate = data['lastUpdate'].toDate();

    if (words) {
      for (let i = 0; i < words.length; ++i) {
        wordCategory.words.push(
          new WordsPair(words[i].Origin, words[i].Translated)
        );
      }
    }

    return wordCategory;
  },
};
