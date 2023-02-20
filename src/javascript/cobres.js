function mostrarMenu(){
   let menuvalorkg = window.document.getElementById("valoreskg")
   if(menuvalorkg.style.display == 'block'){
      menuvalorkg.style.display = 'none'
   }else{
      menuvalorkg.style.display = 'block'
   }
}


function verificar(){
    var qtdmetros = window.document.getElementById("qtdmetro")
    var resp = window.document.getElementById("resp")

    var valorkg = window.document.getElementById('vmetroprazo')
    var valordescont = window.document.querySelector('input#vmetrovista')
    var valorkgp = window.document.querySelector('input#voitoprazo')
    var valordescontp = window.document.querySelector('input#voitovista')
  
   if(qtdmetros.value.length == 0){
      resp.innerText ="digite todas as informações corretamente!!"
      resp.style.background = "white"
      resp.style.color = 'red'
        resp.style.borderRadius = "10px"
        resp.style.border = "solid black 2px"
        resp.style.padding = "15px 10px"
        resp.style.fontWeight = "700"
        resp.style.textAlign = 'center'
   }
   else {
     var respbit = window.document.getElementsByClassName("cbit")
     if(respbit[0].checked){
        var bitselect = '1/4'
        var pesoselec = 0.130
      }else if(respbit[1].checked){
       var bitselect = '3/8'
        var pesoselec = 0.200
     }else if(respbit[2].checked){
        var bitselect = '1/2'
        var pesoselec = 0.270
     }else if(respbit[3].checked){
        var bitselect = '5/8'
        var pesoselec = 0.350
     }else if(respbit[4].checked) {
        var bitselect = '3/4'
        var pesoselec = 0.410
     }
   
   if(Number(qtdmetros.value) * pesoselec < 7.7){
  
      var valorkg = window.document.getElementById('vmetroprazo').value
      var valordescont = window.document.querySelector('input#vmetrovista').value
      
   }else{
      var valorkg = window.document.querySelector('input#voitoprazo').value
      var valordescont = window.document.querySelector('input#voitovista').value
   }
        
      var qtdmetros = window.document.getElementById("qtdmetro")
      var total = Number(qtdmetros.value) * pesoselec

      resp.innerText = 
          `${Number(qtdmetros.value)} metros de cano de cobre ${bitselect}.
          Peso Total: ${total.toFixed(2)}kg`

      if(Number(qtdmetros.value) * pesoselec > 7.7){         
         resp.innerText += `
         Promoção acima de 8kg!!`
      }
         
      resp.innerText += 
      
      `
      
      Valor a prazo: R$ ${(total*valorkg).toFixed(2)}
        A vista com desconto: R$ ${(total*valordescont).toFixed(2)}
        
        *Valor do metro sai por: ${(pesoselec * valorkg).toFixed(2)}`

        resp.style.background = "white"
        resp.style.color = 'black'
        resp.style.borderRadius = "10px"
        resp.style.border = "solid black 2px"
        resp.style.padding = "15px 10px"
        resp.style.fontWeight = "700"
        resp.style.textAlign = 'center'
     
      } 
  }