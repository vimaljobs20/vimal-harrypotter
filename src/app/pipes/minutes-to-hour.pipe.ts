import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHour',
  standalone: true,
})
export class MinutesToHourPipe implements PipeTransform {
  transform(value: string): string {
    const minutes = Number(value) % 60;
    const hours = (Number(value) - minutes) / 60;

    const finalMinutes: string = hours + 'h ' + minutes + 'min';
    return finalMinutes;
  }
}
