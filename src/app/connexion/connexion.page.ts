import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from 'src/Authentification/service/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage  {

  constructor(private authService:AuthServiceService) { }

 
  login(username : string, password:string){
    this.authService.login(username,password).subscribe(
      (Response)=>{
        console.log('Connecter avec succes:',Response);
      
      },
      (error)=>
      console.error('Erreur de connexion:',error)

    )

  }
  testFree(){
    
  }
  forgotPassword(){

  }

}
