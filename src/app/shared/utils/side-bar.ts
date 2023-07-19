import { faBell, faFileLines, faGlobe, faHome, faNetworkWired, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const sideBar = [
  {
    label: 'Home',
    pageTitle: 'Resumo do Seu Ambiente',
    path: '/home',
    icon: faHome
  },
  {
    label: 'Hub Score',
    pageTitle: '',
    path: '/hub-score',
    icon: faGlobe
  },
  {
    label: 'Notificações',
    pageTitle: '',
    path: '/notifications',
    icon: faBell
  },
  {
    label: 'Terceiros',
    pageTitle: '',
    path: '/others-companies',
    icon: faNetworkWired
  },
  {
    label: 'Avaliações',
    pageTitle: 'Nova Avaliação',
    path: '/assessment',
    icon: faFileLines
  },
  {
    label: 'Padrões e Frameworks',
    pageTitle: '',
    path: '/frameworks',
    icon: faShieldHalved
  },
]
