import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { myService } from '../shared/my.service';
import { first } from 'rxjs/operators'


@Component({
templateUrl:'manageRole.component.html'
})

export class roleComponent implements OnInit{

    manageRole:FormGroup;
    constructor(private formBuilder:FormBuilder,
                private router:Router,
                private Myservice:myService){}

    ngOnInit(){

        localStorage.getItem("role")
       let userId=localStorage.getItem("EditUserID");
      // console.log(userId);
        if(!userId){
            console.log(userId);
            alert("Invalid Action");
            this.router.navigate(['/submitAdmin'])
            return;
        }
        this.manageRole=this.formBuilder.group({
            id:[],
            Name:['',Validators.required],
            Role:['',Validators.required],
            Email:['',Validators.required],
            Contact:['',Validators.required],
            Password:['',Validators.required]
        });FormGroup
       this.manageRole.controls['Name'].disable();
        this.Myservice.getUserById(+userId).subscribe(data =>{
            this.manageRole.setValue(data);

           // console.log(data);
        } );

        }
        onSubmit(){
             this.Myservice.updateUser(this.manageRole.value).pipe(first())
            .subscribe(data =>{
                this.router.navigate(['/submitAdmin']);
            },
            error=>{
                alert(error)
            }
            )
        }  
        
    }
    
  
      
