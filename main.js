// ------------------ definicion de variables para filtros-------------------

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
