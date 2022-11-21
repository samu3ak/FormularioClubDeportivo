$(document).ready(function () {

    if (localStorage.getItem("theme") != null) {
        var theme = localStorage.getItem("theme");
        if (theme != "darkTheme") {
            $("head #styles").attr("href", "./css/styles.css");
            $("head #page").attr("href", "./css/index.css");
        } else {
            $("head #styles").attr("href", "./css/styles_dark.css");
            $("head #page").attr("href", "./css/index_dark.css");
        }
    }

    // Dark Theme & Bright Theme Change Logic Function Button
    $(".controlPanel").click(function (e) {
        e.preventDefault();
        if (localStorage.getItem("theme") == null) {
            localStorage.setItem("theme", "darkTheme");
            $("head #styles").attr("href", "./css/styles_dark.css");
            $("head #page").attr("href", "./css/index_dark.css");
        } else {
            var theme = localStorage.getItem("theme");
            if (theme == "darkTheme") {
                $("head #styles").attr("href", "./css/styles.css");
                $("head #page").attr("href", "./css/index.css");
                localStorage.setItem("theme", "brightTheme");
            } else {
                $("head #styles").attr("href", "./css/styles_dark.css");
                $("head #page").attr("href", "./css/index_dark.css");
                localStorage.setItem("theme", "darkTheme");
            }
        }
    });
});