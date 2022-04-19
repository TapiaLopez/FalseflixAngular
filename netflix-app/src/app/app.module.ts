import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { TopComponent } from './components/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    NavBarComponent,
    TopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
