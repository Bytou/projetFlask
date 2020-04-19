import json
import psycopg2
from flask import Flask, jsonify, render_template, request, Response

app = Flask(__name__)

con = psycopg2.connect(database='Test',
                       user='postgres',
                       host='localhost',
                       password='basket',
                       port='5432')

cur = con.cursor()


@app.route('/')
def index():
    return render_template('test.html')

#Envoie de donnés à la BDD (ici un nom à enregistrer)
@app.route('/sendData', methods=['POST'])
def sendData():
    a = str(request.form['test'])  
    cur.execute("""INSERT INTO "Test"("Nom") VALUES (%s);""", (a,))
    con.commit()
    return jsonify(a)

#Récupération des noms enregistrés dans la BDD 
@app.route('/getData', methods=['POST'])
def getData():
    cur.execute("""SELECT * FROM "Test"; """)
    data = cur.fetchall()
    liste = []
    #On transforme la liste de tuple en liste d'objet python, qu'on passera en Json pour le coté client 
    for p in data:
        print(p)
        x = {
            "id" : p[0],
            "name" : p[1]
        }
        liste.append(x)
    return Response(json.dumps(liste))


if __name__ == "__main__":
    app.run(debug=True)