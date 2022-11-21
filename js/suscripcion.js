$(document).ready(function () {
    // Dark Theme & Bright Theme Change Logic Function
    if (localStorage.getItem("theme") != null) {
        var theme = localStorage.getItem("theme");
        if (theme != "darkTheme") {
            $("head #styles").attr("href", "../css/styles.css");
            $("head #page").attr("href", "../css/suscripciones.css");
        } else {
            $("head #styles").attr("href", "../css/styles_dark.css");
            $("head #page").attr("href", "../css/suscripciones_dark.css");
        }
    }
});