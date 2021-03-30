import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewtweetComponent } from './newtweet/newtweet.component';
import { DisplaytweetsComponent } from './displaytweets/displaytweets.component';

@NgModule({
  declarations: [
    AppComponent,
    NewtweetComponent,
    DisplaytweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
