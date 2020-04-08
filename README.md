# Exemple d'un projet avec Flask

## I. Installations

###     A. Côté serveur

####        1. Python 

Pour l'instalation de Python, c'est mieux de l'installer en global sur la machine. Je l'avais pas fait au début, et j'ai eu des problèmes d'imports de modules (Flask, psycopg2, ...). Pour ça faut juste modifier les paramètres d'installations quand vous lancez le .exe, sélectionnez "installer pour tous les utilisateurs". 

##### a. Psycopg2

Psycopg2 est le module qu'on peut utiliser pour récupérer les donnés sur PostegreSQL. Pour l'installer, il suffit d'ouvrir un terminal à la racine de l'utilisateur et (C:\Users\antoi pour moi), vérifier que python et pip sont installés en checkant leur version par exemple (`python --version` et `pip --version`) et d'entrer la commande `pip install psycopg2`. 

##### b. Flask

Pareil qu'au dessus, dans un terminal il suffit d'entrer `pip install Flask`

#### 2. PostegreSQL 



### B. Client  

#### 1. NodeJS

Pour le côté client, on utilise Node.JS qui est une plateforme logicielle à partir de laquelle on va installer VueJS. Pour ça, il suffit de télécharger le fichier .msi et de l'executer. 

##### 1. VueJS

VueJS c'est un framework JavaScript qui va permettre la gestion du côté client. Il va notemment servir à faciliter la gestion des donnés dans l'HTML et dans le JS, mais aussi faire des véirfs de syntaxe ou autre. Vous pouvez : 
- soit inclure cette balise script dans un fichier html : ``<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
- soit l'installer avec `npm install vue`
Pour l'instant il est pas inclus dans l'exemple, je l'ai pas encore étudié xD
J'ai prit VueJS comme exemple mais on peut très bien utiliser autre chose, comme Angular, React ou autre.

#### 2. jQuery

jQuery est l'outil qui va nous permettre de faire des requètes entre le côté client et le côté serveur, avec des requètes AJAX notemment. 
Pour l'installer, deux manières encore : 
- insérer une balise script dans le .html `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>`. 
- l'installer en local via un fichier .exe qu'on peut télécharger ici : https://sutterlity.gitbooks.io/apprendre-jquery/content/installation/index.html




 

