import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/assets/model/Utilisateur.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl="https://moodle.infans.fr/login/";

  constructor(private http:HttpClient) { }
  login(username:string, password:string){
    const credentials={
      username:username,
      password:password
    };
    return this.http.post(`${this.baseUrl}/login`,credentials)
  }
}
