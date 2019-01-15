import {NgModule } from '@angular/core';
import { MyComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './login/admin.component';
import { FormsModule} from '@angular/forms';
import { userComponent } from './login/user.component';

@NgModule({

imports:[
    BrowserModule,
    FormsModule
],
declarations:[
    MyComponent,
    AdminComponent,
    userComponent
],
providers:[],
bootstrap:[
    MyComponent
]
})

export class AppModule{

}