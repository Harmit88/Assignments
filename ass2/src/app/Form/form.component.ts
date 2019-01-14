import { Component } from '@angular/core';
import { User } from '../login.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
 selector:'my-form',
 templateUrl:'form.component.html'
})

export class formComponent{
 data = new User('','');
// display(value:String ):void{
  
 //  }
 /*constructor(private router: Router) { }
    formSubmit(form:NgForm):void{
        this.router.navigate(['/HomeComponent']);
    } */
 } 

 