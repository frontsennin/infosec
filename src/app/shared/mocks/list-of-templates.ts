import { Complexity } from "../enums/complexity.enum";

export const listOfTemplates = [
  {
    label: 'Template 1',
    value: {
      selected: false,
      complexity: Complexity.EASY,
      description: 'teste de um template bem legal'
    }
  },
  {
    label: 'Template 2',
    value: {
      selected: false,
      complexity: Complexity.HARD,
      description: 'teste de um template bem legal, mas dificil'
    }
  },
  {
    label: 'Template 3',
    value: {
      selected: false,
      complexity: Complexity.NORMAL,
      description: 'teste de um template bem legal, com dificuldade moderada'
    }
  },
]
