import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value === 'whale') {
      return '\u{1f40b}'
    } else if (value === 'octopus') {
      return '\u{1f419}'
    } else if (value === 'blue fish') {
      return '\u{1f41f}'
    } else if (value === 'tropical fish') {
      return '\u{1f420}'
    } else if (value === 'blowfish') {
      return '\u{1f421}'
    } else if (value === 'turtle') {
      return '\u{1f422}'
    } else if (value === 'crab') {
      return '\u{1f980}'
    } else if (value === 'lobster') {
      return '\u{1f99e}'
    }
    return null;
  }

}
