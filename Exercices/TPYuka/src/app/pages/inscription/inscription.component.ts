import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
titre:string="Inscription"
  constructor(private headerService : HeaderserviceService) { }

  ngOnInit(): void {
    this.headerService.changeTitre(this.titre);
  }

}
