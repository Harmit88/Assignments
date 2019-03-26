
import { Router } from '@angular/router';
import { Component, Input, ComponentFactoryResolver} from '@angular/core';
import { User } from '../user.model';
import { myService } from '../shared/my.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector :'login-comp',
  templateUrl:'login.component.html'
})

export class LoginComponent{
    Name:string;
    Password:string;
    loginForm: FormGroup;
    IsLoggined:boolean = true;
    isSubmitted  =  false;

 constructor( private router : Router,
              private myService:myService ,
              private formBuilder:FormBuilder){}

  ngOnInit(){

this.loginForm=this.formBuilder.group({
  Name:['',Validators.required],
  Password:['',[Validators.required,Validators.maxLength(6)]]
})
  }
  get formControls() { return this.loginForm.controls; }

  onSubmit(){
    this.Name=this.loginForm.controls.Name.value;
    this.Password=this.loginForm.controls.Password.value;
    //console.log(this.loginForm.value);
    this.isSubmitted=true;
                if(this.loginForm.invalid){
                 // console.log("yes its invalid");
                  return;
                }
    this.router.navigate(['submitAdmin']);
    //  this.myService.loginForm(loginForm.value).subscribe((res) =>{
    //    console.log("this is" +res)
      //console.log("hello" +this.Name);
     localStorage.setItem("Name", this.Name);
     localStorage.setItem("Password",this.Password)
    
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
  
   
