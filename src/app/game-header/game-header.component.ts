import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css'
})
export class GameHeaderComponent {
  GameName = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const URLGameName = this.route.snapshot.url[0]?.path; //SortGame
      // Format the game name with spaces before uppercase letters
      this.GameName = this.formatGameName(URLGameName);
    }
  
    // Method to insert spaces before uppercase letters
    formatGameName(name: string): string {
      return name.replace(/([A-Z])/g, ' $1').trim();
    }
  }  

