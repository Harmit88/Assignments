import { Component ,Input} from '@angular/core';
import { user } from './login.model';
@Component({
   selector:'app-user',
   templateUrl:'user.component.html'
   
})

export class userComponent{
    UserInput = new user('');
     access:boolean=false;

    @Input()
    all:String;

    @Input()
    UserEmail:String;

    @Input()
    Callme:number;

    firstToUpper(value:string):void {
        if( value.length > 0){
            this.UserInput.Username = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else{
            this.UserInput.Username=value;
        
        }  
    }


    getDetails(){
        console.log(this.UserInput.Username);
       console.log(this.all);
       if( this.all == this.UserInput.Username){
            console.log("hello" +this.all)
            this.access=true;
       }else{
        console.log(this.UserInput.Username ,"User doesnt not exist" );
       }
    }

}