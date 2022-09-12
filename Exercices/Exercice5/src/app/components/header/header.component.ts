import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  number: any;

  Augment($event: any) {
    this.number = $event;
  }

  constructor() {}

  ngOnInit(): void {}
}
