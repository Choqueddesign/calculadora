/*
2 inputs un numero a y un numero b 
4 botones  operacion b
label .. result

*/
let btnMul = document.getElementById("mul");
let btnDiv = document.getElementById("div");
let btnSum = document.getElementById("sum");
let btnRes = document.getElementById("res");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let resultado = document.getElementById("resultado");

btnMul.addEventListener("click",function(e){
    e.preventDefault() 
    //borrar todo lo que hace por defecto, como refrescar pagina
    guardarData(number1.value,number2.value)
    respuesta = (number1.value * number2.value)
    resultado.value = (respuesta)
    //console.log(respuesta)
})

btnDiv.addEventListener("click",function(e){
    e.preventDefault() 
    //borrar todo lo que hace por defecto, como refrescar pagina
    guardarData(number1.value,number2.value)
    respuesta = (number1.value / number2.value)
    resultado.value = (respuesta)
    console.log(respuesta)
})

btnRes.addEventListener("click",function(e){
    e.preventDefault() 
    //borrar todo lo que hace por defecto, como refrescar pagina
    guardarData(number1.value,number2.value)
    respuesta = (number1.value - number2.value)
    resultado.value = (respuesta)
    console.log(respuesta)
})
btnSum.addEventListener("click",function(e){
    e.preventDefault() 
    //borrar todo lo que hace por defecto, como refrescar pagina
    guardarData(number1.value,number2.value);
    respuesta = (parseFloat(number1.value) + parseFloat(number2.value))
    //parseFloat es una funcion (parsear o castear... convertir
    //convertir a un numero flotante el string )
    resultado.value = (respuesta)
    console.log(respuesta)
})

function guardarData(primerNumero,segundoNumero){
    localStorage.setItem(primerNumero,segundoNumero)
}