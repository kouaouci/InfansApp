import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/Authentification/service/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage  {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false],
    });
  }
  login() {
    if (this.loginForm.valid) {
      // Vous pouvez accéder aux valeurs du formulaire avec this.loginForm.value
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const rememberMe = this.loginForm.value.rememberMe;

      // Ajoutez ici la logique de connexion en utilisant les valeurs du formulaire
      console.log('E-mail:', email);
      console.log('Mot de passe:', password);
      console.log('Se souvenir de moi:', rememberMe);

      // Réinitialiser le formulaire après la connexion
      this.loginForm.reset();
    }
  }


}
