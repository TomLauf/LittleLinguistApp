import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-summery',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CommonModule],
  templateUrl: './game-summery.component.html',
  styleUrl: './game-summery.component.css'
})
export class GameSummeryComponent implements OnInit{
  constructor(private route: ActivatedRoute){}

  gameName!: string;
  @Input() points!: number;
  @Input() numCorrectAns!: number;
  @Input() allAns!: number;
  @Input() mixedWordsGameResults!: { origin: string; target: string; isCorrect: boolean }[];
  @Input() sortWordsGameResults!: { origin: string; currentGameCategory: string | undefined; trueWordCategory:string | undefined; guess: string; isCorrect: boolean }[];

  mixedWordsGameResultsColumns: string[] = ['Origin', 'Target', 'Results'];
  sortWordsGameResultsColumns: string[] = ['Origin', 'currentGameCategory','trueWordCategory', 'Guess','Results'];

ngOnInit(): void {
    this.gameName = this.route.snapshot.url[0]?.path;
    }
}
