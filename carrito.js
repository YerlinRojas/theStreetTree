const productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));

const productos = [
  {
    id: "card1",
    titulo: "campera amarilla",
    imagen: "./assets/images/card1_amarillo.png",
    categoria: {
      nombre: "kids",
      id: "kids",
    },
    precio: "$ 1000",
  },
  {
    id: "card2",
    titulo: "botas hombre",
    imagen: "./assets/images/card2_botashombre.png",
    categoria: {
      nombre: "hombre",
      id: "hombre",
    },
    precio: "$ 14000",
  },
  {
    id: "card3",
    titulo: "conjunto deportivo",
    imagen: "./assets/images/card3_Cdeporhombre.png",
    categoria: {
      nombre: "hombre",
      id: "hombre",
    },
    precio: "$ 15000",
  },
  {
    id: "card4",
    titulo: "Conjunto Deportivo Mujer",
    imagen: "./assets/images/card4_mujerdeportivoconunto.png",
    categoria: {
      nombre: "mujer",
      id: "mujer",
    },
    precio: "$ 8800",
  },
];

const contenedorProductos = document.querySelector("#contenedorProductos");
const carritoVacio = document.getElementById("carrito-vacio");
const btnComprar = document.getElementById("btn-comprar");

function cargarProductosEnCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorProductos.classList.remove("disable");
    carritoVacio.classList.add("disable");

    cargarProductos(productosEnCarrito);

    botenesEliminar();
  } else {
    contenedorProductos.classList.add("disable");
    carritoVacio.classList.remove("disable");
    carritoVacio.innerText = "No tienes productos en el carrito";

    btnComprar.innerHTML = '<a href="../index.html">Seguir comprando</a>';
  }
}

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">Precio ${producto.precio}</p>
          <p class="producto-cantidad">Cantidad ${producto.cantidad}</p>
          <button class="producto-eliminar btn" id="${producto.id}">Eliminar</button>
        </div>
      </div>
    `;
    contenedorProductos.append(div);
  });

  botenesEliminar();
}

function botenesEliminar() {
  const botonesEliminar = document.querySelectorAll(".producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelcarrito);
  });
}

function eliminarDelcarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);

  if (index !== -1) {
    productosEnCarrito.splice(index, 1);
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    cargarProductosEnCarrito();
    location.reload();
  }
}

cargarProductosEnCarrito();



btnComprar.addEventListener("click", function() {
  Toastify({
    text: "¡Compra realizada con éxito!",
    duration: 3000,
    destination: "https://yerlinrojas.github.io/theStreetTree/index.html", 
    close: true,
    gravity: "bottom",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){},
    callback: function() {
      setTimeout(function() {
        location.reload();
      }, 2000); // 1000ms = 1 segundo de espera antes de recargar la página
    }
  }).showToast();
});


