alert("hola")
var correo = document.querySelector("#correo").value
ingresar()
function ingresar(){
    if(correo=="juansebastiantobar30@gmail.com"){
        document.querySelector("#disuadiendoaldemonio").style.display = none;
    }
}