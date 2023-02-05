import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
})
export class MonthComponent implements OnInit {
  @Input() month: number = -1;
  public monthName: string = '';
  public weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public days: number[][] = new Array(6);
  public monthLength: number = 0;
  public today: string = this.appService.currentDate;

  public dayPopupOpen: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.monthName = new Date(2023, this.month, 1).toLocaleString('default', {
      month: 'long',
    });

    this.monthLength = new Date(2023, this.month + 1, 0).getDate();
    const firstWeekDayIndex: number = new Date(2023, this.month, 1).getDay();

    // let days = 0 - firstWeekDayIndex + 1; for Sunday first week

    let days =
      new Date(2023, this.month, 1).getDate() - ((firstWeekDayIndex + 6) % 7);

    for (let i = 0; i < this.days.length; i++) {
      this.days[i] = new Array(7);
      for (let j = 0; j < this.days[i].length; j++) {
        this.days[i][j] = days;
        days += 1;
      }
    }
  }
}
