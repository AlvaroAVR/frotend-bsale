const items = document.getElementById('items')
const btnBuscar = document.querySelector('.buscar')
const inputBuscador = document.querySelector('.inputBuscador')
const inputTexto = document.getElementById('textoBuscado')

let buscado = 'todos'

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault()
    buscado = 'buscar?query='+ inputBuscador.value
    fetchData()
})

inputTexto.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        e.preventDefault()
        buscado = 'buscar?query='+ inputBuscador.value
        fetchData()
    }
})

const fetchData = async () => {
    try {
        const res = await fetch(`https://apirest-bsale.herokuapp.com/api/v1/products/${buscado}`)
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data =>{
    let elementos = ''
    data.forEach(item => {
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
    items.innerHTML = elementos
}

