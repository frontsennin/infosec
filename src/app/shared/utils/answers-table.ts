import { Table } from "../models/table";

export const answersTable:Table = new Table().deserialize(
  {
    header: [
      {label: 'Nome', value: 'name', classes: ''},
      {label: 'Empresa', value: 'company', classes: ''},
      {label: 'Tipo de usuário', value: 'role', classes: ''},
    ],
    body: []
  }
)
