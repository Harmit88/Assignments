import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { myService } from '../shared/my.service';
import { first } from 'rxjs/operators'

@Component({
  selector:'edit-user',
  templateUrl:'edit.component.html'
})

export class editComponent implements OnInit{
    editForm: FormGroup;
    constructor(private formBuilder: FormBuilder,private router: Router, private MyService: myService) { }
    ngOnInit(){
        let userId = localStorage.getItem("EditUserID");
       // console.log("this is id" +userId )
        if(!userId) {
            alert("Invalid action.")
            this.router.navigate(['submitAdmin']);
            return;
          }
          this.editForm = this.formBuilder.group({
              id:[],
              Email:['', [Validators.required,Validators.email]],
              Name: ['', Validators.required],
              Contact: ['', Validators.required],
              Role:['',Validators.required],
              Password:['',Validators.required]
          }); FormGroup
          this.MyService.getUserById(+userId)
            .subscribe( data => {
              this.editForm.setValue(data);
              //console.log(data);
            });
        }

            onSubmit(){
                this.MyService.updateUser(this.editForm.value)
                  .pipe(first())
                  .subscribe(
                    data => {
                      this.router.navigate(['submitAdmin']);
                    },
                    error => {
                      alert(error);
                    });

    }

   
}