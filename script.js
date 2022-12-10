function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `agora são ${hora} horas e ${minuto} minutos`;

    if(hora >= 0 && hora < 12){
       // BOM DIA   
       img.src = 'manhã.png';
       document.body.style.background = 'rgb(19,147,173)'
    } 
    
    else if(hora >= 12 && hora < 18){
       // BOA TARDE
       img.src = 'tarde.png';
       document.body.style.background = 'rgb(245,177,109)'
    }

    else{
       // BOA NOITE
       img.src = 'noite-lua.png';
       document.body.style.background = 'rgb(5,68,110)'
    }


}