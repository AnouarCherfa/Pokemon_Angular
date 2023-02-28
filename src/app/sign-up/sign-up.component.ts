import { Component, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  
})
export class SignUpComponent {
  form: FormGroup;
  
  message: string;
  auth: AuthService;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup ({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', Validators.required),
      confirmPassword: new FormControl ('', Validators.required) })

    this.auth = this.authService;
  }

  register(){
    // Check if Password and ConfirmPassword are equal

    console.log(this.form.value)

    if (this.form.valid) {
      this.auth.register(this.form.value.email, this.form.value.password)
      .subscribe((isRegister: boolean) => {
        if(isRegister) {
          this.router.navigate(['/login']);
        } else {
          this.form.value.password = '';
          this.router.navigate(['/inscription']);
        }
      })
    }else{

      this.message = 'Mot de passe incorrect';

    } 

   
  }



}
