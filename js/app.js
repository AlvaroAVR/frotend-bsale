const items = document.getElementById('items') //constante para designar items con el erlemento con el id 'items'
const btnBuscar = document.querySelector('.buscar') //constante para designar a btnBuscar con el boton con la clase .buscar
const inputBuscador = document.querySelector('.inputBuscador')//constante para designar a inputBuscador con el input con la clase inputBuscador
const inputTexto = document.getElementById('textoBuscado')//constante para designar a inputTexto con el elemento con el id textoBuscado

let buscado = 'todos' //variable inicializada en 'todos', con la cual se una a la ruta para que sea la predeterminada y muestre todos los productos, luego se va cambiando para ir mostrando los productos buscados

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

//funcion para prevenir que se recargue la pagina por defecto al dar click en el boton 
btnBuscar.addEventListener('click', (e) => {
    e.preventDefault()
    buscado = 'buscar?query='+ inputBuscador.value
    fetchData()
})


//funcion poder realizar la busqueda con la tecla enter 
inputTexto.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        e.preventDefault()
        buscado = 'buscar?query='+ inputBuscador.value
        fetchData()
    }
})

//funcion que se encarga de la conexion con el api rest del backend para recibir todos los datos y almacenarlos en formato json
const fetchData = async () => {
    try {
        const res = await fetch(`https://apirest-bsale.herokuapp.com/api/v1/products/${buscado}`)
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

//funcion que creara cada tarjeta de productos a mostrar
const pintarCards = data =>{
    let elementos = '' //variable para ir almacenando cada tarjeta que se agregara a la pagina
    data.forEach(item => { //se recorre cada elemento que tenga data para asi agregar cada uno a elementos, se asigna cada elemento de item y se agregan a cada etiqueta 
        elementos += ` 
        <div class="col-12 mb-2 col-md-4 col-lg-3 col-sm-6 ">
            <div class="card">
                <img src="${item.urlImage}" alt="" class="card-img-top"> 
                <div class="card-body">
                    <h5>${item.name}</h5>
                    <p> $${item.price}</p>
                    <button class="btn btn-dark">Comprar</button>
                </div>
            </div>
        </div>
        `
    })
    items.innerHTML = elementos // se insertan los elementos al documento html para que puedan ser desplegados en la pagina
}

