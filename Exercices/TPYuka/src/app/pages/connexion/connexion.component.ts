import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
titre:string = "Connexion"
  constructor(private headerService : HeaderserviceService) { }

  ngOnInit(): void {
    this.headerService.changeTitre(this.titre)
  }

}
