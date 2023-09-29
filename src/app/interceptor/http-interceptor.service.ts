import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthResponseClient} from "../api/dto/auth/auth-response-client";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authResponseClient: AuthResponseClient = {};
    // if(localStorage.getItem('userConnected') ){
    //   console.log("Ici l'intercepteur avec un consumes application/json")
    //   authResponseClient = JSON.parse(localStorage.getItem('userConnected') as string);
    //   const authRequest = req.clone({
    //     headers: new HttpHeaders().set("Content-Type","application/json")
    //       .set("Authorization", "Bearer "+authResponseClient.accessToken)
    //   });
    //   return next.handle(authRequest);
    // }
    //si la cle toConsumes n'est pas dans le localStorage alors on consomme librement un application/json
    if(localStorage.getItem('userConnected') && !localStorage.getItem('toConsumes')){
      console.log("Ici l'intercepteur avec un consumes application/json")
      authResponseClient = JSON.parse(localStorage.getItem('userConnected') as string);
      const authRequest = req.clone({
        headers: new HttpHeaders().set("Content-Type","application/json")
          .set("Authorization", "Bearer "+authResponseClient.accessToken)
      });
      return next.handle(authRequest);
    }
    //Si la cle toConsumes est donc presente dans le localStorage alors il faut plutot consommer un multipart/form-data
    if(localStorage.getItem('userConnected') && localStorage.getItem('toConsumes')){
      //'enctype': 'multipart/form-data'
      console.log("Ici l'intercepteur avec un consumes de multipart/form-data")
      authResponseClient = JSON.parse(localStorage.getItem('userConnected') as string);
      //Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
      //Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
      //----WebKitFormBoundary7MA4YWxkTrZu0gW
      const authRequest = req.clone({
        headers: new HttpHeaders().set("Authorization", "Bearer "+authResponseClient.accessToken)
          .set("Content-Type","multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW")
      });
      localStorage.removeItem('toConsumes');
      return next.handle(authRequest);
    }
    //Si on n'a pas la cle userConnected alors le user n'est pas encore connecte on envoie donc la requete mais avec un
    //token par defaut juste pour permettre la connexion au cas ou les parametres envoyes sont bon
    let options = {
      headers: new HttpHeaders().set("Content-Type","application/json")
        .set("Authorization", "Bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyTG9naW4iLCJpYXQiOjE2OTUxODQyMzksImV4cCI6MTY5NTE5ODYzOX0.PVLRfLJrkKskwC1j-EDQ5u_D5slJaujPQoASmUEiuHg")
    }
    const authRequest = req.clone({
      headers: new HttpHeaders().set("Content-Type","application/json")
        .set("Authorization", "Bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyTG9naW4iLCJpYXQiOjE2OTUxODQyMzksImV4cCI6MTY5NTE5ODYzOX0.PVLRfLJrkKskwC1j-EDQ5u_D5slJaujPQoASmUEiuHg")
    });
    return next.handle(authRequest);
  }
}
