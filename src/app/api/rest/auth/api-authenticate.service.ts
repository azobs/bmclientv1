import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequestClient} from "../dto/auth-request-client";
import {AuthResponse} from "../../../../api/models/auth-response";

@Injectable({
  providedIn: 'root'
})
export class ApiAuthenticateService {

  baseURL = 'http://localhost:8081';
  constructor(
    private http: HttpClient
  ) { }

  authenticate(authRequest: AuthRequestClient) {
    //{headers: new HttpHeaders().set('Authorization', 'my-auth-token')}
    return this.http.post<any>(this.baseURL + '/auth/bm/v1/authenticate',JSON.stringify(authRequest));
  }

  setConnectedUser(authResponse: AuthResponse): void {
    localStorage.setItem('authResponse',JSON.stringify(authResponse));
    localStorage.setItem('accessToken', <string>authResponse.accessToken);
  }

}
