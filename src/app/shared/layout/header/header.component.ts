import { DarkModeService } from 'angular-dark-mode';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faGear, faMoon, faNetworkWired, faShieldHalved, faSun, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() emitDarkMode = new EventEmitter<any>()

  faUser = faUser
  faGear = faGear
  faSun = faSun
  faMoon = faMoon
  faShield = faShieldHalved
  faNetwork = faNetworkWired

  isLight = false

  constructor(
    private darkModeService: DarkModeService
  ) { }

  ngOnInit() {
  }

  onToggle(): void {
    this.isLight = !this.isLight;
    this.darkModeService.toggle();
    this.emitDarkMode.emit(this.isLight);
  }

}
