import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByJson'
})
export class OrderByJsonPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if (!value) return value;

    const propiedad = args;
    return value.sort((a, b) => {
      if (a[propiedad] < b[propiedad]) {
        return -1;
      } else if (a[propiedad] > b[propiedad]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}