import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Assessment } from 'src/app/shared/models/assessment';
import { configAssessment } from './assessment-config';

@Component({
  selector: 'app-assessment-detail-page',
  templateUrl: './assessment-detail-page.component.html',
  styleUrls: ['./assessment-detail-page.component.scss']
})
export class AssessmentDetailPageComponent implements OnInit {

  assessment: any
  listOfTopics:any[] = configAssessment
  selectedId = 1

  constructor(
    private route: ActivatedRoute
  ) {
    route.params.subscribe(param => {
      const existenList:Assessment[] = JSON.parse(localStorage['assessmentList'])

      this.assessment = existenList.find(a => a.id == param['id'])
    })
  }

  ngOnInit() {
    console.log(this.assessment)
    this.listOfTopics[0].selected = true
  }

  changeSelectedId(selectedTopic:any) {
    this.selectedId =selectedTopic.id
    for(let topic of this.listOfTopics) {
      if(topic.id != selectedTopic.id) {
        topic.selected = false
      } else {
        topic.selected = true
      }
    }
  }

}
