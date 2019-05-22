import { Component, OnInit} from '@angular/core';
import { User } from './user.model';
import { Router, NavigationEnd } from '@angular/router'


@Component({
  selector :'app-contact',
  templateUrl:'app.component.html'
})

export class MyComponent implements OnInit{
  

 constructor( private router : Router ){}

  ngOnInit(){

  }
  //Data = new User('','');

  Logout(){
    window.localStorage.clear();
    this.router.navigate(['/login']);
    window.sessionStorage.clear();
    
  }
    
  

 /* myFun():void{
   // this.router.navigate(['/submitAdmin']);
  } */
}

 /*var status=1;
    if(this.Data.name == "Harmit"  && status==1){

    this.router.navigate[('/submit1')];
   // console.log("hi");
   
    }
    else
    {
      this.router.navigate(['/submit0']);
      console.log("bye");
    }
    
     return false */