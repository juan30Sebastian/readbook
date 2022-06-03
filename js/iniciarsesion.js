alert("hola")


var correo = document.querySelector("#correoelectronico").value


function nombre(){
    switch(correo){
    case "angela@gmail.com":
        document.querySelector("#titulonombre").innerHTML = "Angela Jojoa";
        document.querySelector("#titulonombre").style.display = "block";
        document.querySelector("#disuadiendoaldemonio").style.display = "block"
        document.querySelector("#formulario").style.display = "none"
        break;
        case "juansebastiantobar30@gmail.com":
        document.querySelector("#titulonombre").innerHTML = "Sebastián Tobar";
        document.querySelector("#titulonombre").style.display = "block";
        document.querySelector("#disuadiendoaldemonio").style.display = "block"
        document.querySelector("#asediado").style.display = "block"
        document.querySelector("#formulario").style.display = "none"
        break;
    }
}

 