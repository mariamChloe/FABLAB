import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NgChartsModule } from 'ng2-charts';





import { environment } from '../environments/environment';
import { DashboarParentComponent } from './dashboar-parent/dashboar-parent.component';
import { PhysiologiqueParentComponent } from './physiologique-parent/physiologique-parent.component';
import { ListeDesPatientsComponent } from './dashboard/liste-des-patients/liste-des-patients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistogramChartsComponent } from './histogram-charts/histogram-charts.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboarParentComponent,
    PhysiologiqueParentComponent,
    ListeDesPatientsComponent,
    HistogramChartsComponent,
    PatientDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgChartsModule,
  

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
