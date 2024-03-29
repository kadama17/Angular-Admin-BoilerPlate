import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { HistoryTableItemComponent } from './components/history-table-item/history-table-item.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

@NgModule({
  declarations: [
    HistoryComponent,
    HistoryTableComponent,
    HistoryTableItemComponent,
    HistoryPageComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class HistoryModule {}
