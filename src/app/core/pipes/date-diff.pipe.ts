import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: string): string {
    try {
      return moment(new Date(value), "YYYYMMDD").fromNow()
    } catch(err) {
      return 'X'
    }
  }

}
