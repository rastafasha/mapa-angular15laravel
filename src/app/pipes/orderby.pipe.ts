import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, args: any): any {
    return value.sort((a, b) => {
      if (a[args] < b[args]) return -1;
      if (a[args] > b[args]) return 1;
      return 0;
    });
  }
}