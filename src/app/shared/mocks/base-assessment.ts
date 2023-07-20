import { UserType } from './../enums/user-type.enum';
import { Table } from "../models/table";
import {format } from 'date-fns'
import addDays from 'date-fns/addDays'
import { Complexity } from "../enums/complexity.enum";
import { listOfTemplates } from "./list-of-templates";
import { listOfPeople } from "./list-of-people";


export const assessmentList:any[] = [
  {
    id: 1,
    templates: [listOfTemplates[1]],
    answers: [listOfPeople.filter(p => p.role == UserType.NORMAL)],
    title: 'Teste 1',
    createdBy: 'Nicolas Mazia',
    complexity: Complexity.HARD,
    createdDate: format(new Date(), "dd/MM/yyyy"),
    limitDate: format(addDays(new Date(), 2), "dd/MM/yyyy")
  },
  {
    id: 2,
    templates: [listOfTemplates[0], listOfTemplates[2]],
    answers: [listOfPeople.filter(p => p.role == UserType.NORMAL)],
    title: 'Teste 2',
    createdBy: 'Nicolas Mazia',
    complexity: Complexity.HARD,
    createdDate: format(new Date(), "dd/MM/yyyy"),
    limitDate: format(addDays(new Date(), 3), "dd/MM/yyyy")
  }
]

export const assessmentTable:Table = new Table().deserialize(
  {
    header: [
      {label: 'Avaliação', value: 'title', classes: ''},
      {label: 'Criado Por', value: 'createdBy', classes: ''},
      {label: 'Complexidade', value: 'complexity', classes: ' center'},
      {label: 'Data de Criação', value: 'createdDate', classes: ' center'},
      {label: 'Data Limite', value: 'limitDate', classes: ' center'},
    ],
    body: []
  }
)
