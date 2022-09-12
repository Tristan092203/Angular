import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {



  texte: string = "";

  tabTexte: string[] = [];

  tabChar: string[] = [];

  lettreMaj: string = "";



  transform(arg: string): string {

    this.tabTexte = arg.toLowerCase().split(" ");

    for (let index = 1; index < this.tabTexte.length; index++) {

      this.tabChar = this.tabTexte[index].split("");

      this.lettreMaj = this.tabChar[0].toUpperCase();

      this.tabChar.splice(0, 1, this.lettreMaj);

      this.tabTexte.splice(index, 1, this.tabChar.join(""));

    }

    this.texte = this.tabTexte.join("");

    return this.texte;

  }



}
