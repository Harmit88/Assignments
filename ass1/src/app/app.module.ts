import {NgModule } from '@angular/core';
import { MyComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './login/admin.component';

@NgModule({

imports:[
    BrowserModule
],
declarations:[
    MyComponent,
    AdminComponent
],
providers:[],
bootstrap:[
    MyComponent
]
})

export class AppModule{

}