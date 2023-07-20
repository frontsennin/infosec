import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from '../../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableConfig!:Table
  @Output() bodyEmitter = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  emitValue(body:any) {
    this.bodyEmitter.emit(body)
  }

}
