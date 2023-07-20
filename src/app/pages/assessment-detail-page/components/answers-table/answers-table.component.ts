import { Component, Input, OnInit } from '@angular/core';
import { answersTable } from 'src/app/shared/utils/answers-table';

@Component({
  selector: 'app-answers-table',
  templateUrl: './answers-table.component.html',
  styleUrls: ['./answers-table.component.scss']
})
export class AnswersTableComponent implements OnInit {

  @Input() tableBody:any
  answersTable = answersTable

  constructor() { }

  ngOnInit() {
    this.answersTable.body = this.tableBody
  }

}
