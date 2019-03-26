import { Component, OnInit } from '@angular/core';
import { myService } from '../shared/my.service';
import { Iuser } from '../common.model';


@Component({

    templateUrl:'user.component.html'
})

export class UserComponent implements OnInit{

 // public Mydata= [];
    myUser:Iuser[];



    constructor(private UserServices : myService){}

    ngOnInit(){
     
    this.UserServices.getUser().subscribe((data) => this.myUser = data);
        
    //subscribe((data)=> this.MyUser = data);
 //console.log(this.Mydata.id);
    }

   /* ViewDetails(Id:number){
        alert(Id);
           const selectedId = this.UserServices.getUserById(Id).subscribe(User => {
                User[0].Id === Id 
           console.log(selectedId);
           this.router.navigate(['/submitAdmin/view',Id])
          // return Id;
           });
           */


}