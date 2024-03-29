import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesSingleCardComponent } from './expenses-single-card.component';

describe('ExpensesSingleCardComponent', () => {
  let component: ExpensesSingleCardComponent;
  let fixture: ComponentFixture<ExpensesSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesSingleCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
