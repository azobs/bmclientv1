import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  isUserConnected: boolean = false;
  username: string = '';
  urlImg: string = 'favicon.ico';

}
