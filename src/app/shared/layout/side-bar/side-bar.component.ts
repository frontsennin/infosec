import { Component, OnInit } from '@angular/core';
import { sideBar } from '../../utils/side-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menuList = sideBar
  currentRoute?:string

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
