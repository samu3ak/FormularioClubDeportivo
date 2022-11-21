$(document).ready(function () {
    // Member Class

    class Member {
        constructor() {
            this.nombre = $("input[name=nombre]").val().trim();
            this.apellidos = $("input[name=apellidos]").val().trim();
            this.dni = $("input[name=dni]").val().trim() + dniLetter;
            this.fechaNacimiento = $("input[type=date]").val();
            this.edad = Math.trunc(edad);
            this.telefono = $("input[name=telefono]").val().trim();
            this.correo = $("input[name=correo]").val().trim();
            this.codigoPostal = $("input[name=cp]").val().trim();
        }
    }





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
        let matches = $(fullName).val().match(regex);
        if (!matches) {
            matches = false;
            $(fullName).css("border", "1px solid red");
        } else {
            $(fullName).css("border", "none");
            matches = true;
        }
        return matches;
    }

    var edad = 0;
    function checkDate(name, age) {
        if ($(name).val() != "") {
            let fechaInput = $(name).val().replaceAll("-", "");
            edad = (fechaActual - fechaInput) / 10000;
            return edad >= age && edad <= 160;
        } else {
            return false;
        }
    }

    // Check Form
    function checkForm(name) {
        $(name + " *").on("input", function () {
            if (checkInput("nombre", nameRegex) & checkInput("apellidos", nameRegex) &
                checkInput("dni", dniRegex) & checkDate("input[type=date]", 14) &
                checkInput("telefono", telRegex) & checkInput("correo", emailRegex)
                & checkInput("cp", postalRegex)) {
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
    var dniLetter = "A";
    $("input[name=dni]").on("input", function () {
        if ($("input[name=dni]").val().length == 8) {
            let dniVal = parseInt($("input[name=dni]").val());
            dniVal %= 23;
            dniLetter = dniLetters[dniVal];
            $("input[name=dniLetter]").val(dniLetter);
        } else {
            $("input[name=dniLetter]").val("");
        }
    });

    // Autofills the age field based on the date input field
    $("input[type=date]").on("input", function () {
        checkDate("input[type=date]", 14);
        if (edad >= 0 && edad <= 160) {
            $("input[name=age]").val(Math.trunc(edad) + " años");
            if (edad < 14) {
                $("input[name=age]").css("border", "1px solid red");
            } else {
                $("input[name=age]").css("border", "none");
            }
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

    // LocalStorage Management onclick Button
    $("button").click(function (e) {
        e.preventDefault();
        var socio = new Member();
        localStorage.setItem("socio", JSON.stringify(socio));
        location.href = "./formulario2.html";
    });

});