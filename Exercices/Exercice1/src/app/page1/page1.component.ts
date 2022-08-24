import { NgClass, NgStyle } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  pagesecrete = document.getElementsByClassName("pagesecrete")
  verif:boolean = false;
  compteur:number = 0;
  tabDate: string[] = [];
  tabHours:string[] = [];
tabaffiche = document.getElementsByClassName("tabaffiche")
fondbleu:boolean = false;

  constructor() { }

  d = new Date();
  date:string = " ";
  hours:string = " ";


  view(){
    this.verif = !this.verif;
    this.compteur++;
    if (this.compteur == 5){
        this.fondbleu = true;
    }
  }

  resetDateHours(){
    if (this.verif===true){

    this.date = this.d.getFullYear() + " " + this.d.getMonth() +" "+ this.d.getDate();
    this.hours = this.d.getHours() + " " + this.d.getMinutes() + " " + this.d.getSeconds();
    this.tabDate.push(this.date);
    this.tabHours.push(this.hours);
    this.d = new Date;
  }





  }

  ngOnInit(): void {
  }

}
