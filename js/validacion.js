$(document).ready(function () {
    // Regex patterns
    var nameRegex = /[A-z]{2}[A-z\s]{0,30}/;
    var dniRegex = "^[0-9]{8}$";
    var telRegex = "^[0-9]{9}$";
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var postalRegex = "^[0-9]{5}$";

    // DNI Letter Array
    var dniLetters = ["T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E"];

    // Date
    var fecha = new Date();
    var fechaActual = fecha.getFullYear().toString() + (fecha.getMonth() + 1).toString() + fecha.getDate().toString();

    // Check input functions
    function checkInput(name, regex) {
        let fullName = `input[name=${name}]`;
        return $(fullName).val().match(regex);
    }

    function checkDate(name, age) {
        if ($(name).val() != "") {
            let fechaInput = $(name).val().replaceAll("-", "");
            let edad = (fechaActual - fechaInput) / 10000;
            return edad >= age && edad <= 160;
        } else {
            return false;
        }
    }

    // Check Form
    function checkForm(name) {
        $(name + " *").on("input", function () {
            if (checkInput("nombre", nameRegex) && checkInput("apellidos", nameRegex) &&
                checkInput("dni", dniRegex) && checkDate("input[type=date]", 14) &&
                checkInput("telefono", telRegex) && checkInput("correo", emailRegex) &&
                checkInput("direccion", nameRegex) && checkInput("cp", postalRegex) &&
                document.querySelector("input[type=radio]:checked").checked) {
                $("button").removeAttr("disabled");
            } else {
                $("button").attr("disabled", "disabled");
            }
        });
    }

    $(function () {
        checkForm("form");
    });

    // Autofills the DNI Letter Field
    $("input[name=dni]").on("input", function () {
        if ($("input[name=dni]").val().length == 8) {
            let dniVal = parseInt($("input[name=dni]").val());
            dniVal %= 23;
            let dniLetter = dniLetters[dniVal];
            $("input[name=dniLetter]").val(dniLetter);
        } else {
            $("input[name=dniLetter]").val("");
        }
    });

    // Displays the medical observations textarea's box
    $("input[type=radio]").on("input", function () {
        if ($("input[type=radio]:checked").val() == "si") {
            $("label[for=observaciones]").css("display", "inline");
            $("textarea").css("display", "inline");
        } else {
            $("label[for=observaciones]").css("display", "none");
            $("textarea").css("display", "none");
        }
    });

});