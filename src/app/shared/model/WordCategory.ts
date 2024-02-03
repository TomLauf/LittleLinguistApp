import { Language } from "./Language";
import { WordsPair } from "./WordsPair"

export class WordCategory{
    CategoryId: number;
    CategoryName:string;
    LastUpdate = new Date();
    OriginLanguage: Language;
    TranslatedLanguage: Language;
    Words: WordsPair[] = [];
  
    constructor(CategoryId: number, CategoryName: string, OriginLanguage: Language, TranslatedLanguage: Language) {
      this.CategoryId = CategoryId;
      this.CategoryName = CategoryName;
      this.OriginLanguage = OriginLanguage;
      this.TranslatedLanguage = TranslatedLanguage;
    }
  }