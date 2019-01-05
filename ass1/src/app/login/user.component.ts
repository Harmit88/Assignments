import { Component } from '@angular/core';
import { user } from './login.model';
@Component({
   selector:'app-user',
    template:`<button (click)="getDetails()">getuserinput</button>
    {{UserInput.Username}}`
})

export class userComponent{
    UserInput = new user('');

    getDetails(){
        console.log(this.UserInput.Username);
    }

}