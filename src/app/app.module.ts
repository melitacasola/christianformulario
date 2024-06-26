import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchViewModule } from './modules/search-view/search-view.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
