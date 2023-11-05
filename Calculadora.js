let num1=document.getElementById("item1")
let num2=document.getElementById("item2") 

let suma=document.getElementById("suma")
let resta=document.getElementById("resta")
let multiplicacion=document.getElementById("multiplicacion")
let division=document.getElementById("division")

let resultado=document.getElementById("resultado")

suma.addEventListener("click",(a,b)=>{
    let res = parseInt(num1.value) + parseInt(num2.value)
    resultado.value=res
})

resta.addEventListener("click",(a,b)=>{
    let res = parseInt(num1.value) - parseInt(num2.value)
    resultado.value=res
})
multiplicacion.addEventListener("click",(a,b)=>{
    let res = parseInt(num1.value) * parseInt(num2.value)
    resultado.value=res
})
division.addEventListener("click",(a,b)=>{
    let res = parseInt(num1.value) / parseInt(num2.value)
    resultado.value=res
})