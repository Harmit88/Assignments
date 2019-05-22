import { Component, OnInit } from '@angular/core';
import { Iuser } from '../common.model';
import { Router} from '@angular/router';
import {myService} from '../shared/my.service'



@Component({
     selector:'Admin-comp',
     templateUrl:'admin.component.html'
})

export class AdminComponent implements OnInit{

     Show:boolean=true;
     //but:boolean=true;
     DisplayUser:string;
      User:Iuser[];
      test :String
      constructor(public router:Router,
                  private _myService: myService){
                       this.router = router;
                  }
     
                         ngOnInit():void{
                         //this.User=this._myService.getUser();
                         this._myService.getUser().subscribe((data) => this.User = data);
                         this.DisplayUser=localStorage.getItem("Name");
                         }
                              getData():void{
                                   this.Show = !this.Show;
                              }
     

     ViewDetails(id:number){
       alert(id);
          const selectedId = this._myService.getUserById(id).subscribe(User => {
               User[0].id === id 
         // console.log(selectedId);
          this.router.navigate(['/submitAdmin/view',id])
         // return Id;
          });
       }
       EditUser(use: Iuser):void{

          console.log("this id my id:" +use.id);
          localStorage.removeItem("EditUserID");
          localStorage.setItem("EditUserID",use.id.toString());
         // console.log("this is my ans" +myItem);
          this.router.navigate(['submitAdmin/edit'])
       }

       manageRole(use:Iuser):void{
          console.log(use.Role);
          localStorage.removeItem("EditUserID");
         // localStorage.removeItem("Role");
          localStorage.setItem("EditUserID",use.id.toString());
         // localStorage.setItem("Role",use.Role.toString());
          this.router.navigate(['submitAdmin/manageRole']);
       }
       DeleteUser(user:Iuser):void{
          console.log(user.id);
          this._myService.DeleteUser(user.id)
          .subscribe( data => {
               console.log(data);
               this.User = this.User.filter(u => u! == user);
               //alert("User Deleted");
            // this.router.navigate(['submitAdmin']);
            location.reload();
            
                
          })
     }
     addUser():void{
          this.router.navigate(['submitAdmin/add-user']);
     }
      
     }


     /*  this.User.forEach(function(item){
          Object.keys(item).forEach(function(key){
               if(key == "id"){
                    if( userId == item[key])
                    {
                      console.log("success");
                    this.router.navigate(['/submitAdmin/view',userId]);
                       }
                       else{
                            console.log("fail");
                       }
                       })
                })
               } */
            
             

            // console.log(key);
          
          
         //   this.router.navigate(['/submitAdmin/view',userId]);   
       
  

     //Onclick(){

   //  }

    
