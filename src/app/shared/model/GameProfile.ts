export class GameProfile{
    GameId: number;
    GameName: string;
    GameDescription: string;
    GameURL: string;
  
    constructor(GameId: number, GameName: string, GameDescription: string, GameURL: string) {
      this.GameId = GameId;
      this.GameName = GameName;
      this.GameDescription = GameDescription;
      this.GameURL = GameURL;
    }
  } 

  const TranslateGame = new GameProfile(1, "Translate Game", "Translate words and phrases from a foreign language to English.", "translateGame");
  const SortWords = new GameProfile(2, "Sort Words", "Arrange jumbled words to form correct sentences.", "SortGame");
  const MixedWords = new GameProfile(3, "Mixed Words", "Unscramble letters to form correct English words.", "MixedWordsGame");
  const Trivia = new GameProfile(4, "Trivia", "Answer multiple-choice questions on various topics.", "TriviaGame");
  