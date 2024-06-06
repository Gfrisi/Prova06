let BomDia = document.getElementById("BomDia")
let NomeDoUsuario = document.getElementById("NomeDoUsuario")


function enviar()
{
    BomDia.innerHTML = "Bom Dia " + NomeDoUsuario.value + " Tudo bem?"
}

let a = document.getElementById("centimetros")
let b = document.getElementById("metros")

function Multiplicar()
{
  if(centimetros)
  {
    b.innerHTML = "Voce tem " + (parseInt(centimetros.value)) / 100 + "  metros"
  }
}

let valor = document.getElementById("valor")
let sucessor = document.getElementById("sucessor")
let antecessor = document.getElementById("antecessor")

function calcular()
{
    sucessor.innerHTML = parseInt(valor.value) + 1;
    antecessor.innerHTML = parseInt(valor.value) - 1;
}


let c = document.getElementById("numero1")
let d = document.getElementById("numero2")
let e = document.getElementById("resultado")

function comparar()
{
    
    if(c.value > d.value)
    {
        e.innerHTML = c.value + " é maior que " + d.value
    } 
    else
    {
        e.innerHTML = c.value + " é menor que " + d.value
    }
}

let w = document.getElementById("salario")
let x = document.getElementById("conta")

function porcentagem()
{
    if(w.value < 1250)
        x.innerHTML = 
}

var f = 0;
while (f < 101)
{
    console.log(f)
    f = f + 1;
    
}

var g = 0;
while (g < 55)
{
    console.log(g)
    g = g + 5;
}

var h = 100
while (h > 0)
{
    console.log(h)
    h = h - 10;
}

