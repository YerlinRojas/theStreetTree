/******** TERCERA ENTREGA ********/

const productos = [
  {
    id: "card1",
    titulo: "Campera Amarilla",
    imagen: "./assets/images/card1_amarillo.png",
    categoria: {
      nombre: "kids",
      id: "kids",
    },
    precio: 1000,
  },
  {
    id: "card2",
    titulo: "Botas Hombre",
    imagen: "./assets/images/card2_botashombre.png",
    categoria: {
      nombre: "hombre",
      id: "hombre",
    },
    precio: 1500,
  },
  {
    id: "card3",
    titulo: "Conjunto Deportivo",
    imagen: "../assets/images/card3_Cdeporhombre.png",
    categoria: {
      nombre: "hombre",
      id: "hombre",
    },
    precio: 2000,
  },
  {
    id: "card4",
    titulo: "Conjunto Deportivo Mujer",
    imagen: "../assets/images/card4_mujerdeportivoconunto.png",
    categoria: {
      nombre: "mujer",
      id: "mujer",
    },
    precio: 2000,
  },
];

/* Elementos del DOM */
const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const cantidadEnCarrito = document.getElementById("numeroCarro");

/* Función para cargar productos en el contenedor */
function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="car-title">${producto.titulo}</h5>
          <p class="card-text">${producto.precio}</p>
          <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(div);
  });

  // Vincular eventos a los botones de agregar producto
  botonesAgregar();
}

/* Función para filtrar productos por categoría */
function filtrarProductosPorCategoria(categoriaId) {
  const productosFiltrados = productos.filter(producto => producto.categoria.id === categoriaId);
  return productosFiltrados;
}

/* Manejar clic en los botones de categoría */
botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const categoriaSeleccionada = e.currentTarget.id;
    const productosFiltrados = filtrarProductosPorCategoria(categoriaSeleccionada);
    cargarProductos(productosFiltrados);
  });
});

/* Vincular eventos de agregar producto al carrito */
function botonesAgregar() {
  const botonAgregar = document.querySelectorAll(".producto-agregar");
  botonAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

/* Inicialización del carrito desde el almacenamiento local */
let carrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];

/* Función para agregar producto al carrito */
function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if (carrito.some(producto => producto.id === idBoton)) {
    const index = carrito.findIndex(producto => producto.id === idBoton);
    carrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    carrito.push(productoAgregado);
  }

  actualizarCarro();
  localStorage.setItem("productosEnCarrito", JSON.stringify(carrito));
  mostrarNotificacion();
}

/* Actualizar número de productos en el carrito */
function actualizarCarro() {
  const nuevoNumerito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  cantidadEnCarrito.innerText = nuevoNumerito;
}

/* Función para mostrar notificación de producto agregado */
function mostrarNotificacion() {
  Toastify({
    text: "Producto Agregado al Carrito",
    duration: 3000,
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

/* Cargar todos los productos al iniciar */
cargarProductos(productos);
