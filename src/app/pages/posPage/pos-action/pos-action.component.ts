import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pos-action',
  templateUrl: './pos-action.component.html',
  styleUrls: ['./pos-action.component.scss']
})
export class PosActionComponent {

  constructor(
    private router: Router
  ) {
  }
  loadNewPosPage() {
    this.router.navigate(['new-pos-page']);
  }
}
