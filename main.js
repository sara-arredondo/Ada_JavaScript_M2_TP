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

    function cambioModoClaro() {
        if ($body.classList.contains("modo-oscuro")) {
            $body.classList.remove("modo-oscuro");
            $body.classList.add("modo-claro");
            $modoClaroOscuro.innerText = "MODO OSCURO";
        } else {
            $body.classList.remove("modo-claro");
            $body.classList.add("modo-oscuro");
            $modoClaroOscuro.innerText = "MODO CLARO";
        }
    }

    cambioModoClaro()

    $modoClaroOscuro.addEventListener("click", cambioModoClaro);

    // -------------------------------------- definicion de variables para panel de imagen y texto ------------------------------------------------------------

    const $ = element => document.querySelector(element);

    const $inputUrl = $("#url");
    const $imgContainer = $("#img-container");
    const $inputColor = $("#color");
    const $colorValue = $("#color-value");
    const $blendModeSelect = $("#blend-mode-select");
    const $inputBrillo = $("#brillo");
    const $inputOpacidad = $("#opacidad");
    const $inputContraste = $("#contraste");
    const $inputDesenfoque = $("#desenfoque");
    const $inputGrises = $("#grises");
    const $inputSepia = $("#sepia");
    const $inputHue = $("#hue");
    const $inputSaturacion = $("#saturacion");
    const $inputNegativo = $("#negativo");
    const $buttonReset = $("#reset");
    const $memeContainer = $("#meme-container");
    const $buttonDownload = $(".button-download-style");
    const $inputTopTxt = $("#input-top-txt");
    const $topTxtContainer = $("#top-txt-container");
    const $inputBottomTxt = $("#input-bottom-txt");
    const $bottomTxtContainer = $("#bottom-txt-container");
    const $inputTopTxtNone = $("#input-toptxt-none");
    const $inputBottomTxtNone = $("#input-bottomtxt-none");
    const $inputFontFamily = $("#font-family");
    const $inputInterlineado = $("#interlineado");
    const $fontSize = $("#font-size");
    const $inputEspaciado = $("#espaciado");
    const $inputJustify = $("#input-justify");
    const $inputLeft = $("#input-left");
    const $inputRight = $("#input-right");
    const $inputNinguno = $("#input-ninguno");
    const $inputClaro = $("#input-claro");
    const $inputOscuro = $("#input-oscuro");
    const $inputColorTxt = $("#input-color-txt");
    const $inputColorBg = $("#input-color-bg");
    const $colorValueTxt = $("#color-value-txt");
    const $colorValueBg = $("#color-value-bg");
    const $colorBackground = $("#meme-container");
    const $fondoTransparente = $("#fondo-transparente");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //------------------------------------------------------------INPUTS PANEL IMAGEN------------------------------------------------------------------------------

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //----------------------------------------------------------- input ingresar imagen --------------------------------- -------------------

    $inputUrl.addEventListener("input", () => {
        console.log($inputUrl.value);
        $imgContainer.style.backgroundImage = `url(${$inputUrl.value})`;
        $imgContainer.style.height = "70%";
    })

    //------------------------------------------------------------ input seleccionar color --------------------------------- -------------------

    $inputColor.addEventListener("input", () => {
        $imgContainer.style.backgroundColor = $inputColor.value;
        $colorValue.innerText = $inputColor.value;
        console.log($inputColor.value);
    })

    //---------------------------------------------------------------- input blend mode --------------------------------- -------------------

    $blendModeSelect.addEventListener("input", () => {
        console.log($blendModeSelect.value);
        $imgContainer.style.backgroundBlendMode = $blendModeSelect.value;
    })

    //------------------------------------------------------------------- inputs filtros --------------------------------- -------------------


    /*CODIGO ANTERIOR A TENER LA FUNCION
    $inputBrillo.addEventListener("input", () => {
        console.log ($inputBrillo.value)
        $imgContainer.style.filter = `brightness(${$inputBrillo.value})`
    })
    
    $inputOpacidad.addEventListener("input", () => {
        console.log ($inputOpacidad.value)
        $imgContainer.style.filter = `opacity(${$inputOpacidad.value})`
    })
    
    $inputContraste.addEventListener("input", () => {
        const porcentaje = $inputContraste.value; // Obtiene el valor en porcentaje
        const contraste = porcentaje / 100;
    
        console.log ($inputContraste.value)
        $imgContainer.style.filter = `contrast(${contraste})`
    })
    
    $inputDesenfoque.addEventListener("input", () => {
        console.log ($inputDesenfoque.value)
        $imgContainer.style.filter = `blur(${$inputDesenfoque.value}px)`
    })
    
    $inputGrises.addEventListener("input", () => {
        const porcentaje = $inputGrises.value; // Obtiene el valor en porcentaje
        const grises = porcentaje / 100;
    
        console.log ($inputGrises.value)
        $imgContainer.style.filter = `grayscale(${grises})`
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
        const porcentaje = $inputSaturacion.value; // Obtiene el valor en porcentaje
        const saturacion = porcentaje / 100;       // Convierte el porcentaje al formato de saturación CSS
    
        console.log ($inputSaturacion.value)
    
        $imgContainer.style.filter = `saturate(${saturacion})`
    })
    
    $inputNegativo.addEventListener("input", () => {
        console.log ($inputNegativo.value)
        $imgContainer.style.filter = `invert(${$inputNegativo.value})`
    })
    
    */

    // CODIGO FUNCION SUMAR FILTROS

    const filtros = {
        brillo: "1",
        opacidad: "1",
        contraste: "100",
        desenfoque: "0",
        grises: "0",
        sepia: "0",
        hue: "0",
        saturacion: "100",
        negativo: "0"
    };

    function sumarFiltros() {
        // acá creo que estoy concatenando los valores para que se vayan sumando
        const filtrosAplicados = `
        brightness(${filtros.brillo})
        opacity(${filtros.opacidad})
        contrast(${filtros.contraste}%)
        blur(${filtros.desenfoque}px)
        grayscale(${filtros.grises}%)
        sepia(${filtros.sepia}%)
        hue-rotate(${filtros.hue}deg)
        saturate(${filtros.saturacion}%)
        invert(${filtros.negativo})
    `;

        // esta linea es en la que aplico los filtros concatenados al contenedor 
        $imgContainer.style.filter = filtrosAplicados;
    }

    // la diferencia con el codigo anterior es que al escuchador de eventos le aplico la función filtros así siempre tendrá
    // los filtros  concatenados y no tengo que hacer la cada vez que que la persona aplique un filtro y esto soluciona 
    // el problema de tenerlo que aplicar en orden para que se sumen

    $inputBrillo.addEventListener("input", () => {
        filtros.brillo = $inputBrillo.value;
        sumarFiltros();
    });

    $inputOpacidad.addEventListener("input", () => {
        filtros.opacidad = $inputOpacidad.value;
        sumarFiltros();
    });

    $inputContraste.addEventListener("input", () => {
        filtros.contraste = $inputContraste.value;
        sumarFiltros();
    });

    $inputDesenfoque.addEventListener("input", () => {
        filtros.desenfoque = $inputDesenfoque.value;
        sumarFiltros();
    });

    $inputGrises.addEventListener("input", () => {
        filtros.grises = $inputGrises.value;
        sumarFiltros();
    });

    $inputSepia.addEventListener("input", () => {
        filtros.sepia = $inputSepia.value;
        sumarFiltros();
    });

    $inputHue.addEventListener("input", () => {
        filtros.hue = $inputHue.value;
        sumarFiltros();
    });

    $inputSaturacion.addEventListener("input", () => {
        filtros.saturacion = $inputSaturacion.value;
        sumarFiltros();
    });

    $inputNegativo.addEventListener("input", () => {
        filtros.negativo = $inputNegativo.value;
        sumarFiltros();
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    //------------------------INPUTS PANEL TEXT----------------------------------------------

    ///////////////////////////////////////////////////////////////////////////////////////////


    //---------------------------- input ingresar top text --------------------------------- -------------------

    $inputTopTxt.addEventListener("input", () => {
        console.log($inputTopTxt.value)
        $topTxtContainer.innerText = $inputTopTxt.value
    })

    //---------------------------- input ingresar bottom text --------------------------------- -------------------

    $inputBottomTxt.addEventListener("input", () => {
        console.log($inputBottomTxt.value)
        $bottomTxtContainer.innerText = $inputBottomTxt.value
    })


    //---------------------------- funcion para agrandar imagen al 100 -----------------------------------------------------

    function agrandarImg() {
        if ($inputTopTxtNone.checked && $inputBottomTxtNone.checked) {
            console.log("Ambos checkboxes están marcados.");
            $imgContainer.style.height = "100%"
            $imgContainer.style.backgroundSize = "cover"

        }
    }

    $inputTopTxtNone.addEventListener("change", agrandarImg)
    $inputBottomTxtNone.addEventListener("change", agrandarImg)

    agrandarImg()

    //---------------------------- funcion para poner fondo transparentes-----------------------------------------------------

    $fondoTransparente.addEventListener("change", () => {
        if ($fondoTransparente.checked) {
            $imgContainer.style.height = "100%"
            $colorBackground.style.position = "relative"

            $topTxtContainer.style.position = "absolute"
            $topTxtContainer.style.zIndex = "99999"
            $topTxtContainer.style.top = "0"

            $bottomTxtContainer.style.position = "absolute"
            $bottomTxtContainer.style.zIndex = "99999"
            $bottomTxtContainer.style.bottom = "0"
        }else {
            $imgContainer.style.height = "70%"
            $colorBackground.style.position = ""

            $topTxtContainer.style.position = ""
            $topTxtContainer.style.zIndex = ""
            $topTxtContainer.style.top = ""

            $bottomTxtContainer.style.position = ""
            $bottomTxtContainer.style.zIndex = ""
            $bottomTxtContainer.style.bottom = ""
        }
    })

    //---------------------------- input interlineado top y bottom -----------------------------------------------------


    function interlineado () {

        $inputInterlineado.addEventListener("input", () => {
            console.log($inputInterlineado.value)
            $topTxtContainer.style.lineHeight = `${$inputInterlineado.value}em`
        })
    
        $inputInterlineado.addEventListener("input", () => {
            console.log($inputInterlineado.value)
            $bottomTxtContainer.style.lineHeight = `${$inputInterlineado.value}em`
        })
    }
    
    interlineado()

    //---------------------------- input font fmily -----------------------------------------------------

    $inputFontFamily.addEventListener("input", () => {
        console.log($inputFontFamily.value)
        $topTxtContainer.style.fontFamily = $inputFontFamily.value
        $bottomTxtContainer.style.fontFamily = $inputFontFamily.value
    })


    //---------------------------- input cambiar tamano de texto -----------------------------------------------------

    $fontSize.addEventListener("input", () => {
        console.log($fontSize.value)
        $topTxtContainer.style.fontSize = `${$fontSize.value}px`
        $bottomTxtContainer.style.fontSize = `${$fontSize.value}px`
    })

    //---------------------------- input cambiar contorno -----------------------------------------------------

    function cambiarContorno () {

        $inputNinguno.addEventListener("click", () => {
            $topTxtContainer.style.webkitTextStroke = "0px"
        })
    
        $inputClaro.addEventListener("click", () => {
            $topTxtContainer.style.webkitTextStroke = "1px #F5EDE2"
        })
    
        $inputOscuro.addEventListener("click", () => {
            $topTxtContainer.style.webkitTextStroke = "1px #191B1E"
        })  
    }
    
    cambiarContorno()
    //---------------------------- input espaciado -----------------------------------------------------


    $inputEspaciado.addEventListener("input", () => {
        $topTxtContainer.style.letterSpacing = `${$inputEspaciado.value}em`
        $bottomTxtContainer.style.letterSpacing = `${$inputEspaciado.value}em`
    })


    //---------------------------- funcion de alineado de texto y funcionalidad del checkbox -----------------------------------------------------


    function alignText() {

        $inputJustify.addEventListener("click", () => {
            $topTxtContainer.style.textAlign = "center"
            $bottomTxtContainer.style.textAlign = "center"
        })

        $inputLeft.addEventListener("click", () => {
            $topTxtContainer.style.textAlign = "left"
            $bottomTxtContainer.style.textAlign = "left"
        })

        $inputRight.addEventListener("click", () => {
            $topTxtContainer.style.textAlign = "right"
            $bottomTxtContainer.style.textAlign = "right"
        })
    }

    $inputBottomTxtNone.addEventListener("change", () => {
        if ($inputBottomTxtNone.checked) {
            $bottomTxtContainer.style.display = "none"
            $imgContainer.style.height = "80%"
        } else {
            $bottomTxtContainer.style.display = ""
            //$bottomTxtContainer.style.justifyContent = "center"
            $bottomTxtContainer.style.wordBreak = "break-word"
            $bottomTxtContainer.innerText = "BOTTOM TEXT"
        }
    })

    $inputTopTxtNone.addEventListener("change", () => {
        if ($inputTopTxtNone.checked) {
            $topTxtContainer.style.display = "none"
            $imgContainer.style.height = "80%"
        } else {
            $topTxtContainer.style.display = ""
           // $topTxtContainer.style.justifyContent = "center"
            $topTxtContainer.style.wordBreak = "break-word";
            $topTxtContainer.innerText = "TOP TEXT"
        }
    })

    alignText()

    //codigo con funcion

    //function textAlign(alignment) {
    // $topTxtContainer.style.textAlign = alignment;
    // $bottomTxtContainer.style.textAlign = alignment;
    //}

    // asigno eventos a los botones
    //$inputJustify.addEventListener("click", () => textAlign("center"));
    //$inputLeft.addEventListener("click", () => textAlign("left"));
    //$inputRight.addEventListener("click", () => textAlign("right"));


    // ------------------------codigo para cambiar color texto y fondo texto---------------------------


    $inputColorTxt.addEventListener("input", () => {
        $topTxtContainer.style.color = $inputColorTxt.value
        $bottomTxtContainer.style.color = $inputColorTxt.value
        $colorValueTxt.innerText = $inputColorTxt.value
    })

    $inputColorBg.addEventListener("input", () => {
        $colorBackground.style.backgroundColor = $inputColorBg.value
        $colorValueBg.innerText = $inputColorBg.value
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
        $inputContraste.min = "100"
        $inputDesenfoque.min = "0"
        $inputGrises.min = "0"
        $inputSepia.min = "0"
        $inputHue.min = "0"
        $inputSaturacion.min = "100"
        $inputNegativo.min = "0"
        $inputInterlineado.min = "0"
        $fontSize.min = "10"
        $inputEspaciado.max = "0"
    }

    valoresMin()

    // ------------------------inicio codigo para definir valores maximos---------------------------

    function valoresMax() {
        $inputBrillo.max = "1"
        $inputOpacidad.max = "1"
        $inputContraste.max = "1000"
        $inputDesenfoque.max = "10"
        $inputGrises.max = "100"
        $inputSepia.max = "100"
        $inputHue.max = "359"
        $inputSaturacion.max = "1000"
        $inputNegativo.max = "1"
        $inputInterlineado.max = "2"
        $fontSize.max = "100"
        $inputEspaciado.max = "2"
    }

    valoresMax()

    // --------------------  inicio codigo para funcion de reestablecer valores----------------------------


    function reestablecerValores() {
        $inputBrillo.value = "1"
        $inputOpacidad.value = "1"
        $inputContraste.value = "100"
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
        $inputInterlineado.value = "1.5"
        $inputEspaciado.value = "0"
        $colorValueTxt.innerText = "#000000"
        $colorValueBg.innerText = "#000000"
        $colorBackground.value = "#000000"

        filtros.brillo = "1";
        filtros.opacidad = "1";
        filtros.contraste = "100";
        filtros.desenfoque = "0";
        filtros.grises = "0";
        filtros.sepia = "0";
        filtros.hue = "0";
        filtros.saturacion = "100";
        filtros.negativo = "0";

        sumarFiltros()
    }

    reestablecerValores()

    $buttonReset.addEventListener("click", reestablecerValores)


    // --------------------  fin codigo para funcion de reestablecer valores----------------------------

}