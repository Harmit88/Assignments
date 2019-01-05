import { Component } from '@angular/core';
import { Admin } from '../login/login.model';
import { NgForm } from '@angular/forms';
@Component({
    selector:'app-access',
    templateUrl:'login.component.html'
})
export class AdminComponent {
    data = new Admin(' ',' ', 0);
    test :any;
    firstToUpper(value:string):void {
        if( value.length > 0){
            this.data.Name = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else{
            this.data.Name=value;
        }  
    }

    formSubmit(form:NgForm):void{
        
        this.test=form.value;
        console.log(this.test);
    }
   
}