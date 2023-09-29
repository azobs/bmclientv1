import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {ApiAuthenticateService} from "../../api/rest/auth/api-authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class ApplicationGuardService implements CanActivate{

  constructor(
    private authService: ApiAuthenticateService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isUserLoggedAndAccessTokenValid();
  }
}
