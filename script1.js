function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var resp = window.document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        window.alert("[ERRO] Verifique os dados e tente novamente!")

    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (fsex[0].checked) {
           gênero = `Homem` 
           document.body.style.background = "rgb(164, 174, 247)"
           if(idade >=0 && idade < 10){
            img.setAttribute("src","img/menino.png")
           }else if (idade <21){
            img.setAttribute("src","img/jovenH.png")
           }else if (idade < 50){
            img.setAttribute("src","img/adulto.png")
           }else{
            img.setAttribute("src","img/idoso.png")
           }

        }else if (fsex[1].checked){
            gênero = `Mulher`
            document.body.style.background = "rgb(213, 102, 223)"
            if(idade >=0 && idade < 10){
                img.setAttribute("src","img/menina.png")
               }else if (idade < 21){
                img.setAttribute("src","img/jovenM.png")
               }else if (idade < 50){
                img.setAttribute("src","img/adulta.png")
               }else{
                img.setAttribute("src","img/idosa.png")
               }
        }
        resp.style.textAlign = "center"
        resp.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resp.appendChild(img)
    }
}
function limparFormulario() {
   
    document.getElementById("txtano").value = "";

  
    document.getElementsByName("radsex")[0].checked = true; 
    document.getElementsByName("radsex")[1].checked = false;

   
    const resp = document.getElementById("res");
    resp.innerHTML = "Preencha os dados acima para ver o resultado!";
    
    document.body.style.background = "";
}

