var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blendersound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

console.log('Ejecutando');

function controlarLicuadora(){
  if (estadoLicuadora == "apagada"){
    estadoLicuadora = "encendido";
    hacerBrrBrr();
    licuadora.classList.add("active")
    // console.log("me prendiste");
  } else {
    estadoLicuadora = "apagada";
    hacerBrrBrr();
    licuadora.classList.remove("active")
    // console.log("me apagaste");
  }
}

//.paused es una propiedad de js que me devuelve .paused si está en pausa y false si se está reproduciendo 

function hacerBrrBrr(){
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;

  }
}
