import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listOfPages } from '../../routes/pages';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menuList = listOfPages
  currentRoute!:string

  constructor(
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.currentRoute = router.url
    })
  }

  ngOnInit() {
  }

  goToPath(path:string) {
    this.router.navigateByUrl(path)
  }

}
