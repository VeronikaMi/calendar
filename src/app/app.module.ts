import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { MonthsComponent } from './main/calendar/months/months.component';
import { MonthComponent } from './main/calendar/months/month/month.component';
import { AppService } from './app.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DayPopupComponent } from './main/calendar/months/month/day-popup/day-popup.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    MonthsComponent,
    MonthComponent,
    DayPopupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
