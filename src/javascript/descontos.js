
function dardesconto(){
    let valorSdesc = window.document.getElementById("valorsdesc")
    let valorCdesc = Number(valorSdesc.value)
    var resdesconto = window.document.getElementById("descDesconto")
    resdesconto.innerHTML = ""

    if(valorSdesc.value.length <=0){
        resdesconto.innerText = ` Digite um valor antes!! `
        resdesconto.style.color = "red"
    }else{
        resdesconto.style.color = ""
        let listDesconto = [5, 7, 9, 10]
        let item = 0
 
        for(item in listDesconto){
            resdesconto.innerHTML += 
            `${listDesconto[item]}% de desconto: ${(valorCdesc-(valorCdesc/100*listDesconto[item])).toFixed(2)} <br>` 
            item += 1
        }
        
    }
    resdesconto.style.fontWeight = "bold"
    resdesconto.style.background += "white"
    resdesconto.style.color += "black"
    resdesconto.style.padding += "10px"
    resdesconto.style.borderRadius += "10px"
    resdesconto.style.textAlign += "center"
    resdesconto.style.fontSize += "20px"
    resdesconto.style.boxShadow += "0px 0px 10px 5px rgb(0, 0, 0)"
}
