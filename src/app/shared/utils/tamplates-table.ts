import { Table } from "../models/table";

export const templatesTable:Table = new Table().deserialize(
  {
    header: [
      {label: 'Titulo', value: 'label', classes: ''},
      {label: 'Complexidade', value: 'complexity', classes: ''},
      {label: 'Descrição', value: 'description', classes: ''},
    ],
    body: []
  }
)
