import Livres from './components/Livres';
import Home from './components/Home';
import Connexion from './components/Connexion';
import Dashboard from './components/Dashboard';

export const routes =[
  {path: '/', component: Home},
  {path: '/livres', component: Livres},
  {path: '/connexion', component: Connexion},
  {path: '/dashboard', component: Dashboard},
];