function carregar(){
    var msg = window.document.getElementById("msg")
    var img =  window.document.getElementById("imagem")
    var data = new Date()
    var minuto = data.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = ` ${hora < 12 ? '<strong>Bom dia' : hora < 18 ? '<strong>Boa tarde' : '<strong>Boa noite'}!</strong> <br><br> Agora são ${hora} horas e ${minuto} minutos.`;
    if (hora >= 0 && hora < 12 ) {
        img.src = "img/dia.png" 
        document.body.style.background = "#e2cd9f" 
    }else if(hora >= 12 && hora < 18){
        img.src = "img/tarde.png"
        document.body.style.background = "#b9846f" 
    }else{
        img.src = "img/noite.png"
        document.body.style.background = "#515154" 
    }

}
