import { Component } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-accueil',
  templateUrl: './donnee-physiologique.component.html',
  styleUrls: ['./donnee-physiologique.component.css']
})
export class DonneePhysiologiqueComponent {
 
  
  patientList : Patient[] = [];
  patientListRealtime: any[] = [];
  PatientObj : Patient = {
    id: '',
    nom: '',
    genre: '',
    prenom: '',
    email: '',
    contact1: '',
    contact2: '',
    birthday: '',
    first_namechild: '',
    last_namechild: '',
    localite: '',
    Diagnostique: '',
    motif: '',
    communication: '',
    conduite: '',
    severite: '',
    etat_clinique: '',
    date_consultation: '',
    observation: '',
    frequenceRespiratoireRealtime: '',
    frequenceCardiaqueRealtime: '',
    temperatureRealtime: '',
    nombrePasRealtime: '',
    giletid: '',
    GPSLatitude: '',
    GPSLongitude: '',
    nivauBaterie: '',
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
    },
 
  }
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  contact: string = '';
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
    frequenceRespiratoireRealtime:string='';
    frequenceCardiaqueRealtime:string='';
    temperatureRealtime:string='';
    nombrePasRealtime:string='';
    giletid:string=''
    GPSLatitude?:string;
    GPSLongitude?:string;
    nivauBaterie?:string;
  public detailPatient:any;
 
 
  constructor(private auth : AuthService, private data : DataService , private router: Router ,  private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.getAllPatients();
    // Transfert initial des données de Realtime Database à Firestore
   ;// this.getRealtimeData(); // Appel pour obtenir les données en temps réel
  }

  // getRealtimeData(): void {
  //   this.dataTransferService.getRealtimeData().subscribe((data: any) => {
  //     // Affecter les valeurs en temps réel aux propriétés correspondantes
  //     const patientId = data.patientId;
  //     const patientToUpdate = this.combinedPatientList.find(patient => patient.id === data.id);
  //     if (patientToUpdate) {
  //       patientToUpdate.frequenceRespiratoireRealtime = data.frequenceRespiratoire;
  //       patientToUpdate.frequenceCardiaqueRealtime = data.frequenceCardiaque;
  //       patientToUpdate.temperatureRealtime = data.temperature;
  //       patientToUpdate.nombrePasRealtime = data.nombrePas;
  //       console.log("Combined patient list:", this.combinedPatientList);
  //     }
  //   });
  // }
  

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
          contact1:patientData.contact1,
          contact2:patientData.contact2,
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
    this.contact= '';
    this.birthday  = '';
    this.first_namechild= '';
    this.last_namechild = '';
    this.localite = '';
  }

  addPatient() {

    if(this.first_name == ''  || this.last_name =='' || this.contact =='' || this.email =='' || this.birthday == '' ||
    this.first_namechild == '' || this.last_namechild == '' || this.localite == ''){
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

    this.data.addPatient(this.PatientObj);
    this.resetForm();
  }

  updatePatient() {

  }


  getDetailPatient(patient: Patient){
    this.detailPatient = null
    console.log("patient detail",patient);
    this.detailPatient = patient
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

  redirectToPage() {
    // Ici, remplacez 'chemin-de-redirection' par le chemin vers la page vers laquelle vous souhaitez rediriger.
    this.router.navigate([""]);
  }


}