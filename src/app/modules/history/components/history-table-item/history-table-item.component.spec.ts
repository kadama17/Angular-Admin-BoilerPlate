import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryTableItemComponent } from './history-table-item.component';

describe('ExpensesTableItemComponent', () => {
  let component: HistoryTableItemComponent;
  let fixture: ComponentFixture<HistoryTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryTableItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
