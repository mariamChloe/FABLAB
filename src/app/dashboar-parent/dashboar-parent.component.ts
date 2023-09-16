import { Component,AfterViewInit, ViewChild,ElementRef } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

declare const mapboxgl: any;
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibXRyYW9yZSIsImEiOiJjbGxnc2k3Ym8wMzY0M2RxdXdoOWVpZzE5In0.doe1M3qP3G58qUD5nti0Cg';



@Component({
  selector: 'app-dashboar-parent',
  templateUrl: './dashboar-parent.component.html',
  styleUrls: ['./dashboar-parent.component.css']
})
export class DashboarParentComponent implements AfterViewInit {
 
  userData: any;
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
    role:'',
    password:'',
    
     carnet: {
      Diagnostique: '',
      motif: '',
      conduite: '',
      etat_clinique: '',
       date_consultation: '',
      observation: '',
    //   // ... autres propriétés du carnet de santé ...
   }
  //   consultationsData: {
  //     Diagnostique: '',
  //     motif: '',
  //     conduite: '',
  //     etat_clinique: '',
  //     date_consultation:'',
  //     observation:'',
  // }  
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
  childDetails: any;
  
 
 
  constructor(private router: Router ,private auth : AuthService, private data : DataService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
  
    if (userId) {
      // Utiliser l'ID pour récupérer les données associées
      this.data.getDataById(userId).subscribe((data: any) => {
        this.userData = data;
      });
    } else {
      // Traitez le cas où 'userId' n'est pas présent dans localStorage
      alert("L'ID de l'utilisateur n'est pas disponible.");
    }
  
    // Vérifiez si un ID de gilet est fourni
    this.route.paramMap.subscribe(params => {
      this.giletid = params.get('giletid') || '';
      if (this.giletid) {
        this.getChildDetails(); // Appelé uniquement si l'ID de gilet est présent
      } else {
        this.getAllPatients();
      }
    });
  }

  //register() {
  //  this.auth.logout();
  //}

  getChildDetails() {
    this.data.getPatientById(this.giletid).subscribe(
        (res: any) => {
            this.childDetails = res as Patient;
            console.log("Child Details =>", this.childDetails);
        },
        (err: any) => {  // Ajoutez le type 'err: any' ici
            alert("Erreur lors de la récupération des détails de l'enfant");
        }
    );
}




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
    carnet:patientData.carnet,
    // consultationsData:patientData.consultationsData,
    //carnet: patientData.carnet,
    role: patientData.role,
    password: patientData.password,
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
  updatePatient() {

  }

  getDetailPatient(patient: Patient){
    this.detailPatient = null
    console.log("patient detail",patient);
    this.detailPatient = patient
  }

  logout(){
    this.auth.logout()
  }

  @ViewChild('mapContainer',) mapContainer!: ElementRef;

  ngAfterViewInit(): void {
    if (this.mapContainer) {
    this.initializeMap();
    }
}



initializeMap() {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  const map = new mapboxgl.Map({
    container: this.mapContainer.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v12',

    center: [-4.0187478065,5.3389563560],
    zoom: 12 

  });
  // Create a marker and add it to the map.
 // Utilisez .setLngLat() au lieu de .setLatLon()
const marker1 = new mapboxgl.Marker()
.setLngLat([-4.0187478065,5.3389563560])
.addTo(map);

}



}


