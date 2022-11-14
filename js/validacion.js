$(document).ready(function () {
    // Regex patterns
    var nameRegex = "^[A-z]{2,30}$";

    // Check input functions
    function checkInput(name, regex) {
        let fullName = `input[name=${name}]`;
        return $(fullName).val().match(regex);
    }

    // Check Form
    function checkForm(name) {
        $(name + " *").on("input", function () {
            if (checkInput("nombre", nameRegex) && checkInput("apellidos", nameRegex)) {
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