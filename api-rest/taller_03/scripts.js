const API = 'https://rickandmortyapi.com/api/character/'

function personaje(texto) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = texto.image
    div.appendChild(img)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

function obtener_personaje(id) {
    return new Promise((resolve, reject) => {
        fetch(`${API}${id}`)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`))
    })
}

obtener_personaje(1)
    .then( (data) => {
        personaje(data)
        return obtener_personaje(2) } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(3) } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(4) } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(5) } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(6) } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(7) } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(8) } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(9) } )
    .then( (data) => personaje(data) )
    .catch( (error) => console.log('Error interno contacte con el administrdor.') )