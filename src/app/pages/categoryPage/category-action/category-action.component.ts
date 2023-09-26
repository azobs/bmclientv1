import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-action',
  templateUrl: './category-action.component.html',
  styleUrls: ['./category-action.component.scss']
})
export class CategoryActionComponent {

  constructor(
    private router: Router
  ) {
  }

  loadNewCategoryPage() {
    this.router.navigate(['new-category-page']);
  }
}
