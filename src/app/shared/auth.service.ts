import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  giletid: any;
  auth: any;
  loginError: string ='';
  // loginWithUserId: any;
  constructor(
    private fireauth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {}

  login(email: string, password: string): Promise<any> {
    return this.fireauth.signInWithEmailAndPassword(email, password).then(
      (response) => {
        localStorage.setItem('token', 'true');
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/dashboard']);
        console.log(response);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  register(email: string, password: string) {
    return this.fireauth.createUserWithEmailAndPassword(email, password);
  }

  // getUserRole(uid: string , ): Observable<string> {
  //   return new Observable<string>((observer) => {
  //     this.db
  //       .object<string>(`/distance/roles/${uid}`)
  //       .valueChanges()
  //       .subscribe(
  //         (role) => {
  //           console.log('Role retrieved:', role);
  //           observer.next(role='string');
  //         },
  //         (error) => {
  //           console.error(
  //             'Erreur lors de la récupération du rôle de l\'utilisateur:',
  //             error
  //           );
  //         }
  //       );
  //   });
  // }

  // setUserRole(uid: string, role: string |  null): Promise<void> {
  //   if (role === null) {
  //     // Gérer ce cas, par exemple en ne faisant rien ou en affectant un rôle par défaut
  //     role = 'defaultRole'; // Remplacez 'defaultRole' par le rôle par défaut souhaité
  //   }
  //   return this.db.object(`/distance/roles/${uid}`).set(role);
  // }

  // ... Autres méthodes du service ...
  
  loginWithUserId(userId: string): Promise<void> {
    console.log(localStorage.getItem('userId'));
    return new Promise<void>((resolve, reject) => {
      const distanceRef = this.db.object('distance/' + userId);
  
      distanceRef.valueChanges().pipe(take(1)).subscribe((data) => {
        localStorage.setItem('userId', userId);
        console.log(localStorage.getItem('userId'));

        if (data) {
          // L'ID existe, l'utilisateur est authentifié
          console.log('Utilisateur authentifié');
          this.router.navigate(['./acceuil-parent']);
          resolve(); // Résout la promesse lorsque l'authentification réussit
        } else {
          // L'ID n'existe pas, l'utilisateur n'est pas authentifié
          console.log('ID non trouvé');
          // Affichez un message d'erreur à l'utilisateur si nécessaire
          reject('ID non trouvé'); // Rejette la promesse avec un message d'erreur
        }
      });
    });
  }
  

  

}