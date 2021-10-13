console.log("begin JS")

/*document contiene todos los elementosa del html
var se pueden reasignar en un documento ___
let es una forma de declarar variables en un ambiente local 
solo se puede declarar una vez*/
let btn = document.getElementById("saveBtn");
let nombre = document.getElementById("personName");
let pesonId = document.getElementById("personId")

btn.addEventListener("click",function(e){
    e.preventDefault() 
    //borrar todo loq ue hace por defecto, refrescar pagina
    guardarData(personId.value,nombre.value)
    console.log(personId,nombre)
    
})


function guardarData(personIdentifier,dataGuardar){
    localStorage.setItem(personIdentifier,dataGuardar)
}






/*
let insectoGlobal = "zancudito"
agitarAlas(insectoGlobal)

function agitarAlas(insecto=""){
    var alasAbiertas = "El "+ insecto + " ha abierto sus alas"
    console.log (alasAbiertas)
}
*/
/*
class carro{
    //constructor cumple la funcion de 
    constructor(model,color,numPuertas,tipDir){
        //this. le esta dicendo al ambito de clase, 
        //que esa variable va a adoptar un uso
        this.modelo = model
        this.color = color
        this.numeroPuertas = numPuertas
        this.tipoDireccion = tipDir
        this.estado ="parado"
    }
    //es un metodo, cumple lo que hace una funcion dentro de una clase
    acelerar(){
        this.estado="Encendido"
        console.log("Acelera")
    }

    frenar(){
        this.estado="Frenando"
        console.log("Frena")
    }

    pitar(duracion){
        console.log("Pita" + duracion + "segundos")
    }
}
var corvette = new carro("toyota", "rojo",4,"hidraulica")
console.log(corvette.estado)
corvette.acelerar()
console.log(corvette.estado)
*/

