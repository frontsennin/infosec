import { Component, OnInit } from '@angular/core';
import { Complexity } from '../../enums/complexity.enum';
import { listOfTemplates } from '../../mocks/list-of-templates';
import { listOfPeople } from '../../mocks/list-of-people';
import { Router } from '@angular/router';
import { Assessment } from '../../models/assessment';
import { format } from 'date-fns';
import { UserType } from '../../enums/user-type.enum';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss'],
})
export class AssessmentFormComponent implements OnInit {
  listOfComplexity: any[] = [];
  templates = listOfTemplates;
  peoples = listOfPeople;

  assessmentForm: Assessment = new Assessment();
  constructor(private router: Router) {}

  ngOnInit() {
    this.listOfComplexity = [
      Complexity.EASY,
      Complexity.HARD,
      Complexity.NORMAL,
    ];
  }

  backToLastPage() {
    this.router.navigateByUrl('assessment');
  }
  save() {
    this.assessmentForm.templates = this.templates.filter(
      (item) => item.value.selected
    );
    this.assessmentForm.answers = this.peoples.filter((item) => item.selected);
    this.assessmentForm.createdDate = format(new Date(), 'dd/MM/yyyy');

    const existentList = JSON.parse(localStorage['assessmentList']);

    this.assessmentForm.id = existentList.length + 1;
    this.assessmentForm.createdBy = this.peoples.filter(
      (p) => p.role == UserType.ADMIN
    )[0].name;

    existentList.push(this.assessmentForm);

    localStorage.setItem('assessmentList', JSON.stringify(existentList));
    this.router.navigateByUrl('assessment');
  }
}
