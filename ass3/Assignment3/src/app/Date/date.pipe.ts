import { Pipe ,PipeTransform} from '@angular/core';
import * as moment from 'moment';
@Pipe({
    name:'datepipe'
})
export class MyPipe implements PipeTransform{
   transform(value:Date){
       var a=" ";
        a=moment(value,'YYYY/MM/DD:HH:MM:SS').fromNow()
       //console.log(a);  
       return a;
   }
}