function saludo(){

    
    alert("Registrate y obten un beneficio")
    console.log(saludo)
}

saludo();



alert("Te pediremos algunos datos para avanzar") 

/* variable no constant*/

let nombre = prompt ("Ingresar nombre")
let lastname = prompt ("Ingresar apellido")
let age = parseInt (prompt ("Ingresar edad"))
let telephon = parseInt (prompt ("Ingresar telefono"))

let flag = true
do{
if(isNaN(age) || isNaN(telephon)){
    alert("Escribe solo numeros");
    let age = parseInt (prompt ("Ingresar edad"));
    let telephon = parseInt (prompt ("Ingresar telefono"));
    console.log(age+ telephon)
}else{
    flag=false
}
}
while(flag)



let datosVar = "Nombre "+ nombre+" Apellido "+ lastname+" Edad "+age+" Telefono "+ telephon  

/* variables constant */

const dni = parseInt (prompt ("Ingresar DNI"))
const birthday= parseInt (prompt("Ingrear fecha de nacimiento"))
const cuil = parseInt (prompt("Ingresar CUIL"))
const datosNvar=" DNI "+dni+" Cumpleaños "+ birthday+" CUIL "+ cuil

console.log(datosVar+" "+datosNvar) 

/* let user= "Admin" 
let pass= 1234

if (a=user){ */






