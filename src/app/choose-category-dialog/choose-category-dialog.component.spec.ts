import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCategoryDialogComponent } from './choose-category-dialog.component';

describe('ChooseCategoryDialogComponent', () => {
  let component: ChooseCategoryDialogComponent;
  let fixture: ComponentFixture<ChooseCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseCategoryDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
