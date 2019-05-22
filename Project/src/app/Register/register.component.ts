import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { myService } from '../shared/my.service';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';


@Component({
   selector:'my-form',
   templateUrl:'register.component.html'
})
export class RegisterComponent implements OnInit{
   
//RegisterData = new RegisterUser(0,0,'null','null','null','null','null','');
RegisterForm:FormGroup;

 //registeruser:RegisterUser;

 constructor(private router :Router,
   private route :ActivatedRoute,
   private _myService: myService,
   private formBuilder:FormBuilder){}

   ngOnInit(){
   this.RegisterForm=this.formBuilder.group({
      id:[],
      Name:['',[Validators.required,Validators.minLength(6)]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      Email:['',Validators.required],
      Contact:['',[Validators.required,Validators.maxLength(10)]],
      Role:['',Validators.required]

   });
   }
   onSubmit(){

      if (this.RegisterForm.invalid){
         alert("Fill all Details");
      }
      else{
         this._myService.RegisterUser(this.RegisterForm.value).subscribe(data =>{
            this.router.navigate(['/login']);
      });
   }
   }
  /*    this.route.paramMap.subscribe(parametermap =>{
     const id=   + parametermap.get('id');
     this.getUser(id);
      }); */
   }

   /*private getUser(id:number):void
   {
    if (id === 0 ){
      this.registeruser = {
         Admin:null,
         id:null,
         Name:null,
         Email:'',
         Contact:null,
         password:null,
         confpassword:null,
         Role:null
       };
      }
      else{
        console.log(this.registeruser);
      //this.registeruser =this._myService.getUserDetail(id);
         

      }
    
   }*/
