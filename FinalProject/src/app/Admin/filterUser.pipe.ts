import { Pipe,PipeTransform } from '@angular/core';
import { Iuser } from '../common.model';

@Pipe({
   name:"filterpipe"
})

export class FilterPipe implements PipeTransform{

 transform(value:Iuser[],filterby:string){
     filterby=filterby? filterby.toLowerCase():null;
     return filterby ? value.filter((user:Iuser) =>
     (user.Name.toLowerCase().indexOf(filterby) != -1 )):value;
 }
}


/*return filterBy ? value.filter((products:Iproduct) =>
(products.productName.toLowerCase().indexOf(filterBy) !== -1 ) || (products.productCode.toLowerCase().indexOf(filterBy) !== -1)): value;

}
} */