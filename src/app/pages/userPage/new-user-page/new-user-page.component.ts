import {Component, OnInit} from '@angular/core';
import {UserbmDtoClient} from "../../../api/dto/userbm/userbm-dto-client";
import {AddressDtoClient} from "../../../api/dto/general/address-dto-client";
import {Router} from "@angular/router";
import {ApiUploadService} from "../../../api/rest/upload/api-upload.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit{

  userbmToSave: UserbmDtoClient = {};
  userbmAddressToSave: AddressDtoClient = {};
  userPictureUrl: string | ArrayBuffer = 'favicon.ico';
  pictureFile: File | null = null;
  base64: string | ArrayBuffer = 'favicon.ico';

  constructor(
    private router:Router,
    private apiUpload: ApiUploadService
  ) {
  }



  ngOnInit(): void {
  }

  launchSaveUserbm() {
    console.log("On a cliquer sur Enregistrer un nouveau utilisateur \n");
    console.log(this.userbmToSave);
    console.log("\n");
    console.log(this.userbmAddressToSave);
    this.router.navigate(['users']);
  }


  // onUserChangePictureFile(files: FileList | null): void {
  //   if(files){
  //     console.log("Choix de l'image a uploader effectue");
  //     this.pictureFile = files.item(0);
  //     if(this.pictureFile){
  //       const file: File = this.pictureFile;
  //       console.log("Lancement du service d'upload");
  //       this.apiUpload.pushFileToStorage(file).subscribe({
  //         next: data => {
  //           console.log("data = "+JSON.stringify(data));
  //         },
  //         error: err => {
  //           console.log("error = "+JSON.stringify(err));
  //         }
  //       });
  //     }
  //   }
  // }

  onUserChangePictureFile(files: FileList | null): void {
    if(files){
      console.log("Choix de l'image a uploader effectue");
      this.pictureFile = files.item(0);
      if(this.pictureFile){
        const file: File = this.pictureFile;
        console.log("Lancement du service d'upload");
        this.apiUpload.upload(file).subscribe(
          (event: any) => {
            if (event instanceof HttpResponse) {
              console.log("\nretour du upload "+event.body.message);
              //this.message = event.body.message;
              //this.fileInfos = this.fileuploadingService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            if (err.error && err.error.message) {
              console.log("\nretour du upload "+err.error.message);
            } else {
              console.log("\n Could not upload the file! ");
            }
          });
      }
    }
    else{
      console.log("nothing");
    }
  }

  // onUserChangePictureFile(files: FileList | null): void {
  //   if(files){
  //     this.pictureFile = files.item(0);
  //     if(this.pictureFile){
  //       const fileReader = new FileReader();
  //       fileReader.readAsDataURL(this.pictureFile);
  //       fileReader.onload = (event) => {
  //         if(fileReader.result){
  //           console.log("\nNom du pictureFile = "+this.pictureFile?.name);
  //           console.log("\nType du pictureFile = "+this.pictureFile?.type);
  //           this.userPictureUrl = fileReader.result;
  //           this.uploadPicture(this.userPictureUrl);
  //           // console.log("\nDans onUserPictureFile et avant le lancement du upload on a l'image en base64 = ");
  //           // //////////////////////////////////
  //           // const toRemove = 'data:image/bmp;base64,';
  //           // this.base64 = this.userPictureUrl.slice(toRemove.length);
  //           // console.log("\nQuand on retire le base 64 il reste celle quon va transformer en Blob ");
  //           // if (typeof this.base64 === "string") {
  //           //   const byteArray = new Uint8Array(
  //           //     atob(this.base64).split('').map((char) => char.charCodeAt(0))
  //           //   );
  //           //   const file1 = new Blob([byteArray], {type:'image/png'});
  //           //   console.log("\nOn transforme donc tout en Blob et on lance le upload"+file1);
  //           //   this.uploadPicture(file1);
  //           //   const fileName = this.pictureFile?.name;
  //           //   // if (fileName != null) {
  //           //   //   const filetoUpload = new File([byteArray], fileName, {type: 'image/png'});
  //           //   //   console.log("\nLe fileToUpload = "+filetoUpload.name);
  //           //   //   this.uploadPicture(filetoUpload);
  //           //   // }
  //           // }
  //           ///////////////////////////////////
  //           //this.uploadPicture(this.pictureFile);
  //         }
  //       };
  //     }
  //   }
  // }

  uploadPicture(file: string | ArrayBuffer ){
    // let formParams = new FormData();
    // formParams.append('fileName', file);
    console.log("le upload se lance donc");
    if(file){
      console.log("Et il appel le service");
      this.apiUpload.uploadPersonImage(file)
        .subscribe({
          next: data => {
            console.log("data = "+JSON.stringify(data));
          },
          error: err => {
            console.log("error = "+JSON.stringify(err));
          }
        })
    }
    else{
      console.log("file is not present");
    }
  }


  uploadFile(file: File ){
    // let formParams = new FormData();
    // formParams.append('fileName', file);
    if(file){
      this.apiUpload.uploadPersonImageBlob(file)
        .subscribe({
          next: data => {
            console.log("data = "+JSON.stringify(data));
          },
          error: err => {
            console.log("error = "+JSON.stringify(err));
          }
        })
    }
  }

  uploadPictureBlob(file: Blob ){
    // let formParams = new FormData();
    // formParams.append('fileName', file);
    console.log("le upload se lance donc");
    if(file){
      console.log("Et il appel le service");
      this.apiUpload.uploadPersonImageBlob(file)
        .subscribe({
          next: data => {
            console.log("data = "+JSON.stringify(data));
          },
          error: err => {
            console.log("error = "+JSON.stringify(err));
          }
        })
    }
    else{
      console.log("file is not present");
    }
  }

}
