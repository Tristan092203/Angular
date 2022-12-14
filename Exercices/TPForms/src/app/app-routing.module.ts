import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichtabComponent } from './component/affichtab/affichtab.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'affichetab', component: AffichtabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
