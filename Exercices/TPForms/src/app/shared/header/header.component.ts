import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titre:string  = "Home";
  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
    this.headerService.changeTitre(this.titre);
  }


}
