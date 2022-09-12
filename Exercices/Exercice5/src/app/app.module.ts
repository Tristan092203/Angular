import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagemainComponent } from './components/page1/pagemain.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatLineModule, MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { Page2Component } from './components/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    PagemainComponent,
    HeaderComponent,
    StepperComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCommonModule,
    MatIconModule,
    MatStepperModule,
    MatOptionModule,
    MatLineModule,
    MatRippleModule,
    MatNativeDateModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
