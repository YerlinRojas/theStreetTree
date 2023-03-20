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

const contenedorProductos = document.querySelector("#contenedorProductos")
const botonesCategorias = document.querySelectorAll(".boton-categoria"); 

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
        }


cargarProductos(productFiltrado) 



/* let lista = document.getElementById("lista") */
/* contenedorProductos.innerHTML=""; */



/* innerHtml segun api */

 /*        <div class="card-bodyy">
         <img class="producto-imagen" src="${info.image}" >
         <div class="producto-detalle">
           <h5 class="producto-titulo">${info.description}</h5>
           <p class="producto-precio">${info.price}</p>
         </div>
         </div> */


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
})