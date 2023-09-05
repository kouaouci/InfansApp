import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}
  
  redirectToLogin(){
    // window.location.href="https://moodle.infans.fr/login/index.php";
     this.router.navigate(['/connexion']);
        console.log("hello");

  }

}
