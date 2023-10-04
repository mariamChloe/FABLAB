import { Component } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import {ChartData} from 'chart.js';
import 'chart.js';
import {  ChartOptions } from 'chart.js';
import { Color } from 'chart.js';
















@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  
  


  patientList : Patient[] = [];
  PatientObj : Patient = {
    id: '',
    nom: '',
    genre: '',
    prenom: '',
    email: '',
    birthday: '',
    first_namechild: '',
    last_namechild: '',
    localite: '',
    contact1:'',
    contact2:'',
    Diagnostique:'',
    frequenceRespiratoireRealtime: '',
    frequenceCardiaqueRealtime: '',
    temperatureRealtime: '',
    nombrePasRealtime: '',
    motif:'',
    communication:'',
    conduite:'',
    severite:'',
    etat_clinique:'',
    date_consultation:'',
    observation:'',
    giletid:'',
    GPSLatitude:'',
    GPSLongitude:'',
    nivauBaterie:'',
    password:'',
    role:'',
    carnet: {
      Diagnostique: '',
      motif: '',
      conduite: '',
      etat_clinique: '',
      date_consultation: '',
      observation: '',
      // ... autres propriétés du carnet de santé ...
    }
  }
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  contact1:string = '';
  contact2:string = '';
  birthday: string = '';
  first_namechild: string = '';
  last_namechild: string = '';
  localite: string = '';
  age: string = '';
  Diagnostique:string = '';
    communication:string = '';
    conduite:string = '';
    severite:string = '';
    etat_clinique:string = '';
    date_consultation:string = '';
    observation:string = '';
    frequenceRespiratoireRealtime:string = '';
    frequenceCardiaqueRealtime:string = '';
   temperature:string = '';
   nombrePas:string = '';
  giletid:string='';
  GPSLatitude?:string;
  GPSLongitude?:string;
  nivauBaterie?:string;
  
  public detailPatient:any;
 
 
  constructor(private router: Router ,private auth : AuthService, private data : DataService) {

    
   }

  ngOnInit(): void {
    this.getAllPatients();



    
  }

  

  //register() {
  //  this.auth.logout();
  //}

  getAllPatients() {
    this.data.getAllPatient().subscribe((res: any) => {
      this.patientList = Object.keys(res).map(key => {
        const patientData = res[key] as Patient;
        return {
          id: key,
          nom: patientData.nom,
          genre: patientData.genre,
          prenom: patientData.prenom,
          email: patientData.email,
          contact1: patientData.contact1,
          contact2: patientData.contact2,
          birthday: patientData.birthday,
          first_namechild :patientData.first_namechild ,
    last_namechild : patientData.last_namechild ,
    localite : patientData.localite ,
    Diagnostique:patientData.Diagnostique,
    motif:patientData.motif,
    communication:patientData.communication,
    conduite:patientData.conduite,
    severite:patientData.severite,
    etat_clinique:patientData.etat_clinique,
    date_consultation:patientData.date_consultation,
    observation:patientData.observation,
    frequenceRespiratoireRealtime:patientData.frequenceRespiratoireRealtime,
    frequenceCardiaqueRealtime: patientData.frequenceCardiaqueRealtime,
    temperatureRealtime: patientData.temperatureRealtime,
    nombrePasRealtime: patientData.nombrePasRealtime,
    giletid:patientData.giletid,
    GPSLatitude:patientData.GPSLatitude,
    GPSLongitude:patientData.GPSLongitude,
    nivauBaterie:patientData.nivauBaterie,
    password:patientData.password,
    geolocalisation:patientData.geolocalisation,

    role:patientData.role,
    carnet: patientData.carnet,
          // ... Autres propriétés correspondantes ...
        
        };
      });
      console.log("All Patient =>", this.patientList);
    }, err => {
      alert('Error while fetching patient data');
    });
  }

  resetForm(){
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email  = '';
    this.contact1= '';
    this.contact2= '';
    this.birthday  = '';
    this.first_namechild= '';
    this.last_namechild = '';
    this.localite = '';
  }

  addPatient() {

    if(this.first_name == ''  || this.last_name =='' || this.contact1 =='' || this.email =='' || this.birthday == '' ||
    this.first_namechild == '' || this.last_namechild == '' || this.localite == '' || this.contact1 ==''){
      alert('Fill all input fields');
      return;
    }
     
    this.PatientObj.id='';
    this.PatientObj.nom = this.first_name;
    this.PatientObj.prenom = this.last_name;
    this.PatientObj.email = this.email;
    this.PatientObj.birthday = this.birthday;
    this.PatientObj.first_namechild = this.first_namechild;
    this.PatientObj.last_namechild = this.last_namechild;
    this.PatientObj.localite = this.localite;
    this.PatientObj.contact1=this.contact1;
    this.PatientObj.contact2=this.contact2;

    this.data.addPatient(this.PatientObj);
    this.resetForm();
  }

  updatePatient() {

  }
  getColorClass(patient: any): string {
    if (patient.frequenceCardiaqueRealtime > 100) {
      return 'red-bg'; // Classe CSS pour les valeurs élevées de la fréquence cardiaque
    } else if (patient.frequenceCardiaqueRealtime < 60) {
      return 'green-bg'; // Classe CSS pour les valeurs basses de la fréquence cardiaque
    } else {
      return 'blue-bg'; // Classe CSS par défaut
    }
  }

  getDetailPatient(patient: Patient){
    this.detailPatient = null
    console.log("patient detail",patient);
    this.detailPatient = patient
  }

  redirectToPage() {
    // Ici, remplacez 'chemin-de-redirection' par le chemin vers la page vers laquelle vous souhaitez rediriger.
    this.router.navigate(["/liste des patients"]);
  }

  columnChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Column Chart in Material UI Tabs',
    },
    data: [
    {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};

pieChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Pie Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
    {
        type: 'pie',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};

lineChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Line Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
    {
        type: 'line',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};
}

