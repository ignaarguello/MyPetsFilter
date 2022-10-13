function getData(array){
    return array
}

function filterEventSelect(array){
    let data = array.filter(element => element.raza.includes(event.target.value))
    return data
}

//? Variables Contenedoras
const ContenedorData = document.querySelector('#Contenedor-Data');
const Select = document.querySelector('#Select-Raza');
const InputText = document.querySelector('#Input-Text');


//?Funcion que agrega los values al select
let Raza = data.map(element => element.raza)
Raza = new Set(...[Raza]).forEach( Raza => Select.innerHTML += `<option value='${Raza}'>${Raza}</option>`)



//Evento del Select - 1
Select.addEventListener('change', (event) => {
    ContenedorData.innerHTML = ``

    let MascotaFiltrada = filterEventSelect(data)
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
    })
});

//Evento del Input - 2 
InputText.addEventListener('input', (event) => {
    ContenedorData.innerHTML = ``
    
    let filter = getData(data).filter(element => element.nombre.includes(event.target.value))

    let filterEach = filter.forEach(element => {
        if(event.target.value === ''){
            ContenedorData.innerHTML = ``
        }
        else{
            let card = document.createElement('div')
            card.classList = 'CardMascotas animate__animated  animate__zoomInDown'
            
            card.innerHTML =
            ` <div id='ContenedorTituloCard'>
                    <h1 id='TituloCard'>${element.nombre}</h1>
                    <p id='ParrafoCard'>${element.description}</p>
             <div id="ContenedorCaracteristicas">
                    <h4 class="Caracteristica">Raza : <strong>${element.raza}</strong></h4>
                    <h4 class="Caracteristica">Color : <strong>${element.color}</strong></h4>
                    <h4 class="Caracteristica">Peso : <strong>${element.peso} KG</strong></h4>
             </div>
             </div>
             <div id='ContenedorImagenCard'>
                <img id='ImageCard' src="${element.img}" alt="">
            </div>`

            ContenedorData.appendChild(card)
        }
    })
        
    
 
})







