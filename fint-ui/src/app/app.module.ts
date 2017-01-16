import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardsFilterComponent } from './cards-filter/cards-filter.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardReportComponent } from './card-report/card-report.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardsFilterComponent,
    NavBarComponent,
    CardReportComponent,
    ManageCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
