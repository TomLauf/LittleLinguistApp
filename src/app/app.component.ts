import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,CategoryTableComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LittleLinguistApp';
}


