import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  formLogin: FormGroup;
  message: string;
  auth: AuthService;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {

    this.formLogin = new FormGroup ({
      name: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required)
    })

    this.auth = this.authService;
  }

  setMessage() {
    if(!this.auth.isloggedIn) {
      this.message = 'Identifiant ou mot de passe incorrect';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.formLogin.value.name, this.formLogin.value.password)
      .subscribe((isloggedIn: boolean) => {
        this.setMessage();
        if(isloggedIn) {
          this.router.navigate(['/pokemons']);
        } else {
          this.formLogin.value.password = '';
          this.router.navigate(['/login']);
        }
      })
  }

  logout() {
    this.auth.logout();
    this.message = 'Vous etes déconnecté';
  }
}
