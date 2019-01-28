import Books from './components/Books';
import AddBook from './components/Add/Book';
import AddAuthor from './components/Add/Author';
import AddCollection from './components/Add/Collection';
import AddFriend from './components/Add/Friend';
import Home from './components/Home';
import Connexion from './components/Connexion';
import Dashboard from './components/Dashboard';

export const routes =[
  {path: '/', component: Home},
  {path: '/books', component: Books},
  
  {path: '/book/add', component: AddBook},
  {path: '/author/add', component: AddAuthor},
  {path: '/collection/add', component: AddCollection},
  {path: '/friend/add', component: AddFriend},

  {path: '/connexion', component: Connexion},
  {path: '/dashboard', component: Dashboard},
];
