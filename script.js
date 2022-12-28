function saludo(){

    
    alert("Bienvenido")
    console.log(saludo)
}

saludo();


alert("Registrate y Obten beneficios") 
alert("Te pediremos algunos datos para avanzar")  

/* variable no constant*/

let nombre = prompt ("Ingresar nombre")
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


let datosVar = "Nombre "+ nombre+" Apellido "+ lastname+" Edad "+age+" Telefono "+ telephon   

/* variables constant */

const dni = parseInt (prompt ("Ingresar DNI"))
const birthday= parseInt (prompt("Ingrear fecha de nacimiento"))
const cuil = parseInt (prompt("Ingresar CUIL"))
const datosNvar=" DNI "+dni+" Cumpleaños "+ birthday+" CUIL "+ cuil

console.log(datosVar+" "+datosNvar)  
 
/* Bucle */
const user= "admin"
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

/* function arrow  */

const product = prompt("Elija un modelo at,ar, ay")

const Precio_Product = {
    at : 1500,
    ar : 3000,
    ay : 2500,

}
const precio_default = 0


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


