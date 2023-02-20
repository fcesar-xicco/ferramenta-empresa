

/*----------------------------------------COMPRESSORES-------------------------------------------------*/

var cor110 = "black"
var cor220 =  "red" 

function comp13mais110(){
    var descricao = window.document.getElementById("descricao")
    
    descricao.innerText = 
    `Comp. 1/3+ FFI12HBX R134 110v
    Valor: R$ 746,00
    com desconto: R$ 720,00
    à vista consigo a R$ 695,00`
    descricao.style.color = `${cor110}`
}
function comp13mais220(){
    
    
    descricao.innerText = 
    `Comp. 1/3+ FFI12HBX R134 220v
    Valor: R$ 746,00
    com desconto: R$ 720,00
    à vista consigo a R$ 695,00`  
    descricao.style.color = `${cor220}`

}
function comp13egas110(){
    
    
    descricao.innerText = 
    `Comp. 1/3 Egas100 R134 110v
    Valor: R$ 726,00
    com desconto: R$ 695,00
    à vista consigo a R$ 670,00` 
    descricao.style.color = `${cor110}`
}
function comp13egas220(){
    
    
    descricao.innerText = 
    `Comp. 1/3 Egas100 R134 220v
    Valor: R$ 726,00
    com desconto: R$ 695,00
    à vista consigo a R$ 670,00` 
    descricao.style.color = `${cor220}`  
}
//-------------------------------------------------------COMPRESSOR 1/4
function comp14mais110(){
    
    
    descricao.innerText = 
    `Comp. 1/4 Egas80 R134 110v
    Valor: R$ 690,00
    com desconto: R$ 545,00
    à vista consigo a R$ 510,00
    Promoção!!`  
    descricao.style.color = `${cor110}`
}

function comp14mais220(){
  
    
    descricao.innerText = 
    `Comp. 1/4 Egas80 R134 220v
    Valor: R$ 690,00
    com desconto: R$ 545,00
    à vista consigo a R$ 510,00
    Promoção!!`  
    descricao.style.color = `${cor220}`
}

function comp14emr110(){
    
    
    descricao.innerText = 
    `Comp. 1/4 Emr80 R134 110v
    Valor: R$ 490,00
    com desconto: R$ 445,00
    à vista consigo a R$ 429,00
    Promoção!!`  
    descricao.style.color = `${cor110}`
}

function comp14emr220(){
   
    
    descricao.innerText = 
    `Comp. 1/4 Emr80 R134 220v
    Valor: R$ 490,00
    com desconto: R$ 445,00
    à vista consigo a R$ 429,00
    Promoção!!`  
    descricao.style.color = `${cor220}` 
}

function comp14ecla110(){
    
    
    descricao.innerText = 
    `Comp. 1/4 Eletrolux R134 110v
    Valor: R$ 490,00
    com desconto: R$ 445,00
    à vista consigo a R$ 420,00
    Promoção!!`  
    descricao.style.color = `${cor110}`
}

function comp14ecla220(){
    
    
    descricao.innerText = 
    `Comp. 1/4 Eletrolux R134 220v
    Valor: R$ 490,00
    com desconto: R$ 445,00
    à vista consigo a R$ 420,00
    Promoção!!` 
    descricao.style.color = `${cor220}` 
}
//-------------------------------------------------------COMPRESSOR 1/5
function comp15emi110(){
    
    
    descricao.innerText = 
    `Comp. 1/5 Emi70 R134 110v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00
    Canos na parte de cima!!`  
    descricao.style.color = `${cor110}`
}

function comp15emi220(){
    
    
    descricao.innerText = 
    `Comp. 1/5 Emi70 R134 220v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00
    Canos na parte de cima!!`  
    descricao.style.color = `${cor220}`
}

function comp15clp110(){
    
    
    descricao.innerText = 
    `Comp. 1/5 CLP R600 110v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00`  
    descricao.style.color = `${cor110}`
}

function comp15clp220(){
    
    
    descricao.innerText = 
    `Comp. 1/5 CLP R600 220v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00` 
    descricao.style.color = `${cor220}` 
}
//-------------------------------------------------------COMPRESSOR 1/6
function comp16emi110(){
    
    
    descricao.innerText = 
    `Comp. 1/6 Emi60 R134 110v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00`  
    descricao.style.color = `${cor110}`
}

function comp16emi220(){
   
    
    descricao.innerText = 
    `Comp. 1/6 Emi60 R134 220v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00 `
    descricao.style.color = `${cor220}` 
}

function comp16clp110(){
    
    
    descricao.innerText = 
    `Comp. 1/6 CLP R600 110v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00`  
    descricao.style.color = `${cor110}`
}

function comp16clp220(){
    
    
    descricao.innerText = 
    `Comp. 1/6 CLP R600 220v
    Valor: R$ 525,00
    com desconto: R$ 510,00
    à vista consigo a R$ 490,00` 
    descricao.style.color = `${cor220}`
    navigator.clipboard.writeText(textocopiado)
}
function copiar(){
    let textocopiado = window.document.querySelector("p#descricao")
    navigator.clipboard.writeText(textocopiado)

    window.alert("texto copiado")

}