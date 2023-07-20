import { Component, Input, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Assessment } from 'src/app/shared/models/assessment';

@Component({
  selector: 'app-assessment-info',
  templateUrl: './assessment-info.component.html',
  styleUrls: ['./assessment-info.component.scss']
})
export class AssessmentInfoComponent implements OnInit {

  @Input() assessment:any
  faBuilding = faBuilding

  constructor() { }

  ngOnInit() {
  }

}
