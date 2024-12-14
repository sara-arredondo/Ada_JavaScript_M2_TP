window.onload = () => {

// ------------------ definicion de variables y query selector-------------------

const $ = element => document.querySelector(element)

const $inputUrl = $("#url")
const $imgContainer = $("#img-container")
const $inputColor = $("#color")
const $colorValue = $("#color-value")
const $blendModeSelect = $("#blend-mode-select")
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
const $topText =$("#top-text")
const $bottomText =$("#bottom-text")
const $memeContainer = $("#meme-container")
const $buttonDownload = $(".button-download-style")



//---------------------------- input ingresar imagen --------------------------------- -------------------

$inputUrl.addEventListener("input", () => {
    console.log($inputUrl.value)
    $imgContainer.style.backgroundImage = `url(${$inputUrl.value})`
})

//---------------------------- input seleccionar color --------------------------------- -------------------

$inputColor.addEventListener("input", () => {
    $imgContainer.style.backgroundColor = $inputColor.value
    $colorValue.innerText = $inputColor.value
    console.log ($inputColor.value)
})

//---------------------------- input blend mode --------------------------------- -------------------

$blendModeSelect.addEventListener("input", () => {
    console.log ($blendModeSelect.value)
    $imgContainer.style.backgroundBlendMode = $blendModeSelect.value
})
   








// ------------------------codigo para descargar imagen---------------------------

$buttonDownload.addEventListener("click", () => {
    domtoimage.toBlob($memeContainer).then((blob) => {
        saveAs(blob, "mi-primer-meme.png");
      });
})

// ------------------------fin codigopara descargar imagen---------------------------



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