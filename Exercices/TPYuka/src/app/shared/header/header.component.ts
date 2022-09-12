import { Component, OnInit } from '@angular/core';
import {  HeaderserviceService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titre:string = " ";

  constructor(private headerService : HeaderserviceService) { }

  ngOnInit(): void {


  this.headerService.change.subscribe((x) =>{
  this.titre = x;
  })
}
}
