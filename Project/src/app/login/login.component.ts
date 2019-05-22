
import { Router } from '@angular/router';
import { Component, OnInit, NgZone} from '@angular/core';
import { myService } from '../shared/my.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Iuser } from '../common.model';


@Component({
  selector :'login-comp',
  templateUrl:'login.component.html',
  styleUrls:['login.component.css']
})

export class LoginComponent implements OnInit{

    Name:string;
    Password:string;
    loginForm: FormGroup;
    IsLoggined:boolean = true;
   isSubmitted  =  false;
    data:Iuser[];


 constructor( public router : Router,
              private myService:myService ,
              private formBuilder:FormBuilder,
              private zone:NgZone){ }

  ngOnInit():void{
    this.loginForm=this.formBuilder.group({
  Name:['',Validators.required],
  Password:['',[Validators.required,Validators.minLength(6)]]
  })

  }
 // get formControls() { return this.loginForm.controls; }

  onSubmit(){
   
  this.Name=this.loginForm.controls.Name.value;
  this.Password=this.loginForm.controls.Password.value;
                //
                  //         if(this.loginForm.invalid){
                            // console.log("yes its invalid");
                    //          return;
                    //       }
         this.myService.getUser().subscribe(data => {
           this.data = data
           this.data.forEach(element => {
            if ( this.Name == element.Name && this.Password == element.Password)
            {
              //console.log(this.Name);
             // console.log(element.Name);
             //this.isSubmitted  =  false;
             this.zone.run(() =>this.router.navigate(['/submitAdmin']));
            //this.router.navigate(['/submitAdmin']);
            
            localStorage.setItem("Name", this.Name);
            localStorage.setItem("Password",this.Password)
            }
            else
            {
             // alert("Invalid Id and Password");

             this.isSubmitted=true;
            }
            });
    
  
      });
    }
  }
    
  
 // Data = new User('','');
    
        // getuserName():any{
         // return this.Data.name
          //}




/*  myFun(username:string,password:string)
  {
  //this.status=1
  // this.myService.getUserByName()
  
   this.myService.myFun(username,password).subscribe(users =>{
     //console.log("thisis:" ,typeof(users) )
     //users=status;
     if(users){
     
       this.router.navigate(['submitAdmin']);
      
     }else{
      this.IsLoggined=false
       return false
     };
   })
   /*if(this.Data.name == "Harmit"  && this.status==1){

    this.router.navigate(['/submitAdmin']);
   // console.log("hi");
   
    }
    else
    {
      this.router.navigate(['/UserSubmit',this.Data.name]);
      console.log("bye");
    }
    console.log(this.Data.name)
    return this.Data.name */
