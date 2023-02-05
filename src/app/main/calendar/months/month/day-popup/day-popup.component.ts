import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-day-popup',
  templateUrl: './day-popup.component.html',
  styleUrls: ['./day-popup.component.scss'],
})
export class DayPopupComponent implements OnInit {
  @Output() onPopupClose: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
