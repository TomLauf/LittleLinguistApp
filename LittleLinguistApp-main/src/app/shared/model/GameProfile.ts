export class GameProfile {
  GameId: number;
  GameName: string;
  GameDescription: string;
  GameURL: string;
  GamePic: string;
  MinWordsNo: number;

  constructor(
    GameId: number,
    GameName: string,
    GameDescription: string,
    GameURL: string,
    GamePic: string,
    MinWordsNo: number
  ) {
    this.GameId = GameId;
    this.GameName = GameName;
    this.GameDescription = GameDescription;
    this.GameURL = GameURL;
    this.GamePic = GamePic;
    this.MinWordsNo = MinWordsNo;
  }
}
