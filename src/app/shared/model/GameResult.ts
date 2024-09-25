export class GameResult {
  public id: string;
  categoryId: string;
  gameId: string;
  date = new Date();
  numOfPoints: number;

  constructor(
    id: string,
    categoryId: string,
    gameId: string,
    numOfPoints: number
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.gameId = gameId;
    this.numOfPoints = numOfPoints;
  }
}
