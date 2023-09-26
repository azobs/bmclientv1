import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-action',
  templateUrl: './users-action.component.html',
  styleUrls: ['./users-action.component.scss']
})
export class UsersActionComponent {

  constructor(
    private router:Router
  ) {
  }

  loadNewUserPage() {
    this.router.navigate(['new-user-page'])
  }
}
