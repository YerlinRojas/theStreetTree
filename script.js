/* function saludo(){

    
    alert("Bienvenido")
    console.log(saludo)
}

saludo();


alert("Registrate y Obten beneficios") 
alert("Te pediremos algunos datos para avanzar")   */

/* variable no constant*/

/* let nombre = prompt ("Ingresar nombre")
let lastname = prompt ("Ingresar apellido")
let age = parseInt(prompt("Ingresar edad"));
let telephon = parseInt(prompt("Ingresar telefono"));

let flag=true
do {
    if (isNaN(age) || isNaN(telephon)) {
        alert("Escribe solo numeros");
        age = parseInt(prompt("Ingresar edad"));
        telephon = parseInt(prompt("Ingresar telefono"));
        console.log("edad"+age + "telefono" + telephon);
    } else {
        flag = false;
    }
} while (flag);


let datosVar = "Nombre "+ nombre+" Apellido "+ lastname+" Edad "+age+" Telefono "+ telephon    */

/* variables constant */
/* 
const dni = parseInt (prompt ("Ingresar DNI"))
const birthday= parseInt (prompt("Ingrear fecha de nacimiento"))
const cuil = parseInt (prompt("Ingresar CUIL"))
const datosNvar=" DNI "+dni+" Cumpleaños "+ birthday+" CUIL "+ cuil

console.log(datosVar+" "+datosNvar)   */
 
/* Bucle */
/* const user= "admin"
const pass= "1234"
let intentos= 3;

while(intentos > 0){

    let u = prompt("ingrese Usuario")
    let p = prompt("ingrese Contraseña")
    console.log("usuario "+user+" Contraseña "+pass )
  
if (u == user && p == pass ){
        saludo();
        break;
    }

    intentos -- 
    alert("Usuario y/o contraseña incorrectos. Te quedan "+ intentos+ " intentos")

    if(intentos <=0){
        alert("Usuario bloqueado")
    }
    
} 
 */
/* function arrow  */

/* const product = prompt("Elija un modelo at,ar, ay")

const Precio_Product = {
    at : 1500,
    ar : 3000,
    ay : 2500,

} */
/* const precio_default = 0


const product_final = Precio_Product[product] || precio_default
console.log(product_final) 
alert("Importe neto " +product_final)

let importeProdu = product_final
console.log(importeProdu)

const calcularIva = (calcularIva) => importeProdu * 0.21 

const desc = (desc) => importeProdu * 0.10

const restaProd = (prod1, prod2) => prod1 - prod2

const suma = (prod1, prod2) => prod1 + prod2


let iva = calcularIva(product_final)
alert("Iva "+iva )
let prodesc = desc(product_final)
alert("Tu descuento es de "+prodesc)

console.log("iva "+iva)
console.log("Descuento  "+prodesc)

let impoteTotal = restaProd(suma(importeProdu,calcularIva(calcularIva)),desc(desc))
alert("Importe Total a Pagar " + impoteTotal)
console.log(impoteTotal)
 */

/* *********************************ENTREGA 2********************************* */

/* constructor- especificaciones del producto */
class ropa 
{ constructor(tipo, marca, material, genero, temporada)
    {
    this.tipo = tipo
    this.marca = marca
    this.material = material
    this.genero = genero
    this.temporada = temporada
}
}

/* Se crean los diferentes modelos */
const modelo01 = new ropa(
    "campera",
    "zara",
    "cuero",
    "mujer",
    "invierno",
)

const modelo02 = new ropa(
    "campera",
    "puma",
    "tela",
    "hombre",
    "invierno",
)

const modelo03 = new ropa(
    "remera",
    "nike",
    "tela",
    "hombre",
    "verano",
)

const modelo04 = new ropa(
    "remera",
    "nike",
    "tela",
    "hombre",
    "verano",
)


/* stock en tienda */
const stock = [
    {modelo: "modelo01" , precio: 1500},
    {modelo: "modelo02" , precio: 3000},
    {modelo: "modelo03" , precio: 2500},
    {modelo: "modelo04" , precio: 200},
];
console.log(stock)


/* carrito de compras vacio*/
 const carrito= []


/* filter - busca en stock*/
const search = stock.filter((prod)=> prod.modelo.includes("modelo01"))
console.log(search) 


/* metodo push- agrega al array - carrito */
carrito.push(
    {modelo: "modelo02" , precio: 3000},
    {modelo: "modelo03" , precio: 2500},
    {modelo: "modelo04" , precio: 200},

)


/* forEach- elementos dentro del carrito*/
 carrito.forEach((productos) => {
    console.log(productos);
}
)

/* funcion para iva */
function precioIva (precio) {
    let result = precio * 1.21
    return result
    }


/* forEach - precio mas iva */
carrito.forEach(prod => prod.precio = precioIva(prod.precio))
console.log(carrito)



/* map- hacer un descuento y mostrar un nuevo array*/
const precioDesc = carrito.map((prod1) => {
    
    return{
        nombre: prod1.modelo,
        precio:prod1.precio-(prod1.precio * 0.10)

    }

}
)

console.log(precioDesc)

/* reduce- hacer una sumatoria total de los productos */
const importeTotal = precioDesc.reduce ((acumulador, precioDesc) => acumulador+ precioDesc.precio, 0);
console.log(importeTotal)


/* splice - para eliminar elementos dentro del array- uno o varios-  */




