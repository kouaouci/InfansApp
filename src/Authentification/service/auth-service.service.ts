import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/assets/model/Utilisateur.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl="https://moodle.infans.fr/login/";

  constructor() { }
  public seConnecter(_userInfo:Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecter(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
