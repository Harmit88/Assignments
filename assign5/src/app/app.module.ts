import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberToweatherPipe } from './number-toweather.pipe';
import { VoteComponentComponent } from './vote-component/vote-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberToweatherPipe,
    VoteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
