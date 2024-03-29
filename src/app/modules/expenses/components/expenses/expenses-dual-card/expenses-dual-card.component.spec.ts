import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesDualCardComponent } from './expenses-dual-card.component';

describe('ExpensesDualCardComponent', () => {
  let component: ExpensesDualCardComponent;
  let fixture: ComponentFixture<ExpensesDualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesDualCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesDualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
