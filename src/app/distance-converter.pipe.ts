import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distanceConverter'
})
export class DistanceConverterPipe implements PipeTransform {

  transform(value: number, targetUnit:string):any{
    if(!value){
      return '';
    }
    switch(targetUnit){
      case 'km':
        return value * 1.60934;


      case 'm':
      return value * 1.60934 * 1000 ;
      
      case 'c':
      return value * 1.60934 * 1000  * 1000; 

      default:
        throw new Error('Target Unit Is Not Supported!')
    }
       
  }

}
