import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing/landing-page/landing-page.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('../expenses/expenses.module').then((m) => m.ExpensesModule),
  },
  {
    path: 'historique',
    component: LayoutComponent,
    loadChildren: () =>
      import('../history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'landing',
    component: LandingPageComponent,
    loadChildren: () =>
      import('../landing/landing-routing.module').then(
        (m) => m.LandingRoutingModule
      ),
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
