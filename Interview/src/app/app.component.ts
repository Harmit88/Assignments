import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Interview';

   
  ngOnInit(): void {
   let val:number=20
   var test: number=0
    let array=[1,2,12,5,8,7];
    array.forEach(function(key,value){
        var value1 = key
       // console.log(value1);
       // console.log("this is key "+key);
       // console.log("this is value" +value1)
        array.forEach(function(key1,value1){
        // console.log(key1);
           test = key + key1
           console.log(test)
          if (test == val){ 
            
           
          }
        })
      });
        
  
    
      
    
  }
 
 
 
  }


/*  @ViewChild('firstname') nameInputRef:ElementRef

  show(lastname:string){
    //console.log(firstname+' ' +lastname);

   var test= this.nameInputRef.nativeElement.value + ' ' + lastname

   console.log(test); 
  }*/

