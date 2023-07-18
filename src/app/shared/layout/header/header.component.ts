import { Component, OnInit } from '@angular/core';
import { faGear, faNetworkWired, faShieldHalved, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faUser = faUser
  faGear = faGear
  faShield = faShieldHalved
  faNetwork = faNetworkWired

  constructor() { }

  ngOnInit() {
  }

}
