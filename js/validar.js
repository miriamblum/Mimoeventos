(function(){
    //Variables
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');
    
    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
            return false;
        }
        return true;
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Completa el campo email");
            e.preventDefault();
            return false;
        }
        var expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (expReg.test(formulario.email.value)==false){
            alert("La dirección de email es incorrecta.");
            e.preventDefault();
            return false;
        }
        return true;
    };

    var validarRadio = function(e){
        if (formulario.sexo[0].checked == false && 
            formulario.sexo[1].checked == false){
            alert("Completa el campo sexo");
            e.preventDefault();
            return false;
        }
        return true;
    };
    
    var validarMensaje = function(e){
        if (formulario.mensaje.value == 0){
            alert("Completa el campo mensaje");
            e.preventDefault();
            return false;
        }
        return true;
    };

    var validarCheckbox = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepta los términos y condiciones");
            e.preventDefault();
            return false;
        }
        return true;
    };

    var validar = function(e){
        if (validarNombre(e)==true && validarRadio(e)==true && validarCheckbox(e)==true && validarEmail(e)==true && validarMensaje(e)==true) {
            alert("Muchas gracias por enviar el formulario");
        };
    };
    formulario.addEventListener("submit", validar);
}())
