export class GameProfile{
    GameId: number;
    GameName: string;
    GameDescription: string;
    GameURL: string;
    MinWordsNo: number;
  
    constructor(GameId: number, GameName: string, GameDescription: string, GameURL: string, MinWordsNo: number) {
      this.GameId = GameId;
      this.GameName = GameName;
      this.GameDescription = GameDescription;
      this.GameURL = GameURL;
      this.MinWordsNo = MinWordsNo;
    }
  } 