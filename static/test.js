function save(){
    let a = document.getElementById("txt").value
    console.log(a)
    $.ajax({
        url: '/sendData',
        data: {
            'test': a,
        },
        type: 'POST',
        success: function (a) {
            console.log("Nom sauvegardé")
            document.getElementById("saveok").innerHTML = "Nom "+a+" sauvegardé"
            document.getElementById("txt").value = ''
        },
        error: function (a, status, error) {
            console.log('Erreur : ' + error + '\nStatus : ' + status)
        }
    })
}

//Définition de la classe Personne, plus simple pour l'affichage 
function Personne(id, name){
    this.Id = id;
    this.Name = name;
}

//Conversion d'une liste de tuple avec un peu de JSON dans tout ça en liste de classe Personne 
function convPers(listPers){
    var list = []
    var conv = JSON.parse(listPers)
    conv.forEach(element => {
        console.log(element)
        var x = new Personne(element['id'], element['name'])
        list.push(x)
    });
    return list;
}

//Récup des donnés 
function get(){
    $.ajax({
        url: '/getData',
        type: 'POST',
        success: function(a){
            console.log("Succès ! \n")
            
            //Conversion des données récupérés en données plus simple à gérer et affichage 
            var listePers = convPers(a)
            document.getElementById('data').innerHTML = ""
            listePers.forEach(element => {
                document.getElementById('data').append('Id : '+element.Id+', nom : '+element.Name+'|| ')
            })
            console.log(listePers)
        },
        error : function(a, status, error){
            console.log('Erreur : ' + error + '\nStatus : ' + status)
        }
    })
}
