import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[expenses-single-card]',
  templateUrl: './expenses-single-card.component.html',
})
export class ExpensesSingleCardComponent implements OnInit {
  @Input() nft: any = <any>{};

  constructor() {}

  ngOnInit(): void {}
}
