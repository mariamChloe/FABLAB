import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  getPatientById: any;

  constructor( private db: AngularFireDatabase) { }

  // Ajouter un patient à Realtime Database
  addPatient(patient: Patient) {
    return this.db.list('/distance').push(patient); // Utilisez AngularFireDatabase
  }

  // Obtenir tous les patients depuis Realtime Database
  getAllPatient() {
    return this.db.list('/distance').valueChanges(); // Utilisez AngularFireDatabase
  }

  // Mettre à jour un patient dans Realtime Database
  updatePatient(patient: Patient) {
    return this.db.object(`/distance/${patient.id}`).update(patient); // Utilisez AngularFireDatabase
  }
  
  updateChildData(childId: string, data: any) {
    return this.db.object('/distance/' + childId).update(data);
  }

  addPatientToRealtimeDatabase(patientId: string, patientData: Patient) {
    return this.db.object(`/distance/${patientId}`).set(patientData);
  }
  addCarnetNode(giletid: string, carnetNode: any) {
    return this.db.object(`/distance/${giletid}/carnet`).set(carnetNode);
  }

  addConsultationToCarnet(giletid: string, dateConsultation: string, consultationData: any) {
    const consultationNodePath = `/distance/${giletid}/carnet/${dateConsultation}`;
    return this.db.object(consultationNodePath).set(consultationData);
  }

  getConsultationDataByDate(giletid: string, dateConsultation: string) {
    const consultationNodePath = `/distance/${giletid}/carnet/${dateConsultation}`;
    return this.db.object(consultationNodePath).valueChanges();
  }

  

  async setRole(uid: string, role: string): Promise<void> {
    try {
      await this.db.object(`/distance/roles/${uid}`).set({ role });
      // Le rôle a été enregistré avec succès dans la base de données
    } catch (error) {
      // Une erreur s'est produite lors de l'enregistrement du rôle dans la base de données
      // Vous pouvez gérer cette erreur ici
      console.error('Error setting role:', error);
    }
  }

  async getRoleByUid(uid: string): Promise<string> {
    try {
      const roleSnapshot = await this.db.object(`/distance/roles/${uid}`).query.once('value');
      const role = roleSnapshot.val();
      return role ? role.role : ''; // Si le rôle existe, retournez-le, sinon une chaîne vide
    } catch (error) {
      console.log('Error getting role:', error);
      return ''; // En cas d'erreur, retournez une chaîne vide ou une valeur par défaut
    }
  } 

  // ... Autres méthodes de DataService ...



    // Ajoutez une méthode pour obtenir les données d'un enfant en fonction du nom et du prénom

    async getChildData(prenom: string, nom: string): Promise<Patient | undefined> {
      const childrenSnapshot = await this.db.list<Patient>('/distance', ref =>
        ref.orderByChild('first_namechild').equalTo(prenom)
      ).snapshotChanges().toPromise();
    
      if (!childrenSnapshot || childrenSnapshot.length === 0) {
        return undefined; // Aucun enfant trouvé, renvoyer undefined
      }
    
      const children: Patient[] = childrenSnapshot.map((childSnapshot) => {
        const data = childSnapshot.payload.val() as Patient;
        return {
          ...data, // Ne pas inclure la propriété 'id' ici
          id: childSnapshot.key!
        };
      });
    
      const child = children.find(c => c.last_namechild === nom);
      return child;
    }

    getDataById(userId: string) {
      return this.db.object(`/distance/${userId}`).valueChanges();
    }
  
    

  // addConsultationToCarnet(
  //   patientId: string,
  //   dateConsultation: string,
  //   consultationData: any
  // ) {
  //   return this.db
  //     .object(`/${patientId}/carnet/${dateConsultation}`)
  //     .set(consultationData);
  // }

}