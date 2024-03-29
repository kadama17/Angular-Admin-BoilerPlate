import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesTableItemComponent } from './expenses-table-item.component';

describe('ExpensesTableItemComponent', () => {
  let component: ExpensesTableItemComponent;
  let fixture: ComponentFixture<ExpensesTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesTableItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
