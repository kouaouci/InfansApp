import { Injectable } from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from "rxjs";
import { AuthServiceService } from "../service/auth-service.service";

@Injectable()
export class LoginInterceptor implements HttpInterceptor{
    constructor(private authService: AuthServiceService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req);
        // J'affiche l'url avec les params
         // Je passe la requête à la suite des interceptors cachés d'angular
       // Et je retourne ce résultat pour que la requête ait bien lieu

      
    }

}