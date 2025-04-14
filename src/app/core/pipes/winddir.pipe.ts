import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winddir',
  standalone: true,
})
export class WinddirPipe implements PipeTransform {
  transform(wind: string): string {
    let windDIR: string = '';

    switch (wind.toUpperCase()) {
      case 'N':
        windDIR = 'North';
        break;
      case 'NNE':
        windDIR = 'North-Northeast';
        break;
      case 'NE':
        windDIR = 'Northeast';
        break;
      case 'ENE':
        windDIR = 'East-Northeast';
        break;
      case 'E':
        windDIR = 'East';
        break;
      case 'ESE':
        windDIR = 'East-Southeast';
        break;
      case 'SE':
        windDIR = 'Southeast';
        break;
      case 'SSE':
        windDIR = 'South-Southeast';
        break;
      case 'S':
        windDIR = 'South';
        break;
      case 'SSW':
        windDIR = 'South-Southwest';
        break;
      case 'SW':
        windDIR = 'Southwest';
        break;
      case 'WSW':
        windDIR = 'West-Southwest';
        break;
      case 'W':
        windDIR = 'West';
        break;
      case 'WNW':
        windDIR = 'West-Northwest';
        break;
      case 'NW':
        windDIR = 'Northwest';
        break;
      case 'NNW':
        windDIR = 'North-Northwest';
        break;
    }

    return windDIR;
  }
}
