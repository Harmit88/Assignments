import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToweather'
})
export class NumberToweatherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 0 :
      value='snowey'
      break;
      case 1 :
      value='rainy'
      break;
     default :
      value=value
      break;
    }
    return value;
  }

}
