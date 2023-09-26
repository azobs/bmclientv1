import {Component, OnInit} from '@angular/core';
import {AuthRequestClient} from "../../api/dto/auth-request-client";
import {ApiAuthenticateService} from "../../api/rest/api-authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //authRequest: AuthRequest = {};

  // login: string = '';
  // password: string = '';

  authRequestClient: AuthRequestClient = {};
  errorStatus: string = '';
  errorMessage: string = '';
  errorCause: string = '';
  errorBackendMessage: string = '';

  constructor(
    //private authClientService: AuthClientService
    private apiAuthenticate: ApiAuthenticateService
  ) {
  }

  onLogin() {
    console.log("On a cliquer sur Se connecter \n");
    //this.authClientService.authenticate(this.authRequest);+JSON.stringify(this.authRequestClient)
    this.apiAuthenticate.authenticate(this.authRequestClient)
      .subscribe({
        next: (data) => {
          this.handleData(data);
        },
        error: err => {
          this.handleError(err);
        }
      });
  }

  handleData(data: any): void {
    console.log("\n");
    console.log(JSON.stringify(data));
    /*localStorage.setItem('authResponse',JSON.stringify(data));
    localStorage.setItem('accessToken', data.data.accessToken);*/
    this.apiAuthenticate.setConnectedUser(data.data);
    // Maintenant on fait l'aiguillage pour charger le composant qui soit s'afficher apres le traitement
  }

  handleError(err: any): void {
    console.log("\n");
    console.log(JSON.stringify(err));
    this.errorStatus = err.error.status;
    console.log("\n");
    console.log("errorStatus == "+this.errorStatus);
    this.errorMessage = err.error.message;
    console.log("errorMessage == "+this.errorMessage);
    this.errorCause = err.error.cause;
    console.log("errorCause == "+this.errorCause);
    this.errorBackendMessage = err.error.data.errorAppMessage;
    console.log("errorBackendMessage == "+this.errorBackendMessage);
  }

  ngOnInit(): void {
    // ici on met le code qui doit etre executer lorsque le composant se charge c'est a dire si on a une liste
    //   a charger que le composant doit afficher alors c'est ici quon fait cette recherche en BD et le composant affiche
  }
}
