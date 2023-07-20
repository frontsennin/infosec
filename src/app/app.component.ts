import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { listOfPages } from './shared/routes/pages';

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
      let menu
      if(router.url.includes('detail')) {
        menu = listOfPages.find(t => router.url.includes(t.path) && t.path.includes('detail'))
      } else {
        menu = listOfPages.find(t => router.url == t.path)
      }

      this.title = menu?.pageTitle
      this.pageIcon = menu?.icon
    })
  }
}
