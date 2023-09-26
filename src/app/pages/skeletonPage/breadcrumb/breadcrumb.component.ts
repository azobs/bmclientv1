import { Component } from '@angular/core';
import {Passage} from "./passage";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  pathFollow: Array<Passage> = [
    {
      name: 'Home',
      isActive: true
    }
  ];
}
