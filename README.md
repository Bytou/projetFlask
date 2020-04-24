# Exemple d'un projet avec Flask

## I. Installations

### A. Côté serveur

#### 1. Python 

Pour l'instalation de Python, c'est mieux de l'installer en global sur la machine. Je l'avais pas fait au début, et j'ai eu des problèmes d'imports de modules (Flask, psycopg2, ...). Pour ça faut juste modifier les paramètres d'installations quand vous lancez le .exe, sélectionnez "installer pour tous les utilisateurs". 

##### a. Psycopg2

Psycopg2 est le module qu'on peut utiliser pour récupérer les donnés sur PostegreSQL. Pour l'installer, il suffit d'ouvrir un terminal à la racine de l'utilisateur et (C:\Users\antoi pour moi), vérifier que python et pip sont installés en checkant leur version par exemple (`python --version` et `pip --version`) et d'entrer la commande `pip install psycopg2`. 

##### b. Flask

Pareil qu'au dessus, dans un terminal il suffit d'entrer `pip install Flask`

#### 2. PostegreSQL 



### B. Client  

#### 1. NodeJS

Pour le côté client, on utilise Node.JS qui est une plateforme logicielle à partir de laquelle on va installer VueJS. Pour ça, il suffit de télécharger le fichier .msi et de l'executer. 

##### a. VueJS (pas encore dans l'exemple)

VueJS c'est un framework JavaScript qui va permettre la gestion du côté client. Il va notemment servir à faciliter la gestion des donnés dans l'HTML et dans le JS, mais aussi faire des véirfs de syntaxe ou autre. Vous pouvez : 
- soit inclure cette balise script dans un fichier html : ``<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
- soit l'installer avec `npm install vue`
Pour l'instant il est pas inclus dans l'exemple, je l'ai pas encore étudié xD
J'ai prit VueJS comme exemple mais on peut très bien utiliser autre chose, comme Angular, React ou autre.

#### 2. jQuery

jQuery est l'outil qui va nous permettre de faire des requètes entre le côté client et le côté serveur, avec des requètes AJAX notemment. 
Pour l'installer, deux manières encore : 
- insérer une balise script dans le .html `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>`. (ce que j'ai utilisé dans l'exemple)
- l'installer en local via un fichier .exe qu'on peut télécharger ici : https://sutterlity.gitbooks.io/apprendre-jquery/content/installation/index.html

## II. L'exemple 

### A. La BDD

Avant toute chose, il faut créer la BDD. Pour ça, il faut aller sur pgAdmin et créer un serveur. Une fois cela fait, vous pouvez exécuter le script nommé "databaseTest.sql" en allant sur "Query tool". Une fois exécuté et qu'il vous dit que tout va bien, vous pouvez tester en entrant un ptit `SELECT * FROM 'Test'` et vous devriez avoir deux colones qui s'affichent, une Id et une Nom. 

### B. Le reste xD

Une fois que vous avez installer tous les ptits modules et mis en place la BDD, vous pouvez ouvrir une console dans le dossier et taper un classique `python test.py`. Si tout se passe bien, vous devriez avoir quelque chose comme ça :

![alt text](https://github.com/Bytou/projetFlask/blob/master/images/console.PNG)

Ensuite, il vous suffit d'aller sur l'URL de la dernière ligne, qui doit être http://127.0.0.1:5000/ 

> Dans le test.py, faites bien attention à entrer votre nom d'utilisateur et votre mot de passe pour la database de pgAdmin4 ici : 
> ```python 
>con = psycopg2.connect(database='Test',
>                       user='postgres', 
>                       host='localhost',
>                       password='basket',
>                       port='5432')
>``` 

Si vous êtes sur VS Code je peux vous aider pour le débugage vu que je suis avec VS Code. 

L'appli fais quelque chose de très simple : enregistrer un nom dans un table et retourner tous les noms enregistrés. Vu que votre table est vide au début, il faut que vous ajoutiez un ou deux noms, puis après demander toutes les entrées de la table. 

### C. VueJS

VueJS va nous permettre de faciliter le passage de donnés et l'appel de méthode. Par exemple, dans le HTML, et pour afficher l'ID et le Nom enregistré, on utilise des balise '[[ ]]'. définis ligne 22 du .js.
De plus, pour la récupération de donnés au lancement de la page, on appelle la méthode get() dans une méthode de VueJS appelé "created", qui s'exéctue au chargement de la page. 