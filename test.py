import psycopg2
from flask import Flask, jsonify, render_template, request

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


@app.route('/getData', methods=['POST'])
def getData():
    a = str(request.form['test'])  
    cur.execute("""INSERT INTO "Test"("Nom") VALUES (%s);""", (a,))
    con.commit()
    return jsonify(a)


if __name__ == "__main__":
    app.run(debug=True)
