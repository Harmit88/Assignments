import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { myService } from './my.service';

@Component({
   templateUrl:'Add.component.html'
})
export class AddComponent implements OnInit{

   title:string ="Add New User";
   addForm:FormGroup;

   constructor(private formBuilder: FormBuilder,
               private router :Router,
               private _myService :myService){}
   ngOnInit(){
      this.addForm= this.formBuilder.group({
         id:[],
         Name:['',Validators.required],
         Email:['',Validators.required],
         Contact:['',[Validators.maxLength(10),Validators.required]],
         Role:['',Validators.required],
         Password:['',Validators.required]
      }); 
   }

   onSubmit(){
      this._myService.CreateUser(this.addForm.value).subscribe(data =>{
         this.router.navigate(['/submitAdmin']);
         console.log(data)
      });
   }

}