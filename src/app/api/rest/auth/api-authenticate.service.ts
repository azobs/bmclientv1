import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResponseClient} from "../../dto/auth/auth-response-client";
import {AuthRequestClient} from "../../dto/auth/auth-request-client";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiAuthenticateService {

  baseURL = 'http://localhost:8081';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  authenticate(authRequest: AuthRequestClient) {
    //{headers: new HttpHeaders().set('Authorization', 'my-auth-token')}
    return this.http.post<any>(this.baseURL + '/auth/bm/v1/authenticate',JSON.stringify(authRequest));
  }

  setConnectedUser(authResponse: AuthResponseClient): void {
    localStorage.setItem('authResponse',JSON.stringify(authResponse));
    localStorage.setItem('userConnected',JSON.stringify(authResponse));
    localStorage.setItem('accessToken', <string>authResponse.accessToken);
  }

  //Methode appele par le Guard pour n'afficher une page que un user est bel et bien connecte
  isUserLoggedAndAccessTokenValid(){
    if(localStorage.getItem('userConnected')){
      //On va verifier si le token quil contient est encore valide
      return true;
    }
    localStorage.setItem('sessionExpired', 'true');
    this.router.navigate(['login']);
    return false;
  }

}
