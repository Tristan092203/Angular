import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-affichtab',
  templateUrl: './affichtab.component.html',
  styleUrls: ['./affichtab.component.css']
})
export class AffichtabComponent implements OnInit {
  titre:string="Données utilisateurs";
  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
    this.headerService.changeTitre(this.titre);
  }

}
