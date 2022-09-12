import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichtabComponent } from './affichtab.component';

describe('AffichtabComponent', () => {
  let component: AffichtabComponent;
  let fixture: ComponentFixture<AffichtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
