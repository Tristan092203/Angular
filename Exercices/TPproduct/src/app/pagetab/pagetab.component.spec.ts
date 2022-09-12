import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetabComponent } from './pagetab.component';

describe('PagetabComponent', () => {
  let component: PagetabComponent;
  let fixture: ComponentFixture<PagetabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
