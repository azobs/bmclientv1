import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-devise-action',
  templateUrl: './devise-action.component.html',
  styleUrls: ['./devise-action.component.scss']
})
export class DeviseActionComponent {

  constructor(
    private router: Router
  ) {
  }
  loadNewDevisePage() {
    this.router.navigate(['new-devise-page']);
  }
}
