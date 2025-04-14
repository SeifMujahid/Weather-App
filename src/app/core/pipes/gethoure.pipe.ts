import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gethoure',
  standalone: true,
})
export class GethourePipe implements PipeTransform {
  transform(timeStr: string): string {
    timeStr = timeStr.slice(11);
    return timeStr;
  }
}
