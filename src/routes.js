import Books from './components/Books';
import Book from './components/Add/Book';
import Author from './components/Add/Author';
import Collection from './components/Add/Collection';
import Friend from './components/Add/Friend';
import Home from './components/Home';
import Connexion from './components/Connexion';
import Dashboard from './components/Dashboard';

export const routes =[
  {path: '/', component: Home},
  {path: '/books', component: Books},
  {path: '/book/add', component: Book},
  {path: '/author/add', component: Author},
  {path: '/collection/add', component: Collection},
  {path: '/friend/add', component: Friend},
  {path: '/connexion', component: Connexion},
  {path: '/dashboard', component: Dashboard},
];
