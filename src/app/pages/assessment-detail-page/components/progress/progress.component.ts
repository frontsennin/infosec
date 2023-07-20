import { Component, OnInit } from '@angular/core';
import { faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { listOfStatus } from 'src/app/shared/mocks/status-mock';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  listOfStatus = listOfStatus

  faClock = faClock
  faCheck = faCheck

  constructor() { }

  ngOnInit() {
  }

}
