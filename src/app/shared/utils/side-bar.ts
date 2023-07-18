import { faBell, faFileLines, faGlobe, faHome, faNetworkWired, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const sideBar = [
  {
    label: 'Home',
    path: '/home',
    icon: faHome
  },
  {
    label: 'Hub Score',
    path: '/hub-score',
    icon: faGlobe
  },
  {
    label: 'Notificações',
    path: '/notifications',
    icon: faBell
  },
  {
    label: 'Terceiros',
    path: '/others-companies',
    icon: faNetworkWired
  },
  {
    label: 'Avaliações',
    path: '/assessment',
    icon: faFileLines
  },
  {
    label: 'Padrões e Frameworks',
    path: '/frameworks',
    icon: faShieldHalved
  },
]
