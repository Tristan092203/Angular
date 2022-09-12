import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pagetab',
  templateUrl: './pagetab.component.html',
  styleUrls: ['./pagetab.component.css']
})
export class PagetabComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService : DataService, private route : Router) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

  showDetails(id:number){
      this.route.navigate(['/pagedetails', id]);

  }

}
