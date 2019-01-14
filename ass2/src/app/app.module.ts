import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './Home/home.component';
import { MyDatePipe } from './Home/date.pipe';
import { RouterModule }  from '@angular/router'
import { formComponent } from './Form/form.component';


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'Submit',component: HomeComponent},
      {path : 'Home', component : formComponent},
      {path :'', component: formComponent}
    ])
  ],
  declarations:[
    AppComponent,
    HomeComponent,
    MyDatePipe,
    formComponent
  ],
  bootstrap:[
    AppComponent
  ],
  providers:[]
})
export class AppModule{

}