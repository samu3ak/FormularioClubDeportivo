$(document).ready(function () {
    // MemberBasket Class

    class MemberBasket {
        constructor() {
            this.posicion = $("select[name=posicion]").val();
            this.experiencia = $("input[name=anhos]").val();
            this.anterioridad = $("input[name=anterioridad]:checked").val();
            this.suscripcion = $("select[name=suscripcion]").val();
            this.descuento = $("input[name=descuento]:checked").val();
            this.horario = $("select[name=horario]").val();
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

});