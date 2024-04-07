import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {
  transform(value: object[], colName: string, asc: boolean): any[] {

    const sortFn = (a: any, b: any): number => {
      if (a[colName] < b[colName]) return (asc ? -1 : 1);
      if (a[colName] > b[colName]) return (asc ? 1 : -1);
      return 0;
    }

    return value.sort(sortFn);
  }
}
