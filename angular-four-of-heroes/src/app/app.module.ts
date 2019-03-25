import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // provideIn option present
],
  bootstrap: [AppComponent]
})
export class AppModule { }

