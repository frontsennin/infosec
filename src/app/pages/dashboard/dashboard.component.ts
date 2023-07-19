import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/shared/enums/card-type.enum';
import { DashboardCardPosition } from 'src/app/shared/enums/dashboard-card-position.enum';
import { dashboardMock } from 'src/app/shared/mocks/dashboard-mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listOfCards = dashboardMock
  dashboardCardPosition = DashboardCardPosition
  cardType = CardType

  constructor() { }

  ngOnInit() {
  }

}
