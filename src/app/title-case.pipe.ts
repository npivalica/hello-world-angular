import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value)
      return null;


    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      if(i > 0 && this.IsPreposition(words[i])) 
        words[i] = words[i].toLocaleLowerCase();
      else
        words[i]= this.ToTitleCase(words[i]);
    }
    return words.join(' ');
  }

  private IsPreposition(word: string): boolean{
    let prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(word.toLowerCase())
  }

  private ToTitleCase(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }

}
