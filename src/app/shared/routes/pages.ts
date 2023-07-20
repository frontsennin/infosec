import { faBell, faFileLines, faGlobe, faHome, faNetworkWired, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const listOfPages = [
  {
    label: 'Home',
    pageTitle: 'Resumo do Seu Ambiente',
    path: '/home',
    icon: faHome,
    isSideBar: true,
    children: []
  },
  {
    label: 'Hub Score',
    pageTitle: '',
    path: '/hub-score',
    icon: faGlobe,
    isSideBar: true,
    children: []
  },
  {
    label: 'Notificações',
    pageTitle: '',
    path: '/notifications',
    icon: faBell,
    isSideBar: true,
    children: []
  },
  {
    label: 'Terceiros',
    pageTitle: '',
    path: '/others-companies',
    icon: faNetworkWired,
    isSideBar: true,
    children: []
  },
  {
    label: 'Avaliações',
    pageTitle: 'Lista de Avaliações',
    path: '/assessment',
    icon: faFileLines,
    isSideBar: true,
    children: [
      '/new-assessment',
      '/assessment-detail',
    ]
  },
  {
    label: 'Avaliações',
    pageTitle: 'Nova Avaliação',
    path: '/new-assessment',
    icon: faFileLines,
    isSideBar: false,
    children: []
  },
  {
    label: 'Avaliações',
    pageTitle: 'Detalhes da Avaliação',
    path: '/assessment-detail',
    icon: faFileLines,
    isSideBar: false,
    children: []
  },
  {
    label: 'Padrões e Frameworks',
    pageTitle: '',
    path: '/frameworks',
    icon: faShieldHalved,
    isSideBar: true,
    children: []
  },
]
