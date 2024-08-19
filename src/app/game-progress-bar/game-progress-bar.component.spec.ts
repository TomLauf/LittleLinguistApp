import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProgressBarComponent } from './game-progress-bar.component';

describe('GameProgressBarComponent', () => {
  let component: GameProgressBarComponent;
  let fixture: ComponentFixture<GameProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
