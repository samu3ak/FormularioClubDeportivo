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

    // Avatar Hover Border
    $(".avatarList *").hover(function () {
            // over
            $(this).css("border", "2px solid yellow");
            $(this).css("cursor", "pointer");
        }, function () {
            // out
            $(this).css("border", "none");
        }
    );
});