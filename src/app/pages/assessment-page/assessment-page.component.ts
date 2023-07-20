import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { assessmentList, assessmentTable } from 'src/app/shared/mocks/base-assessment';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.scss']
})
export class AssessmentPageComponent implements OnInit {

  tableList = assessmentTable

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage['assessmentList']) {
      this.tableList.body = JSON.parse(localStorage['assessmentList'])
    } else {
      this.tableList.body = assessmentList
      localStorage.setItem('assessmentList', JSON.stringify(assessmentList))
    }
  }

  goToNewAssessment() {
    this.router.navigateByUrl('new-assessment')
  }

  goToPage(evt:any) {
    this.router.navigateByUrl(`assessment-detail/${evt.id}`)
  }

}
