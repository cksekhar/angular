import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardsFilterComponent } from './cards-filter/cards-filter.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardReportComponent } from './card-report/card-report.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';

const appRoutes: Routes = [
  { path: 'cards/homepage',   component: HomePageComponent },
  { path: 'cards/report',   component: CardReportComponent },
  { path: 'cards/manager',  component: ManageCardsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // other imports here
  ],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }



