import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DonneePhysiologiqueComponent } from './donnee-physiologique/donnee-physiologique.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { CarnetDeSanteComponent } from './carnet-de-sante/carnet-de-sante.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';



@NgModule({
  declarations: [
    HomeComponent,
    AccueilComponent,
    InscriptionComponent,
    DonneePhysiologiqueComponent,
    CarnetDeSanteComponent,
    GeolocalisationComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }