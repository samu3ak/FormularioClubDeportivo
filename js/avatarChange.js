$(document).ready(function () {
    // Theme Change Logic

    if (localStorage.getItem("theme") != null) {
        var theme = localStorage.getItem("theme");
        if (theme != "darkTheme") {
            $("head #styles").attr("href", "../css/styles.css");
            $("head #page").attr("href", "../css/avatares.css");
        } else {
            $("head #styles").attr("href", "../css/styles_dark.css");
            $("head #page").attr("href", "../css/avatares_dark.css");
        }
    }

    // localStorage data recovery
    var socio = JSON.parse(localStorage.getItem("member"));

    // Button Click Link Redirect
    $(".inicio").click(function (e) {
        e.preventDefault();
        location.href = "../index.html";
    });

    $(".cancelar").click(function (e) {
        e.preventDefault();
        location.href = "./panelControl.html";
    });

    // Avatar select logic
    var selected;
    $(".avatarList *").click(function (e) {
        e.preventDefault();
        selected = $(this);
        $(".confirm").prop("disabled", false);
        $(".avatarList *").css("border", "none");
        $(this).css("border", "3px solid red");
    });

    // Confirm Button Click, when the user clicks it the src attribute of the member class changes
    $(".confirm").click(function (e) {
        e.preventDefault();
        let href = $(selected).attr("src").toString();
        socio.avatar = href;
        localStorage.setItem("member", JSON.stringify(socio));
        location.href = "./panelControl.html";
    });
});