import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public currentDate: string =
    new Date().getDate() + '/' + new Date().getMonth();
}
