import { Pipe, PipeTransform} from '@angular/core';
import { Ihome } from '../Home/home_model'
@Pipe({
 name : 'mydate'
})
export class MyDatePipe implements PipeTransform{
    transform(value:Ihome[],filterBy:string){
        filterBy=filterBy ? filterBy : null;
        return filterBy ? value.filter((home:Ihome) =>
        (home.release_date.indexOf(filterBy) != -1) || (home.name.indexOf(filterBy)!= -1)) : value;
    }
    }

