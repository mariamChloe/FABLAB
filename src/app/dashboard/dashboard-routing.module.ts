import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { DonneePhysiologiqueComponent } from './donnee-physiologique/donnee-physiologique.component';
import { CarnetDeSanteComponent } from './carnet-de-sante/carnet-de-sante.component';
import { ListeDesPatientsComponent } from './liste-des-patients/liste-des-patients.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent, 
children:[
  {path:"",redirectTo:"accueil",pathMatch:"full"},
  {path:"accueil",component:AccueilComponent},
  {path:"donnee-physiologique",component:DonneePhysiologiqueComponent},
  {path:"carnet-de-sante",component:CarnetDeSanteComponent},
  {path:"geolocalisation",component:GeolocalisationComponent},
  {path:"inscription",component:InscriptionComponent},
  { path: 'patients', component:ListeDesPatientsComponent },
  
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }