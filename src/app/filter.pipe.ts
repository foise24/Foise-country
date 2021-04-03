
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string) {
    if (!searchText) {
      return items;
    }
  

    return items.filter(item => {
      return item.map.includes(searchText);
    });
  }
}