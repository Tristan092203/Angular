import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  @Output()
  change: EventEmitter<string> = new EventEmitter();

  constructor() { }
  changeTitre(title:string){
    this.change.emit(title);
  }
}
