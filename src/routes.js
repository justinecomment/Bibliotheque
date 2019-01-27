import Book from './components/Book';
import AddForm from './components/AddForm';
import Home from './components/Home';
import Connexion from './components/Connexion';
import Dashboard from './components/Dashboard';

export const routes =[
  {path: '/', component: Home},
  {path: '/books', component: Book},
  {path: '/add', component: AddForm},
  {path: '/connexion', component: Connexion},
  {path: '/dashboard', component: Dashboard},
];