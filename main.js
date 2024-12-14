window.onload = () => {

// ------------------ definicion de variables y query selector-------------------

const $ = element => document.querySelector(element)

const $colorValue = $("color-value")
const $inputBrillo = $("#brillo")
const $inputOpacidad = $("#opacidad")
const $inputConstraste = $("#contraste")
const $inputDesenfoque = $("#desenfoque")
const $inputGrises = $("#grises")
const $inputSepia = $("#sepia")
const $inputHue = $("#hue")
const $inputSaturacion = $("#saturacion")
const $inputNegativo = $("#negativo")
const $buttonReset = $("#reset")
const $inputColor = $("#color")
const $imgContainer = $("#img-container")
const $buttonDownload = $(".button-download-style")
const $memeContainer = $("#meme-container")
const $topText =$("#top-text")
const $bottomText =$("#bottom-text")

//---------------------------- input seleccionar color --------------------------------- -------------------

$inputColor.addEventListener("input", () => {
    $imgContainer.style.backgroundColor = $inputColor.value
    //$colorValue.innerText = $inputColor.value
    console.log ($inputColor.value)
})
   
// ------------------------codigo para descargar imagen---------------------------

$buttonDownload.addEventListener("click", () => {
    domtoimage.toBlob($memeContainer).then((blob) => {
        saveAs(blob, "mi-primer-meme.png");
      });
})

// --------------------  inicio codigo para funcion de reestablecer valores----------------------------


function reestablecerValores() {
    $inputBrillo.value = "1"
    $inputOpacidad.value = "1"
    $inputConstraste.value = "100"
    $inputDesenfoque.value = "0"
    $inputGrises.value = "0"
    $inputSepia.value = "0"
    $inputHue.value = "0"
    $inputSaturacion.value = "100"
    $inputNegativo.value = "1"
}

reestablecerValores()

$buttonReset.addEventListener("click", reestablecerValores)


// --------------------  fin codigo para funcion de reestablecer valores----------------------------



}