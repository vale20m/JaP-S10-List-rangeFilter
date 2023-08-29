const URL = "https://fakestoreapi.com/products";

const productos = document.querySelector("#info");

const filtrar = document.querySelector("#rangeFilterCount");
const limpiar = document.querySelector("#clearRangeFilter");

const min = document.querySelector("#rangeFilterCountMin");
const max = document.querySelector("#rangeFilterCountMax");

function mostrarProductos(arreglo){
    productos.innerHTML = "";
    for (let producto of arreglo) {
        productos.innerHTML +=
        `<table border="1">
            <tr>
                <td><img src="${producto.image}" width="200px"></td>
                <td><h3>${producto.title}</h3></td>
                <td><p>Price: ${producto.price}</p></td>
                <td><p>Count: ${producto.rating.count}</p></td>
            </tr>
        </table>`
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Fetch a URL y organizamos la info obtenida del JSON en un listado

    let arregloProductos = [];

    fetch(URL)
    .then(response => response.json())
    .then(data => { mostrarProductos(data); for (const producto of data) {
        arregloProductos.push(producto); } });

    filtrar.addEventListener("click", function(){
        let productosFiltrados = arregloProductos.filter((producto) => producto.price >= min.value && producto.price <= max.value);
        mostrarProductos(productosFiltrados);
    });

    limpiar.addEventListener("click", function(){
        min.value = "";
        max.value = "";
        mostrarProductos(arregloProductos);
    });

});