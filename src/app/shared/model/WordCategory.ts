import { Language } from './Language';
import { WordsPair } from './WordsPair';

export class WordCategory {
  public id: string;
  categoryName: string;
  lastUpdate = new Date();
  originLanguage: Language;
  translatedLanguage: Language;
  words: WordsPair[] = [];

  constructor(
    id: string,
    categoryName: string,
    originLanguage: Language,
    translatedLanguage: Language
  ) {
    this.id = id;
    this.categoryName = categoryName;
    this.originLanguage = originLanguage;
    this.translatedLanguage = translatedLanguage;
  }
}
