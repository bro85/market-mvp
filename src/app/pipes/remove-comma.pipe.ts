import { Pipe, PipeTransform } from '@angular/core';

// This pipe removes the comma in a string
@Pipe({
  name: 'removeComma'
})

export class RemoveCommaPipe implements PipeTransform {

  transform(value: string | null): string {
    if (value !== undefined && value !== null) {
      return value.replace(/,/g, " ");
    } else {
      return "";
    }
  }

}
