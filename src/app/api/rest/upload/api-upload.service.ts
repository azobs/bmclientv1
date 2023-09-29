import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiUploadService {

  baseURL = 'http://localhost:8081';
  constructor(
    private http:HttpClient
  ) { }

  pushFileToStorage(file: File){
    console.log("Preparation des donnees de la requete Http");
    const data: FormData = new FormData();
    data.append('multipartFile', file);
    localStorage.setItem('toConsumes','multipart/form-data');
    console.log("Lancement de la requete et attente des resultats");
    return this.http.post(this.baseURL+'/uploadimage', data);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('multipartFile', file);
    localStorage.setItem('toConsumes','multipart/form-data');
    const req = new HttpRequest('POST', this.baseURL+'/uploadimage', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }













  uploadPersonImage(pictureFile: string | ArrayBuffer){
    // const data: FormData = new FormData();
    // data.append('file', file);
    console.log("Le service demarre aussi");

    localStorage.setItem('toConsumes','multipart/form-data');
    console.log("fileName ="+pictureFile+"\n");

    console.log("Et lance la requete au niveau du backend");
    return this.http.post(this.baseURL+'/uploadimage', {'multipartFile': pictureFile});
  }




  uploadFileImage(pictureFile: File){
    // const data: FormData = new FormData();
    // data.append('file', file);
    localStorage.setItem('toConsumes','multipart/form-data');
    console.log("fileName ="+pictureFile+"\n");
    const data: FormData = new FormData();
    data.append('multipartFile', pictureFile);
    return this.http.post(this.baseURL+'/uploadimage', data);
  }

  uploadPersonImageBlob(pictureFile: Blob){
    // const data: FormData = new FormData();
    // data.append('file', file);
    console.log("Le service demarre aussi");

    localStorage.setItem('toConsumes','multipart/form-data');
    console.log("fileName ="+pictureFile+"\n");
    const data: FormData = new FormData();
    data.append('multipartFile', pictureFile);
    console.log("Et lance la requete au niveau du backend");
    return this.http.post(this.baseURL+'/uploadimage', data);
  }



}
