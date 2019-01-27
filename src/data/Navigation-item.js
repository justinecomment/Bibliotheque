export default 
[
  { name: "Ajouter",
    to: '',
    image: '', 
    iconBefore: "fa fa-plus", 
    iconAfter: "fa fa-caret-down", 
    subMenus: [
      {name: 'Livre', image: '', to: '/add'},
      {name: 'Auteur', image: '', to: '/add'},
      {name: 'Collection', image: '', to: '/add'},
      {name: 'Amis', image: '', to: '/add'}
    ]
  },
  { name: "Livres", 
    to: "/books",
    image: '',
    iconBefore: "", 
    iconAfter: "", 
    subMenus: []
  },
  { name: "empty", 
    to: "",
    image: '',
    iconBefore: "", 
    iconAfter: "", 
    subMenus: []
  },
  { name: "", 
    to: "",
    image: '',
    iconBefore: "fas fa-user", 
    iconAfter: "fa fa-caret-down", 
    subMenus: [
      {name: 'Dashboard', image: '', to: '/Dashboard'},
      {name: 'Mes livres', image: '', to: ''},
      {name: 'Mes Collections', image: '', to: ''},
      {name: 'Mes Amis', image: '', to: ''}
    ]
  },
  { name: "Connexion", 
    to: "/connexion",
    image: '',
    iconBefore: "", 
    iconAfter: "", 
    subMenus: []
  },
  { name: "", 
    to: "",
    image: "drapeau-francais",
    iconBefore: "", 
    iconAfter: "fa fa-caret-down", 
    subMenus: [
      {name: '', image: 'drapeau-anglais', to: ''}
    ]
  },
]