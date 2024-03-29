import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ExpensesFormComponent } from './pages/expense/expenses-form/expenses-form.component';
import { ExpensesListComponent } from './pages/expense/expenses-list/expenses-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent,
    children: [
      { path: '', redirectTo: 'nfts', pathMatch: 'full' },
      { path: 'expense', component: ExpenseComponent },
      { path: 'expense-form', component: ExpensesFormComponent },
      { path: 'expense-list', component: ExpensesListComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesRoutingModule {}
