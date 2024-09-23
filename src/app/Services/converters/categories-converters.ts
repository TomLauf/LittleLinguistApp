import {
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';
import { WordCategory } from '../../shared/model/WordCategory';
import { WordsPair } from '../../shared/model/WordsPair';

export const categoriesConverter = {
  toFirestore: (categoriesToSave: WordCategory) => {
    const wordsArr: { words: WordsPair }[] = [];

    for (let i = 0; i < categoriesToSave.words.length; ++i) {
      wordsArr.push({
        words: categoriesToSave.words[i],
      });
    }

    return {
      categoryName: categoriesToSave.categoryName,
      lastUpdate: categoriesToSave.lastUpdate,
      originLanguage: categoriesToSave.originLanguage,
      translatedLanguage: categoriesToSave.translatedLanguage,
      words: wordsArr,
    };
  },

  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    const category = new WordCategory(
      snapshot.id,
      data['categoryName'],
      data['lastUpdate'],
      data['originLanguage'],
      data['translatedLanguage']
    );

    const words = data['words'];

    if (words) {
      for (let i = 0; i < words.length; ++i) {
        WordCategory.words.push(
          new WordsAdded(words[i].number, PhoneType.Mobile)
        );
      }
    }

    return category;
  },
};
