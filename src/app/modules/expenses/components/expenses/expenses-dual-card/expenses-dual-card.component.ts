import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[expenses-dual-card]',
  templateUrl: './expenses-dual-card.component.html',
})
export class ExpensesDualCardComponent implements OnInit {
  @Input() nft: any = <any>{};

  constructor() {}

  ngOnInit(): void {}
}
