# node-bibli-encours

le projet est en cours de construction et de travail. Il n'y a pas de finition css ni html, je travaille essentiellement sur la structure back et la base de donnée. 

Il est basé sur node.js, express.js, MongoDB, pug.

Je me suis basée sur un projet personnel d'un site de documents d'archives, d'images et de vidéos que j'ai l'intention de réaliser dans les prochains mois. Ce projet me sert de terrain d'entrainements et d'expérimentations. Ici j'ai commencé avec des livres et quelques informations (auteur, ISBN, année de publication, couverture, resumé...). J'ai appris à me servir de différents packages et fonctionnalités permises par node et express. Le projet est contruit sur plusieurs routes:

- /accueil:
  ensemble des documents ajoutés et présentés en grille.
  
- /livres/id:
   sur la page d'accueil, au clic sur un "voir plus" on passe sur une autre route qui permet d'accéder à plus d'informations.
   
- /admin:
  à la racine de cette route ce trouve la liste des livres présents dans la bases de données. Un bouton edit permet d'éditer les informations.
  
- /admin/addbook
  permet d'ajouter un livre dans une base de données / le package multer est utilisé pour uploader une image.
  
- /admin/users
  permet de créer un compte.
  
- /admin/login
  permet de s'enregistrer.

Prochain objectif : 
  - placer l'authentification à la racide de la route admin ne laissant le droit de modification des données qu'à ceux qui se sont déjà enregistré. 
  - Le signin et login marche mais des messages 'connect-flash' doivent être mis en place.
  - ajout bouton et fonction supprimer dans la page edit.
  - régler le problème de déploiement sur Heroku. Le chemin des images casses à la commande "git push heroku master"

Difficultés: 
  - déploiement sur heroku qui à mit beaucoup de choses de branle.
  - authentification avec passport.
malgrès les difficultés j'ai toujours un grand plaisir à le travailler!
