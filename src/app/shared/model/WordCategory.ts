import { Language } from './Language';
import { WordsPair } from './WordsPair';

export class WordCategory {
  public categoryId: string;
  categoryName: string;
  lastUpdate = new Date();
  originLanguage: Language;
  translatedLanguage: Language;
  words: WordsPair[] = [];

  constructor(
    categoryId: string,
    categoryName: string,
    originLanguage: Language,
    translatedLanguage: Language
  ) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.originLanguage = originLanguage;
    this.translatedLanguage = translatedLanguage;
  }
}
