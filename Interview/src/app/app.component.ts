import { Component } from '@angular/core';
import { ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interview';


  @ViewChild('firstname') nameInputRef:ElementRef

  show(lastname:string){
    //console.log(firstname+' ' +lastname);

   var test= this.nameInputRef.nativeElement.value + ' ' + lastname

   console.log(test);
  }
}
