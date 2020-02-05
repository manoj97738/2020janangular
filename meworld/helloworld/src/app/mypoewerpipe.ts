import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';


@Pipe({ name: 'shaktimaan' })
export class Mycass implements PipeTransform {
    transform(value: any, geetavishwas?: any) {
        return value + ' Kuch to shaktimaan' + geetavishwas;
    }
}




// @Pipe({ name: 'extend' })
// export class Myclass2  extends DatePipe implements PipeTransform {
//     constructor(){
//         super();
//     }
//     transform(value: any, geetavishwas: any) {
//         return 
//     }
// }