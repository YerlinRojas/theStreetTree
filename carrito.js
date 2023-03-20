const productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"))

const productos = [
    {
      id: "card1",
      titulo: "campera amarilla",
      imagen: "./assets/images/card1_amarillo.png",
      categoria: {
        nombre: "kids",
        id: "kids",
      },
      precio: 1000,
    },
  
    {
      id: "card2",
      titulo: "botas hombre",
      imagen: "./assets/images/card2_botashombre.png",
      categoria: {
        nombre: "hombre",
        id: "hombre",
      },
      precio: 1500,
    },
  
    {
      id: "card3",
      titulo: "conjunto deportivo",
      imagen: "./assets/images/card3_Cdeporhombre.png",
      categoria: {
        nombre: "hombre",
        id: "hombre",
      },
      precio: 2000,
    },
  
    {
      id: "card4",
      titulo: "conjuto deportivo",
      imagen: "./assets/images/card4_mujerdeportivoconunto.png",
      categoria: {
        nombre: "mujer",
        id: "mujer",
      },
      precio: 2000,
    },
  ];




const contenedorProductos = document.querySelector("#contenedorProductos");
const carritoVacio = document.getElementById("carrito-vacio")
const btnComprar = document.getElementById("btn-comprar")



function cargarProductosEnCarrito () {
  if (productosEnCarrito){

  contenedorProductos.classList.remove("disable")
  carritoVacio.classList.add("disable")


function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
         <div class="card-bodyy">
         <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
         <div class="producto-detalle">
           <h5 class="producto-titulo">${producto.titulo}</h5>
           <p class="producto-precio">Precio ${producto.precio}</p>
           <p class="producto-cantidad">Cantidad ${producto.cantidad}</p>
           <button class="producto-eliminar" id="${producto.id}">eliminar</button>
         </div>
         </div>
         `;
    contenedorProductos.append(div);
  });

}
  cargarProductos(productosEnCarrito)
  
/* function botenesEliminar(){
  let eliminar = document.querySelectorAll(".producto-eliminar");
  eliminar.addEventListener("click", eliminarDelcarrito)
  
  
     function eliminarDelcarrito(e) {
      window.location.href = " ./pages/mujeres.html ";
   
      const idBoton = e.currentTarget.id
      const index = productosEnCarrito.findIndex(producto => producto.id ==idBoton)
      productosEnCarrito.splice(index ,1 )
  
      cargarProductosEnCarrito()}
   
    } */
   
    botenesEliminar()
  

}else{
  contenedorProductos.classList.add("disable")
  
  carritoVacio.classList.remove("disable")
  carritoVacio.innerText = `
  No tienes productos en carrito `

  btnComprar.innerHTML= `
  <a href="../index.html">Seguir comprando</a>`

} 

/* botenesEliminar()  */


}

cargarProductosEnCarrito ()
  


/* function botenesEliminar (){
  botonEliminar = document.querySelectorAll(".producto-eliminar");
  botonEliminar.forEach((boton)=>{
      boton.addEventListener("click", eliminarDelcarrito)
  })
  
}

function ocultar(){
  document.getElementById("btn-comprar").style.display = 'none';
  } */


/* let eliminar = document.querySelectorAll(".producto-eliminar");
eliminar.addEventListener("click", eliminarDelcarrito)


   function eliminarDelcarrito(e) {
    window.location.href = " ./pages/mujeres.html ";
 
    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id ==idBoton)
    productosEnCarrito.splice(index ,1 )

    cargarProductosEnCarrito()
  }
  */