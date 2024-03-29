import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesTableItemComponent } from './components/expenses/expenses-table-item/expenses-table-item.component';
import { ExpensesCardComponent } from './components/expenses/expenses-card/expenses-card.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ExpensesSingleCardComponent } from './components/expenses/expenses-single-card/expenses-single-card.component';
import { ExpensesDualCardComponent } from './components/expenses/expenses-dual-card/expenses-dual-card.component';
import { ExpensesTableComponent } from './components/expenses/expenses-table/expenses-table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses.component';
import { ExpensesHeaderComponent } from './components/expenses/expense-header/expenses-header.component';

@NgModule({
  declarations: [
    ExpensesCardComponent,
    ExpensesComponent,
    ExpensesSingleCardComponent,
    ExpensesCardComponent,
    ExpensesDualCardComponent,
    ExpensesTableItemComponent,
    ExpensesHeaderComponent,
    ExpensesTableComponent,
    ExpensesTableItemComponent,
    ExpenseComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ExpensesRoutingModule,
    NgApexchartsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class ExpensesModule {}
