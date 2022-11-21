$(document).ready(function () {
    // Theme Change Logic

    if (localStorage.getItem("theme") != null) {
        var theme = localStorage.getItem("theme");
        if (theme != "darkTheme") {
            $("head #styles").attr("href", "../css/styles.css");
            $("head #page").attr("href", "../css/formulario2.css");
        } else {
            $("head #styles").attr("href", "../css/styles_dark.css");
            $("head #page").attr("href", "../css/formulario2_dark.css");
        }
    }

    // MemberBasket Class (Final Member Class)

    var member = JSON.parse(localStorage.getItem("socio"));
    class MemberBasket {
        constructor() {
            // Personal Info
            this.nombre = member.nombre;
            this.apellidos = member.apellidos;
            this.dni = member.dni;
            this.fechaNacimiento = member.fechaNacimiento;
            this.edad = member.edad;
            this.telefono = member.telefono;
            this.correo = member.correo;
            this.codigoPostal = member.codigoPostal;
            // Basketball-related Stuff
            this.posicion = $("select[name=posicion]").val();
            this.experiencia = $("input[name=anhos]").val();
            this.anterioridad = $("input[name=anterioridad]:checked").val();
            this.suscripcion = $("select[name=suscripcion]").val();
            this.descuento = $("input[name=descuento]:checked").val();
            this.horario = $("select[name=horario]").val();
            this.diferenciaDescuento = 0;
            this.cuota = this.calcularPrecio();
        }

        calcularPrecio() {
            let precio = 0;
            let suscripcion = $("select[name=suscripcion]").val();
            switch (suscripcion) {
                case "Basica (15€)":
                    precio = 15;
                    break;
                case "Media (30€)":
                    precio = 30;
                    break;
                case "Avanzada (40€)":
                    precio = 40;
                    break;
                case "Completa (50€)":
                    precio = 50;
                    break;
                default:
                    console.log("Tipo de suscripción no válida");
                    break;
            }
            if (this.descuento == "Si") {
                this.diferenciaDescuento = precio * 0.30;
                precio -= precio * 0.30;
            }
            return precio;
        }
    }
    // Regex patterns
    var numberRegex = /^\d*$/;

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

    function checkNumber(name, limit) {
        let fullName = `input[name=${name}]`;
        let number = parseInt($(fullName).val());
        let matches = Number.isInteger(number);
        if (!matches || !(number >= 0 && number <= limit)) {
            matches = false;
            $(fullName).css("border", "1px solid red");
        } else {
            $(fullName).css("border", "none");
            matches = true;
        }
        return matches;
    }

    // Check Form
    function checkForm(name) {
        $(name + " *").on("input", function () {
            if (checkNumber("anhos", 80)) {
                $("button").removeAttr("disabled");
            } else {
                $("button").attr("disabled", "disabled");
            }
        });
    }

    $(function () {
        checkForm("form");
    });

    // LocalStorage Management onclick Button
    $(".submit").click(function (e) {
        e.preventDefault();
        var socio = new MemberBasket();
        localStorage.setItem("member", JSON.stringify(socio));
        location.href = "./fichaSocio.html";
    });

    // Membership view button
    $(".suscripcionesButton").click(function (e) {
        e.preventDefault();
        window.open("./suscripciones.html");
    });

});