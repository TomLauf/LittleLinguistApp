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
      categoryId: categoriesToSave.categoryId,
      categoryName: categoriesToSave.categoryName,
      lastUpdate: categoriesToSave.lastUpdate,
      originLanguage: categoriesToSave.originLanguage,
      translatedLanguage: categoriesToSave.translatedLanguage,
      words: wordsArr,
    };
  },
};
