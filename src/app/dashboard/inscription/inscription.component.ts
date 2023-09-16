import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Patient } from 'src/app/model/patient';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

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
  birthday: string = '';
  first_namechild: string = '';
  last_namechild: string = '';
  localite: string = '';
  age: string = '';
  Diagnostique:string = '';
    motif:string = '';
    communication:string = '';
    conduite:string = '';
    severite:string = '';
    etat_clinique:string = '';
    date_consultation:string = '';
    observation:string = '';
    conctact1:string='';
    conctact2:string='';
    frequenceRespiratoireRealtime?: string; // Make these optional with '?'
    frequenceCardiaqueRealtime?: string;    // Make these optional with '?'
    temperatureRealtime?: string;           // Make these optional with '?'
    nombrePasRealtime?: string;   
    giletid: string =''; 
    password:string='';
    role:string='';
  public detailPatient:any;
  afAuth: any;
  db: any;

 
 
  constructor(private auth : AuthService, private router: Router, private data : DataService) {}

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
    this.birthday  = '';
    this.first_namechild= '';
    this.last_namechild = '';
    this.localite = '';
    this.severite = '';
    this.Diagnostique = '';
    this.motif = '';
    this.etat_clinique = '';
    this.date_consultation = '';
    this.observation = '';
    this.giletid='';
    this.communication = '';
    this.conduite = '';
  }
  addPatient() {
    if (this.first_name == '' || this.last_name == '' || this.birthday == '' ||
        this.first_namechild == '' || this.last_namechild == '' || this.localite == '' ||
        this.severite == '' || this.communication == '' || this.giletid == ''|| this.conctact1=='' ) {
      alert('Fill all input fields');
      return;
    }
  
    const patientId = this.giletid; // Use giletid as the patient ID
  
    const newPatient: Patient = {
      id: patientId,
      nom: this.first_name,
      prenom: this.last_name,
      email: this.email,
      birthday: this.birthday,
      first_namechild: this.first_namechild,
      last_namechild: this.last_namechild,
      contact1:this.conctact1,
      contact2:this.conctact2,
      localite: this.localite,
      severite: this.severite,
      communication: this.communication,
      Diagnostique :this.Diagnostique ,
      motif:this.motif ,
      etat_clinique:this.etat_clinique ,
      date_consultation : this.date_consultation ,
      observation : this.observation ,
      conduite  : this.conduite ,
      giletid: this.giletid,
      genre: '',  // Provide default or initial values
      frequenceRespiratoireRealtime: '',
      frequenceCardiaqueRealtime: '',
      temperatureRealtime: '',
      nombrePasRealtime: '',// ... (your patient data properties)
      GPSLatitude:'',
    GPSLongitude:'',
    nivauBaterie:'',
    password:'',
    role:'',
    carnet: {
      Diagnostique: this.Diagnostique,
      motif: this.motif,
      conduite: this.conduite,
      etat_clinique: this.etat_clinique,
      date_consultation: this.date_consultation,
      observation: this.observation,
      // ... autres propriétés du carnet de santé ...
    }
    };
  
    console.log('Adding new patient:', JSON.stringify(newPatient));
  
    // Save the new patient data to the Realtime Database using the patient ID as the node key
    this.data.addPatientToRealtimeDatabase(patientId, newPatient)
      .then(() => {
        // After adding the patient, create a "carnet" node
        const carnetNode :  { [key: string]: boolean } = {};
        carnetNode[patientId] = true; // Use a placeholder value (e.g., true) for now
  
        // Save the carnet node with the patient ID as the key
        return this.data.addCarnetNode(patientId, carnetNode); // Implement this function in your DataService
      })
      .then(() => {
        console.log('Successfully added patient and carnet');
        this.resetForm();
        this.router.navigate(["/dashboard/home/patients"]);
      })
      .catch(error => {
        console.error('Error adding patient and carnet:', error);
      });
  }
  
  async register(): Promise<void> {
    try {
      const authResult = await this.auth.register(this.email, this.password);
      if (authResult && authResult.user) {
        // Le compte utilisateur a été créé avec succès
        console.log('User registered successfully');
        this.resetForm();
        
        // Enregistrez le rôle de l'utilisateur dans la base de données
        await this.data.setRole(authResult.user.uid, this.role);
      } else {
        console.error('User registration failed');
      }
    } catch (error) {
      // Une erreur s'est produite lors de la création du compte utilisateur
      console.error('Error registering user:', error);
    }
  }
  
  

 


  updatePatient(): void {

  }

  getDetailPatient(patient: Patient){
    this.detailPatient = null
    console.log("patient detail",patient);
    this.detailPatient = patient
  }
}