import { Component, Input, OnInit } from '@angular/core';
import { templatesTable } from 'src/app/shared/utils/tamplates-table';

@Component({
  selector: 'app-templates-table',
  templateUrl: './templates-table.component.html',
  styleUrls: ['./templates-table.component.scss']
})
export class TemplatesTableComponent implements OnInit {

  @Input() tableBody:any
  templatesTable = templatesTable

  constructor() { }

  ngOnInit() {
    for(let body of this.tableBody) {
      body.complexity = body.value.complexity
      body.description = body.value.description
    }
    this.templatesTable.body = this.tableBody
  }

}
