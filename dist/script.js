var chain = $("#chains")[0];
$(".img-wrapper").mouseenter(function() {
  chain.currentTime = 0;
  chain.play();
});



document.getElementById("okButton").addEventListener(
  "click",
  () => {

    document.body.style.background="#D92323"

    document.getElementById("explicacion").hidden = true;
    document.getElementById("evento").hidden = false;
  },
  false
  );


if (window.localStorage.getItem('AvisoInicial') == undefined
  ) {

      localStorage.setItem("AvisoInicial", "ok");

  document.body.style.background="#0D0D0D";
document.getElementById("explicacion").hidden = false;
document.getElementById("evento").hidden = true;

}



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
  // Y a la fuente de la imagen le ponemos el objectURL
  $imagenPrevisualizacion.src = objectURL;
});

