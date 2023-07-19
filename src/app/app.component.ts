import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sideBar } from './shared/utils/side-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title?:string;
  pageIcon:any

  constructor(
    private router: Router
  ) {
    router.events.subscribe(() => {
      const menu = sideBar.find(t => t.path == router.url)

      this.title = menu?.pageTitle
      this.pageIcon = menu?.icon
    })
  }
}
