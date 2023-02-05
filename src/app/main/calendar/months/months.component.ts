import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss'],
})
export class MonthsComponent implements OnInit {
  public monthIndexes: number[] = [...Array(12).keys()];
  constructor() {}

  ngOnInit(): void {}
}
