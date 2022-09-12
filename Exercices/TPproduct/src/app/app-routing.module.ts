import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagedetailsComponent } from './pagedetails/pagedetails.component';
import { PagetabComponent } from './pagetab/pagetab.component';



const routes: Routes = [
  {
    path: 'pagedetails',
    children: [
      { path: ':id', component: PagedetailsComponent }]},

  { path: 'home', component: PagetabComponent },
  { path: '', component: PagetabComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
