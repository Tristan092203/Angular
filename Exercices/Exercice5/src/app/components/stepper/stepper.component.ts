import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  number: number = 0;
  @Output() outputFromStepper: EventEmitter<any> = new EventEmitter();
  Augment($event: any) {
    this.number = this.number++;
    this.outputFromStepper.emit(this.number);
  }

  constructor() {}

  ngOnInit(): void {}
}
