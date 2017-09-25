import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'type',
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Post[], sortType: string) {
    let output: Post[] = [];
    input.forEach(item => {
      if (item.type === sortType) {
        output.push(item);
      }
    })
    return output;
  }
}
