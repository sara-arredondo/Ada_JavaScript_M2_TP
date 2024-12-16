window.onload = () => {

// ---------------------------------------------inicio codigo modo panel de intercambio de paneles ---------------------------------------------------

//Cuando se presiona el boton del nav texto se ponga en display none el modulo de imagen y se ponga en display flex el modulo texto y al revés.

const $buttonTxt = document.querySelector("#button-txt");
const $buttonImg = document.querySelector("#button-img");
const $panelImg = document.querySelector("#panel-ctrl-img");
const $panelTxt = document.querySelector("#panel-ctrl-txt");

$buttonImg.addEventListener("click", () => {
    $panelTxt.style.display = "none";
    $panelImg.style.display = "flex";
})

$buttonTxt.addEventListener("click", () => {
    $panelImg.style.display = "none";
    $panelTxt.style.display = "flex";
})


// --------------------------------------------------inicio codigo modo claro y modo oscuro---------------------------------------------------------------

const $body = document.querySelector("body");
const $modoClaroOscuro = document.querySelector("#button-oscuro-claro");

function cambioModoClaro () {
    if($body.classList.contains("modo-claro")) {
        $body.classList.remove("modo-claro");
        $body.classList.add("modo-oscuro");
        $modoClaroOscuro.innerText = "MODO CLARO";
    } else {
        $body.classList.remove("modo-oscuro");
        $body.classList.add("modo-claro");
        $modoClaroOscuro.innerText = "MODO OSCURO";
    }
}

cambioModoClaro ()

$modoClaroOscuro.addEventListener("click", cambioModoClaro)

// -------------------------------------- definicion de variables para panel de imagen y texto ------------------------------------------------------------

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
const $memeContainer = $("#meme-container")
const $buttonDownload = $(".button-download-style")
const $inputTopTxt =$("#input-top-txt")
const $topTxtContainer =$("#top-txt-container")
const $inputBottomTxt =$("#input-bottom-txt")
const $bottomTxtContainer =$("#bottom-txt-container")
const $inputTopTxtNone =$("#input-toptxt-none")
const $inputBottomTxtNone =$("#input-bottomtxt-none")
const $inputFontFamily =$("#font-family")
const $inputInterlineado =$("#interlineado")
const $fontSize = $("#font-size")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//------------------------------------------------------------INPUTS PANEL IMAGEN------------------------------------------------------------------------------

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//----------------------------------------------------------- input ingresar imagen --------------------------------- -------------------

$inputUrl.addEventListener("input", () => {
    console.log($inputUrl.value)
    $imgContainer.style.backgroundImage = `url(${$inputUrl.value})`
    $imgContainer.style.height = "70%"
})

//------------------------------------------------------------ input seleccionar color --------------------------------- -------------------

$inputColor.addEventListener("input", () => {
    $imgContainer.style.backgroundColor = $inputColor.value
    $colorValue.innerText = $inputColor.value
    console.log ($inputColor.value)
})

//---------------------------------------------------------------- input blend mode --------------------------------- -------------------

$blendModeSelect.addEventListener("input", () => {
    console.log ($blendModeSelect.value)
    $imgContainer.style.backgroundBlendMode = $blendModeSelect.value
})
   
//------------------------------------------------------------------- inputs filtros --------------------------------- -------------------

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

///////////////////////////////////////////////////////////////////////////////////////////////////

//------------------------INPUTS PANEL TEXT----------------------------------------------

///////////////////////////////////////////////////////////////////////////////////////////


//---------------------------- input ingresar top text --------------------------------- -------------------

$inputTopTxt.addEventListener("input", () => {
    console.log ($inputTopTxt.value)
    $topTxtContainer.innerText = $inputTopTxt.value
})

//---------------------------- input ingresar bottom text --------------------------------- -------------------

$inputBottomTxt.addEventListener("input", () => {
    console.log ($inputBottomTxt.value)
    $bottomTxtContainer.innerText = $inputBottomTxt.value
})


//---------------------------- input sin texto superior  -----------------------------------------------------

$inputTopTxtNone.addEventListener("change", () => {
    if ($inputTopTxtNone.checked) {
        $topTxtContainer.style.display = "none"
        $imgContainer.style.height = "80%"
    } else {
        $topTxtContainer.style.display = "flex"
        $topTxtContainer.style.justifyContent = "center"
        $topTxtContainer.style.wordBreak = "break-word";
    }  
})

//---------------------------- input sin texto inferior  -----------------------------------------------------

$inputBottomTxtNone.addEventListener("change", () => {
    if ($inputBottomTxtNone.checked) {
        $bottomTxtContainer.style.display = "none"
        $imgContainer.style.height = "80%"
    } else {
        $bottomTxtContainer.style.display = "flex"
        $bottomTxtContainer.style.justifyContent = "center"
        $bottomTxtContainer.style.wordBreak = "break-word"
    }  
})

//---------------------------- funcion para agrandar imagen al 100 -----------------------------------------------------

function agrandarImg () {
    if ($inputTopTxtNone.checked && $inputBottomTxtNone.checked) {
        console.log("Ambos checkboxes están marcados.");
        $imgContainer.style.height = "100%"
        $imgContainer.style.backgroundSize = "cover"
    }
}

$inputTopTxtNone.addEventListener("change", agrandarImg)
$inputBottomTxtNone.addEventListener("change", agrandarImg)

agrandarImg ()

//---------------------------- input interlineado top y bottom -----------------------------------------------------

$inputInterlineado.addEventListener("input", () => {
    console.log ($inputInterlineado.value)
    $topTxtContainer.style.lineHeight = `${$inputInterlineado.value}em`

})

$inputInterlineado.addEventListener("input", () => {
    console.log ($inputInterlineado.value)
    $bottomTxtContainer.style.lineHeight = `${$inputInterlineado.value}em`

})

//---------------------------- input font fmily -----------------------------------------------------

$inputFontFamily.addEventListener("input", () => {
    console.log ($inputFontFamily.value)
    $topTxtContainer.style.fontFamily = $inputFontFamily.value
    $bottomTxtContainer.style.fontFamily = $inputFontFamily.value
})

//---------------------------- input cambiar tamano de texto -----------------------------------------------------

$fontSize.addEventListener("input", () => {
    console.log ($fontSize.value)
    $topTxtContainer.style.fontSize = `${$fontSize.value}px`
    $bottomTxtContainer.style.fontSize = `${$fontSize.value}px`
})

//---------------------------- input cambiar el contorno del input texto -----------------------------------------------------




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
    $inputInterlineado.min = "0"
    $fontSize.min = "10"
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
    $inputInterlineado.max = "2"
    $fontSize.max = "100"
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
    $colorValue.innerText = "#000000"
    $topTxtContainer.innerText = "TOP TEXT"
    $bottomTxtContainer.innerText = "BOTTOM TEXT"
    $imgContainer.style.backgroundColor = "#000000"
    $imgContainer.style.height = "70%" 
    $fontSize.value = "19"
}

reestablecerValores()

$buttonReset.addEventListener("click", reestablecerValores)


// --------------------  fin codigo para funcion de reestablecer valores----------------------------

}