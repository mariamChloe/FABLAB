import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarParentComponent } from './dashboar-parent/dashboar-parent.component';
import { LoginParentComponent } from './auth/login-parent/login-parent.component';
import { AccueilComponent } from './dashboard/accueil/accueil.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HistogramChartsComponent } from './histogram-charts/histogram-charts.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  { path:'', loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  { path:'dashboard', loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  { path: 'dashboar-parent', component: DashboarParentComponent },
  { path: 'login-parent', component: LoginParentComponent },
  { path: 'home', component:HomeComponent },
  { path: 'accueil', component:AccueilComponent },
  { path: 'histogram-charts', component:HistogramChartsComponent },
  { path: 'patient-details', component:PatientDetailsComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
