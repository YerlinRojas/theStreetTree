const botonesCategorias = document.querySelectorAll(".boton-categoria"); 

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
        cargarProductos(productoBoton);
    }
    )
}
    )


console.log(productoBoton)