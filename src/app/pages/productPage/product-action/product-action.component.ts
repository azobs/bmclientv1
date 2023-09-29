import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-action',
  templateUrl: './product-action.component.html',
  styleUrls: ['./product-action.component.scss']
})
export class ProductActionComponent {

  constructor(
    private router: Router
  ) {
  }


  loadNewProductPage() {
    this.router.navigate(['new-product-page']);
  }
}
