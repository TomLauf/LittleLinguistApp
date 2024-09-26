import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { GameStats } from '../shared/model/GameStats';
import { GameResultService } from '../Services/game-result.service';
import { GameResult } from '../shared/model/GameResult';
import { CategoryManagementService } from '../Services/category-management.service';
import { WordCategory } from '../shared/model/WordCategory';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  public stats: GameStats[] = [];

  constructor(
    private gameResultService: GameResultService,
    private categoryManagementService: CategoryManagementService
  ) {}

  ngOnInit(): void {
    this.gameResultService.list().then((data) => {
      this.categoryManagementService.list().then((categories) => {
        const stats: GameStats[] = [];
        const averages = this.findHighestAndLowestAverages(data);

        stats.push(
          new GameStats(
            'points earned',
            this.sumNumberOfPoints(data).toString(),
            'assets/dashboard-icons/points.png'
          )
        );
        stats.push(
          new GameStats(
            'games played',
            this.amountOfGamesPlayed(data).toString(),
            'assets/dashboard-icons/games-played.png'
          )
        );
        stats.push(
          new GameStats(
            'of games have a perfect score',
            this.perfectScoreGamesPercentage(data).toString() + '%',
            'assets/dashboard-icons/perfect-score.png'
          )
        );
        stats.push(
          new GameStats(
            'has the highest average score',
            averages.highest + ' game',
            'assets/dashboard-icons/highest-score.png'
          )
        );
        stats.push(
          new GameStats(
            'has the lowest average score',
            averages.lowest + ' game',
            'assets/dashboard-icons/lowest-score.png'
          )
        );
        stats.push(
          new GameStats(
            'is the most played category',
            this.mostPlayedCategory(data, categories).toString(),
            'assets/dashboard-icons/category.png'
          )
        );
        stats.push(
          new GameStats(
            'categories learned',
            this.countCategoriesPlayed(data).toString(),
            'assets/dashboard-icons/category-learnt.png'
          )
        );
        stats.push(
          new GameStats(
            'categories not learned',
            this.countCategoriesNotPlayed(data, categories).toString(),
            'assets/dashboard-icons/category-not-learnt.png'
          )
        );

        stats.push(
          new GameStats(
            'of categories learned',
            this.categoriesLearntPercentage(data, categories).toString() + '%',
            'assets/dashboard-icons/precent-category-learnt.png'
          )
        );

        this.stats = stats;
      });
    });
  }

  sumNumberOfPoints(data: GameResult[]) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].numOfPoints;
    }
    return sum;
  }

  amountOfGamesPlayed(data: GameResult[]) {
    return data.length;
  }

  findHighestAndLowestAverages(data: GameResult[]) {
    if (data.length === 0)
      return {
        highest: '',
        lowest: '',
      };

    const averages: { [key: string]: { totalPoints: number; count: number } } =
      {};

    // Accumulate total points and counts for each game
    data.forEach((game) => {
      if (!averages[game.gameId]) {
        averages[game.gameId] = { totalPoints: 0, count: 0 };
      }
      averages[game.gameId].totalPoints += game.numOfPoints;
      averages[game.gameId].count += 1;
    });

    let highestAverage = -Infinity;
    let lowestAverage = Infinity;
    let highestGameId = '';
    let lowestGameId = '';

    // Calculate averages and find the highest and lowest
    for (const gameId in averages) {
      const average = averages[gameId].totalPoints / averages[gameId].count;

      if (average > highestAverage) {
        highestAverage = average;
        highestGameId = gameId;
      }
      if (average < lowestAverage) {
        lowestAverage = average;
        lowestGameId = gameId;
      }
    }

    return {
      highest: highestGameId,
      lowest: lowestGameId,
    };
  }

  countCategoriesPlayed(data: GameResult[]) {
    const categories = new Set<string>();

    data.forEach((game) => {
      categories.add(game.categoryId);
    });

    return categories.size;
  }

  countCategoriesNotPlayed(data: GameResult[], categories: WordCategory[]) {
    const amountOfCategories = categories.length;
    const categoriesLearnt = this.countCategoriesPlayed(data);
    return amountOfCategories - categoriesLearnt;
  }

  mostPlayedCategory(data: GameResult[], categories: WordCategory[]) {
    if (data.length === 0) return '';

    const occurrences: { [key: string]: { count: number } } = {};

    data.forEach((game) => {
      if (!occurrences[game.categoryId]) {
        occurrences[game.categoryId] = { count: 0 };
      }
      occurrences[game.categoryId].count += 1;
    });

    let highest = 0;
    let mostPlayed = '';
    for (const categoryId in occurrences) {
      const count = occurrences[categoryId].count;

      if (count > highest) {
        highest = count;
        mostPlayed = categoryId;
      }
    }

    let categoryName = '';
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === mostPlayed) {
        categoryName = categories[i].categoryName;
      }
    }

    return categoryName;
  }

  categoriesLearntPercentage(data: GameResult[], categories: WordCategory[]) {
    const categoriesLearnt = this.countCategoriesPlayed(data);
    return Math.floor((categoriesLearnt / categories.length) * 100);
  }

  perfectScoreGamesPercentage(data: GameResult[]) {
    let numOfPerfectScores = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].numOfPoints === 100) {
        numOfPerfectScores++;
      }
    }

    return Math.floor((numOfPerfectScores / data.length) * 100);
  }
}
