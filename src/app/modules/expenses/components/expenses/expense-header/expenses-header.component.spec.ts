import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesHeaderComponent } from './expenses-header.component';

describe('ExpensesHeaderComponent', () => {
  let component: ExpensesHeaderComponent;
  let fixture: ComponentFixture<ExpensesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
