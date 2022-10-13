function getData(array){
    return array
}

const Select = document.querySelector('#Select-Raza')
let Raza = data.map(element => element.raza)
Raza = new Set(...[Raza]).forEach( Raza => Select.innerHTML += `<option value='${Raza}'>${Raza}</option>`)
const ContenedorData = document.querySelector('#Contenedor-Data')


function filterEvent(array){
    let data = array.filter(element => element.raza.includes(event.target.value))
    return data
}


//Evento del Select
Select.addEventListener('change', (event) => {
    ContenedorData.innerHTML = ``

    let MascotaFiltrada = filterEvent(data)
    console.log(MascotaFiltrada)
    
    MascotaFiltrada.forEach((element) => {
        let card = document.createElement('div')
        card.classList = 'CardMascotas animate__animated  animate__zoomInDown'
       
        card.innerHTML = `
        <div id='ContenedorTituloCard'>
            <h1 id='TituloCard'>${element.nombre}</h1>
            <p id='ParrafoCard'>${element.description}</p>
            <div id="ContenedorCaracteristicas">
                <h3 class="Caracteristica">Raza : <strong>${element.raza}</strong></h3>
                <h3 class="Caracteristica">Color : <strong>${element.color}</strong></h3>
                <h3 class="Caracteristica">Peso : <strong>${element.peso} KG</strong></h3>
            </div>
        </div>
        <div id='ContenedorImagenCard'>
            <img id='ImageCard' src="${element.img}" alt="">
        </div>`
        
        ContenedorData.appendChild(card)
    } )
   

});








