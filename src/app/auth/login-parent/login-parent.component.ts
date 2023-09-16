import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login-parent',
  templateUrl: './login-parent.component.html',
  styleUrls: ['./login-parent.component.css']
})
export class LoginParentComponent {
  giletid: string = '';
  loginError: string = '';
 
  constructor(private auth :  AuthService,  private router: Router) { }

  loginWithUserId() {
    if (this.giletid) {
      // Utilisez le service d'authentification pour vérifier l'ID de l'enfant
      this.auth.loginWithUserId(this.giletid)
        .then(() => {
          // Redirigez l'utilisateur vers la page d'accueil parent si l'authentification réussit
          this.router.navigate(['/acceuil-parent']);
        })
        .catch((error: any) => {
          // Gérez l'erreur ici et affichez un message d'erreur à l'utilisateur
          this.loginError = 'ID de l\'enfant non trouvé ou erreur d\'authentification.';
        });
    } else {
      this.loginError = 'Veuillez saisir l\'ID de l\'enfant.';
    }
  }

}