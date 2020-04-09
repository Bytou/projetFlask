function save(){
    let a = document.getElementById("txt").value
    console.log(a)
    $.ajax({
        url: '/getData',
        data: {
            'test': a,
        },
        type: 'POST',
        success: function (a) {
            console.log("Nom sauvegardé"+a)
            document.getElementById("txt").value = ''
        },
        error: function (a, status, error) {
            console.log('Erreur : ' + error + '\nStatus : ' + status)
        }
    })
}

