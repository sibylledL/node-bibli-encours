# node-bibli-encours

le projet est construit avec node.js, express.js, MongoDB, pug.

Il s'agit d'un projet en cours de construction. Je me suis basée sur un projet personnel d'un site de diffusion de documents d'archives, d'images et de vidéos. Ici j'ai commencé avec des livres et quelques informations (auteur, ISBN, année de publication, couverture, resumé...)J'ai donc commencé a testé différentes packages et fonctionnalité permises par node et express. Le projet est contruit sur plusieurs routes:

- /accueil:
  ensemble des documents ajouter présentés en grille.
  
- /livres/id:
   sur la page d'accueil, au clic sur un "voir plus" on passe sur une autre route qui permet d'accéder à plus d'informations.
   
- /admin:
  à la racine de cette route ce trouve la liste des livres présents dans la bases de données. un bouton edit permet d'éditer les informations.
  
- /admin/addbook
  permet d'ajouter un livre dans une base de données / le package multer est utilisé pour uploader une image.
  
- /admin/users
  permet de créer un compte.
  
- /admin/login
  permet de s'enregistrer.

le porchain objectif est de placer l'authentification à la racide de la route admin ne laissant le droit de modification des données qu'à ceux qui se sont déjà enregistrer. 
Le sign in et log in marche mais des messages 'connect-flash' doivent être mis en place.

Difficultés rencontrée sur l'authentification avec passport, passport-local.
Mais un grand plaisir à le faire

Problème rencontré également dans le déploiement sur Heroku, l'app tourne mais les pages qui sollicitent la base de données mettent plus de 30s à répondre et heroku met fin à la requête. Toujours en train de chercher la solution.
