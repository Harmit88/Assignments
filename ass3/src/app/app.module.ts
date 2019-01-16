import { NgModule } from '@angular/core' ;
import { AppComponent } from './app.component';
import { dateComponent } from './Date/date.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyPipe } from './Date/date.pipe';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        dateComponent,
        MyPipe
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        
    ]
})

export class AppModule{
    
}