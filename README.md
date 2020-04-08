# Exemple d'un projet avec Flask

## 1. Installations

### A. Python -> Côté serveur

Pour l'instalation de Python, c'est mieux de l'installer en global sur la machine. Je l'avais pas fait au début, et j'ai eu des problèmes d'imports de modules (Flask, psycopg2, ...). Pour ça faut juste modifier les paramètres d'installations quand vous lancez le .exe, sélectionnez "installer pour tous les utilisateurs". 

#### 1. Psycopg2

Psycopg2 est le module qu'on peut utiliser pour récupérer les donnés sur PostegreSQL. Pour l'installer, il suffit d'ouvrir un terminal à la racine de l'utilisateur et (C:\Users\antoi pour moi), vérifier que python et pip sont installés en checkant leur version par exemple (`python --version` et `pip --version`) et d'entrer la commande `pip install psycopg2`. 

#### 2. Flask

Pareil qu'au dessus, dans un terminal il suffit d'entrer `pip install Flask`


### B. Node.JS -> Client 

Pour le côté client, on utilise Node.JS qui est une plateforme logicielle à partir de laquelle on va installer jQuery. Pour ça, il suffit de télécharger le fichier .msi et de l'executer. 
Pour jQuery justement, il suffit d'insérer une balise script dans le .html `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>`. Je ne sais pas si on a vraiment besoin d'installer Node.JS, peut-être que ça marche sans vu qu'on l'inclus dans un l'HTML. No se xD. 
