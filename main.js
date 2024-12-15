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
   
//---------------------------- inputs filtros --------------------------------- -------------------

$inputBrillo.addEventListener("input", () => {
    console.log ($inputBrillo.value)
    $imgContainer.style.filter = `brightness(${$inputBrillo.value})`
})

$inputOpacidad.addEventListener("input", () => {
    console.log ($inputOpacidad.value)
    $imgContainer.style.filter = `opacity(${$inputOpacidad.value})`
})

$inputConstraste.addEventListener("input", () => {
    console.log ($inputConstraste.value)
    $imgContainer.style.filter = `contrast(${$inputConstraste.value})`
})

$inputDesenfoque.addEventListener("input", () => {
    console.log ($inputDesenfoque.value)
    $imgContainer.style.filter = `blur(${$inputDesenfoque.value}px)`
})

$inputGrises.addEventListener("input", () => {
    console.log ($inputGrises.value)
    $imgContainer.style.filter = `grayscale(${$inputGrises.value})`
})

$inputSepia.addEventListener("input", () => {
    console.log ($inputSepia.value)
    $imgContainer.style.filter = `sepia(${$inputSepia.value})`
})

$inputHue.addEventListener("input", () => {
    console.log ($inputHue.value)
    $imgContainer.style.filter = `hue-rotate(${$inputHue.value}deg)`
})

$inputSaturacion.addEventListener("input", () => {
    console.log ($inputSaturacion.value)
    $imgContainer.style.filter = `saturate(${$inputSaturacion.value})`
})

$inputNegativo.addEventListener("input", () => {
    console.log ($inputNegativo.value)
    $imgContainer.style.filter = `invert(${$inputNegativo.value})`
})

// ------------------------codigo para descargar imagen---------------------------

$buttonDownload.addEventListener("click", () => {
    domtoimage.toBlob($memeContainer).then((blob) => {
        saveAs(blob, "mi-primer-meme.png");
      });
})

// ------------------------inicio codigo para definir valores minimos---------------------------

function valoresMin() {
    $inputBrillo.min = "0"
    $inputOpacidad.min = "0"
    $inputConstraste.min = "100"
    $inputDesenfoque.min = "0"
    $inputGrises.min = "0"
    $inputSepia.min = "0"
    $inputHue.min = "0"
    $inputSaturacion.min = "100"
    $inputNegativo.min = "0"
}

valoresMin()

// ------------------------inicio codigo para definir valores maximos---------------------------

function valoresMax() {
    $inputBrillo.max = "1"
    $inputOpacidad.max= "1"
    $inputConstraste.max = "1000"
    $inputDesenfoque.max = "10"
    $inputGrises.max = "100"
    $inputSepia.max = "100"
    $inputHue.max = "359"
    $inputSaturacion.max = "1000"
    $inputNegativo.max = "1"
}

valoresMax()

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