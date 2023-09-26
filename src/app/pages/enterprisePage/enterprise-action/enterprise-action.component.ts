import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-enterprise-action',
  templateUrl: './enterprise-action.component.html',
  styleUrls: ['./enterprise-action.component.scss']
})
export class EnterpriseActionComponent {

  constructor(
    private router: Router
  ) {
  }
  loadNewEnterprisePage() {
    this.router.navigate(['new-enterprise-page']);
  }
}
