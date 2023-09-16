import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user: any;

 
  constructor(private auth :  AuthService) { }
  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user') || '{}')
    console.log(this.user);
  }

  logout(){
    this.auth.logout()
  }

  // hasRole(role: string): void {
  //   this.auth.getUserRole(this.user.uid).subscribe((userRole) => {
  //     if (userRole === role) {
  //       // L'utilisateur a le rôle spécifié
  //     } else {
  //       // L'utilisateur n'a pas le rôle spécifié
  //     }
  //   });
  // }
}