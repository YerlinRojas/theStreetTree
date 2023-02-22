const productFiltrado = JSON.parse(localStorage.getItem('productoBoton'))
console.log(productFiltrado)


const productos = [

    {
        id: "card1",
        titulo: "campera amarilla",
        imagen: "./assets/images/card1_amarillo.png",
        categoria:{
            nombre: "kids",
            id: "kids",
        },
        precio: 1000,

    },

    {
        id: "card2",
        titulo: "botas hombre",
        imagen: "./assets/images/card2_botashombre.png",
        categoria:{
            nombre: "hombre",
            id: "hombre",
        },
        precio: 1500,

    },

    {
        id: "card3",
        titulo: "conjunto deportivo",
        imagen: "./assets/images/card3_Cdeporhombre.png",
        categoria:{
            nombre: "hombre",
            id: "hombre",
        },
        precio: 2000,

    },

    {
        id: "card4",
        titulo: "conjuto deportivo",
        imagen: "./../assets/images/card4_mujerdeportivoconunto.png",
        categoria:{
            nombre: "mujer",
            id: "mujer",
        },
        precio: 2000,

    },


] 

/* Botones Add */
function botenesAgregar (){
    botonAgregar = document.querySelectorAll(".producto-agregar");
    botonAgregar.forEach((boton)=>{
        boton.addEventListener("click", agregarAlcarrito)
    })
    
}

const contenedorProductos = document.querySelector("#contenedorProductos")
const botonesCategorias = document.querySelectorAll(".boton-categoria"); 
let botonAgregar = document.querySelectorAll(".producto-agregar");
let cantidadEnCarrito = document.getElementById("numeroCarro")


function cargarProductos (productosElegidos) {

    contenedorProductos.innerHTML="";
productosElegidos.forEach(producto => {
        const div = document.createElement("div");
         div.classList.add("producto");
         div.innerHTML = 
         `
         <div class="card-bodyy">
         <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
         <div class="producto-detalle">
           <h5 class="producto-titulo">${producto.titulo}</h5>
           <p class="producto-precio">${producto.precio}</p>
           <button class="producto-agregar" id="${producto.id}">Agregar</button>
         </div>
         </div>
         `
         contenedorProductos.append(div);

           });
           botenesAgregar()
        }


cargarProductos(productFiltrado) 





/* intento con fetch mas innerHtml segun mi cards */
 fetch('https://fakestoreapi.com/products?limit=2')
            .then(res=>res.json())
            
           .then(productosElegidos =>{
        productosElegidos.forEach(producto=>{
        const div = document.createElement(`div`)
        div.innerHTML=`
        <div class="card-bodyy">
        <img class="producto-imagen" src="${producto.image}" alt="${producto.description}">
        <div class="producto-detalle">
          <h5 class="producto-titulo">${producto.description}</h5>
          <p class="producto-precio">${producto.price}</p>
          <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        </div>

        `
        contenedorProductos.append(div);  
    });
    botenesAgregar()
})




/* Function add to car */

let carrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productosEnCarrito"))
if(productosEnCarritoLS){

  carrito=productosEnCarritoLS
  actualizarCarro ()
}else{
  carrito= []
}


function agregarAlcarrito (e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton)
    
    if(carrito.some(producto=> producto.id === idBoton)){
        const index = carrito.findIndex (producto => producto.id === idBoton)
        carrito[index].cantidad++
    }else{
        productoAgregado.cantidad = 1
        carrito.push(productoAgregado)
    }
   
    actualizarCarro ()
    localStorage.setItem("productosEnCarrito", JSON.stringify(carrito));
    alert()
    

}

/* Actualiza numero de cosas en carrito */

function actualizarCarro (){
    let nuevoNumerito = carrito.reduce((acc, producto)=> acc + producto.cantidad, 0)
    cantidadEnCarrito.innerText = nuevoNumerito;

}   

function alert(){
  Toastify({
    text: "Producto Agregado",
    duration: 1000,
    destination: "https://github.com/apvarun/toastify-js",
    close: true,
    gravity: "bottom", 
    position: "right", 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} 
  }).showToast();
}