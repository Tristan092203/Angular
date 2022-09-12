import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
titre:string = "Accueil"
  constructor(private headerService : HeaderserviceService) { }

  ngOnInit(): void {
    this.headerService.changeTitre(this.titre);
  }

}
