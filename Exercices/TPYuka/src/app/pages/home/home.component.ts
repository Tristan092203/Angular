import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titre:string = "NutriCheckFood";

  constructor(private headerService : HeaderserviceService) { }

  ngOnInit(): void {
    this.headerService.changeTitre(this.titre)
  }

}
