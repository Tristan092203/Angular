import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimPipe'
})
export class TrimPipePipe implements PipeTransform {
  masque:any = [];



  transform(value: string): string {
    value = value.slice(0,10);
    return value + "....."
  }

}
