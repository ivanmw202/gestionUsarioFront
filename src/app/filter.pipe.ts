import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any,arg: any[]): any {
    if (arg.length < 2) return value;
    const resultPosts = [];
    for (const post of value){
      if(post.nombre.indexOf(arg) > -1) {
        resultPosts.push(post);
      };
      if(post.apMaterno.indexOf(arg) > -1) {
        resultPosts.push(post);
      };
      if(post.apPaterno.indexOf(arg) > -1) {
        resultPosts.push(post);
      };
      
      
    };
    return resultPosts;
  }

}
