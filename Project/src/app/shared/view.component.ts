import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { myService} from '../shared/my.service'
import { Iuser} from '../common.model';
@Component({
selector:'view-comp',
templateUrl:'view.component.html'
})
export class ViewComponent implements OnInit{
     title ="Details page";
    constructor(private route:ActivatedRoute,
                private _myService:myService){}
                id:number;
                User:Iuser[];
                test:any;
                Name:String;
                Contact:Number;
                Email:String;
                Role:Number;


ngOnInit():void{

    let id =+this.route.snapshot.params['id']
     this.title += `<<< ${id}`;
 
     this.route.queryParams
                .subscribe(params =>{
                 this.id=params['id'];
                 this.Name= params['Name'];
                 this.Contact=params['Contact'];
                 this.Email=params['Email'];
                 this.Role=params['Role'];
                })
 //this.id=this.route.snapshot.params['id'];

 //console.log(this.id)
// this.test=this._myService.getUserDetail(this.id).subscribe((dconsole.log(this.test);
  //this._myService.getUser().subscribe((data) => this.User = data);
  //.((data) => this.User = data);

 }

getUserName():void{
    return this.getUserName()
}
 
}


/*
 id:Number;
 details:Iproduct[];
gOnInit():void{
    this.id=this._route.snapshot.params['id'];
    this._productService.getProductDetails(this.id)
       .subscribe((data) => this.details = data)
    
        
}*/