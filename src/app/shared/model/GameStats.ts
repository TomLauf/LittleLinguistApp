export class GameStats {
  name: string;
  value: string;
  statIcon: string;

  constructor(name: string, value: string, statIcon: string) {
    this.name = name;
    this.value = value;
    this.statIcon = statIcon;
  }
}
