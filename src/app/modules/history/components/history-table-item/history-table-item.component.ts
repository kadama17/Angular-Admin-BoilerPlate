import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[history-table-item]',
  templateUrl: './history-table-item.component.html',
})
export class HistoryTableItemComponent implements OnInit {
  @Input() auction = <any>{};

  constructor() {}

  ngOnInit(): void {}
}
