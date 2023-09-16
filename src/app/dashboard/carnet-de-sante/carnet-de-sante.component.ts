import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { DataService } from 'src/app/shared/data.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-carnet-de-sante',
  templateUrl: './carnet-de-sante.component.html',
  styleUrls: ['./carnet-de-sante.component.css'],
  
})



export class CarnetDeSanteComponent implements OnInit {
  patientList: Patient[] = [];
  PatientObj: Patient = {
    id: '',
    nom: '',
    genre: '',
    prenom: '',
    email: '',
    birthday: '',
    first_namechild: '',
    last_namechild: '',
    localite: '',
    Diagnostique:'',
    contact1:'',
    contact2:'',
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
    carnet: 
      {
        Diagnostique: '',
        motif: '',
        conduite: '',
        etat_clinique: '',
        date_consultation: '',
        observation: ''
      }
    
  }
  // id: string = '';
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
    GPSLatitude?:string;
    GPSLongitude?:string;
    nivauBaterie?:string;
    giletid: string =''; 
    public detailPatient:any;


  // public detailPatient: Patient | null = null;

  isConsultationMode = false;
  selectedChildId = '';
  isFormVisible = false;
  isEditMode = false;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.data.getAllPatient().subscribe((res: any) => {
      this.patientList = Object.keys(res).map(key => {
        const patientData = res[key] as Patient;
        
        return {
          id:patientData.id,
          nom: patientData.nom,
          genre: patientData.genre,
          prenom: patientData.prenom,
          email: patientData.email,
          contact1:this.conctact1,
          contact2:this.conctact2,
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
    carnet:patientData.carnet,
          // ... Autres propriétés correspondantes ...
        
        };
      });
      console.log("All Patient =>", this.patientList);
    }, err => {
      alert('Error while fetching patient data');
    });
  }

  switchMode() {
    this.isConsultationMode = !this.isConsultationMode;
    this.resetForm();
  }

  onChildSelected() {
    this.isFormVisible = true;
    this.isEditMode = false;
    this.detailPatient = this.patientList.find(child => child.id === this. selectedChildId) || null;
  }

  editChild() {
    this.isEditMode = true;
  }

  saveChanges() {
    if (this.detailPatient) {
      // Call a service or function to update the patient's data in the database
      // For example: this.data.updatePatient(this.detailPatient);

      this.isEditMode = false;
    }
  }

  submitForm() {
    if (this.detailPatient) {
      // Call a service or function to save the form data
      // For example: this.data.savePatientData(this.detailPatient);

      this.resetForm();
    }
  }

  resetForm() {
    this.detailPatient = null;
    this.isFormVisible = false;
    this.isEditMode = false;
  }

  // addPatient() {
  //   if (this. selectedChildId && this.Diagnostique && this.motif && this.conduite &&
  //     this.etat_clinique && this.date_consultation && this.observation) {
      
  //       const updatedChildData = {
  //         Diagnostique: this.Diagnostique,
  //         motif: this.motif,
  //         communication: this.communication,
  //         conduite: this.conduite,
  //         severite: this.severite,
  //         etat_clinique: this.etat_clinique,
  //         date_consultation: this.date_consultation,
  //         observation: this.observation
  //       };
        
  //           this.Diagnostique = '';
  //           this.motif = '';
  //           this.communication = '';
  //           this.conduite = '';
  //           this.severite = '';
  //           this.etat_clinique = '';
  //           this.date_consultation = '';
  //           this.observation = '';

  //       this.data.addConsultationToCarnet(this. selectedChildId, this.date_consultation, updatedChildData)
  //         .then(() => {
  //           console.log('Consultation data added to carnet successfully');
  //           this.resetForm();
  //         })
  //         .catch((error: any) => {
  //           console.error('Error adding consultation data to carnet:', error);
  //         });
  //   } else {
  //     alert('Fill all input fields and select a child');
  //   }
  // }
  // addpatient true form 

  // addPatient() {
  //   if (this. selectedChildId && this.Diagnostique && this.motif && this.conduite &&
  //     this.etat_clinique && this.date_consultation && this.observation) {
      
  //       const updatedChildData = {
  //         Diagnostique: this.Diagnostique,
  //         motif: this.motif,
  //         communication: this.communication,
  //         conduite: this.conduite,
  //         severite: this.severite,
  //         etat_clinique: this.etat_clinique,
  //         date_consultation: this.date_consultation,
  //         observation: this.observation
  //       };
        
  //           this.Diagnostique = '';
  //           this.motif = '';
  //           this.communication = '';
  //           this.conduite = '';
  //           this.severite = '';
  //           this.etat_clinique = '';
  //           this.date_consultation = '';
  //           this.observation = '';

  //       this.data.addConsultationToCarnet(this. selectedChildId, this.date_consultation, updatedChildData)
  //         .then(() => {
  //           console.log('Consultation data added to carnet successfully');
  //           this.resetForm();
  //         })
  //         .catch((error: any) => {
  //           console.error('Error adding consultation data to carnet:', error);
  //         });
  //   } else {
  //     alert('Fill all input fields and select a child');
  //   }
  // }

  //addpatient
  rechercherPatient() {
    if (this.first_namechild && this.last_namechild) {
      console.log("Searching for:", this.first_namechild, this.last_namechild);
      this.detailPatient = this.patientList.find(patient =>
        patient.nom.toLowerCase() === this.first_namechild.toLowerCase() &&
        patient.last_namechild.toLowerCase() === this.last_namechild.toLowerCase()
      );
      console.log("Found patient:", this.detailPatient);
    } else {
      this.detailPatient = null;
    }
  }

  addPatient() {
    if (
      this.selectedChildId &&
      this.Diagnostique &&
      this.motif &&
      this.conduite &&
      this.etat_clinique &&
      this.date_consultation &&
      this.observation
    ) {
      const consultationData = {
        Diagnostique: this.Diagnostique,
        motif: this.motif,
        communication: this.communication,
        conduite: this.conduite,
        severite: this.severite,
        etat_clinique: this.etat_clinique,
        date_consultation: this.date_consultation,
        observation: this.observation
      };
  
      this.data.addConsultationToCarnet(this.selectedChildId, this.date_consultation, consultationData)

        .then(() => {
          console.log('Consultation data added to carnet successfully');
          this.resetForm();
        })
        .catch((error: any) => {
          console.error('Error adding consultation data to carnet:', error);
        });
    } else {
      alert('Fill all input fields and select a child');
    }
  }
  

  patientetatconsultation(patient:any, date:any){
    const consultation=patient.carnet[date]
    return consultation?.etat_clinique;
    }
  patientconduitconsultation(patient:any, date:any){
    const consultation=patient.carnet[date]
    return consultation?.conduite;
    }
  patientmotifconsultation(patient:any, date:any){
    const consultation=patient.carnet[date]
    return consultation?.motif;
    }
  patientobservationconsultation(patient:any, date:any){
    const consultation=patient.carnet[date]
    return consultation?.observation;
    }
  patientDiagnostiqueconsultation(patient:any, date:any){
    const consultation=patient.carnet[date]
    return consultation?.Diagnostique;
    }

  dateconsultation(date:any){
    return this.patientList.map(child => child.date_consultation);
  }  

  

  // getChildBirthdates(): Date[] {
  //   return this.children.map(child => child.birthdate);
  // }
  
  
  

  // addPatient() {
  //   if (
  //     this.selectedChildId &&
  //     this.Diagnostique &&
  //     this.motif &&
  //     this.conduite &&
  //     this.etat_clinique &&
  //     this.date_consultation &&
  //     this.observation
  //   ) {
  //     const consultationData = {
  //       Diagnostique: this.Diagnostique,
  //       motif: this.motif,
  //       communication: this.communication,
  //       conduite: this.conduite,
  //       severite: this.severite,
  //       etat_clinique: this.etat_clinique,
  //       date_consultation: this.date_consultation,
  //       observation: this.observation
  //     };

  //     this.Diagnostique = '';

  //     this.motif = '';
  //     this.communication = '';
  //     this.conduite = '';
  //     this.severite = '';
  //     this.etat_clinique = '';
  //     this.date_consultation = '';
  //     this.observation = '';
  
  //     this.data
  //       .addConsultationToCarnet(
  //         this.selectedChildId,
  //         this.date_consultation,
  //         consultationData
  //       )
  //       .then(() => {
  //         console.log('Consultation data added to carnet successfully');
  //         this.resetForm();
  //       })
  //       .catch((error: any) => {
  //         console.error('Error adding consultation data to carnet:', error);
  //       });
  //   } else {
  //     alert('Fill all input fields and select a child');
  //   }
  // }
}