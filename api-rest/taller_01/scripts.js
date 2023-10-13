const URL_API = 'https://rickandmortyapi.com/api/character/'

function personaje(texto) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.appendChild( document.createTextNode(texto.name) )
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = texto.image
    div.appendChild(img)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

function cargar_datos(personaje_id) {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', URL_API + personaje_id, true)
    xhttp.onreadystatechange = function () {
        if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
            let texto = JSON.parse(xhttp.responseText)
            personaje(texto)
        }
    }
    xhttp.send()
}

for (let i=1; i<=100; i++) {
    cargar_datos(i)
}