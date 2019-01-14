import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './Home/home.component';
import { MyDatePipe } from './Home/date.pipe';


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
  
  ],
  declarations:[
    AppComponent,
    HomeComponent,
    MyDatePipe
  ],
  bootstrap:[
    AppComponent
  ],
  providers:[]
})
export class AppModule{

}