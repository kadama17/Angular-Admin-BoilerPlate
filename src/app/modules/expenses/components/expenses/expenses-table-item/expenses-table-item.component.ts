import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[expenses-table-item]',
  templateUrl: './expenses-table-item.component.html',
})
export class ExpensesTableItemComponent implements OnInit {
  @Input() auction = <any>{};

  constructor() {}

  ngOnInit(): void {}
}
