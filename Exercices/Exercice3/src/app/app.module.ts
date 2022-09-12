import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { CamelCasePipe } from './tools/camel-case.pipe';
import { TrimPipePipe } from './tools/trim-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    CamelCasePipe,
    TrimPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
