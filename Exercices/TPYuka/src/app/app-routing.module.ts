import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'accueil', component : AccueilComponent},
  {
    path: '',
    children: [
      { path: 'accueil', component: AccueilComponent },
    ],
  },
  {path : 'accueil',
children: [
  {path : 'inscription', component : InscriptionComponent},
  {path : 'connexion', component : ConnexionComponent}
]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
