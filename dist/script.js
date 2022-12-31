var chain = $("#chains")[0];

var reproduccion = 0; 
$(".img-wrapper").mouseenter(function() {

if(reproduccion==0)
{  var musica = $("#musica")[0];

  musica.currentTime = 0;
  musica.play();
  reproduccion=1;
}

  chain.currentTime = 0;
  chain.play();
});


var chain = $("#chains")[0];
$(".img-wrapper").mouseenter(function() {


  chain.currentTime = 0;
  chain.play();
});



document.getElementById("aceptacion").addEventListener(
  "click",
  () => {
     document.getElementById("aceptacion").hidden = true;
      localStorage.setItem("AvisoInicial", "ok");
       myContent = moment().locale('es').format('DD/MM/YYYY HH:mm:ss');
    localStorage.setItem("myContent", myContent);
        notificacion.submit();


    document.body.style.background="#D92323";

    document.getElementById("explicacion").hidden = true;
    document.getElementById("evento").hidden = false;
  },
  false
  );






const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
  $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);

  document.getElementById("autentificacion").hidden = false;
  // Y a la fuente de la imagen le ponemos el objectURL
  $imagenPrevisualizacion.src = objectURL;
});

const codigo = document.getElementById("codigo");

// Escuchar cuando cambie
codigo.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
if(codigo.value==5117){
  document.getElementById("explicacion").hidden = true;
  document.getElementById("aceptacion").hidden = false;
}

});