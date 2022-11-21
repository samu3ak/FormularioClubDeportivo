$(document).ready(function () {

    // Theme Change Logic
    if (localStorage.getItem("theme") != null) {
        var theme = localStorage.getItem("theme");
        if (theme != "darkTheme") {
            $("head #styles").attr("href", "../css/styles.css");
            $("head #page").attr("href", "../css/panelControl.css");
        } else {
            $("head #styles").attr("href", "../css/styles_dark.css");
            $("head #page").attr("href", "../css/panelControl_dark.css");
        }
    }

    // Dark Theme & Bright Theme Change Logic Function Button
    $(".controlPanel").click(function (e) {
        e.preventDefault();
        if (localStorage.getItem("theme") == null) {
            localStorage.setItem("theme", "darkTheme");
            $("head #styles").attr("href", "../css/styles_dark.css");
            $("head #page").attr("href", "../css/index_dark.css");
        } else {
            var theme = localStorage.getItem("theme");
            if (theme == "darkTheme") {
                $("head #styles").attr("href", "../css/styles.css");
                $("head #page").attr("href", "../css/index.css");
                localStorage.setItem("theme", "brightTheme");
            } else {
                $("head #styles").attr("href", "../css/styles_dark.css");
                $("head #page").attr("href", "../css/index_dark.css");
                localStorage.setItem("theme", "darkTheme");
            }
        }
    });

    // localStorage data recovery
    var socio = JSON.parse(localStorage.getItem("member"));

    // Field data import and display
    $(".nombre span").html(socio.nombre);
    $(".apellidos span").html(socio.apellidos);
    $(".dni span").html(socio.dni);
    $(".fechaNac span").html(socio.fechaNacimiento);
    $(".edad span").html(socio.edad);
    $(".telefono span").html(socio.telefono);
    $(".correo span").html(socio.correo);
    $(".cp span").html(socio.codigoPostal);

    $(".posicion span").html(socio.posicion);
    $(".experiencia span").html(`${socio.experiencia} años`);
    $(".anterioridad span").html(socio.anterioridad);
    $(".suscripcion span").html(socio.suscripcion);
    if (socio.descuento == "Si") {
        $(".descuento span").html(`${socio.descuento} (-${socio.diferenciaDescuento}€)`);
    } else {
        $(".descuento span").html(socio.descuento);
    }

    $(".horario span").html(socio.horario);
    $(".cuota span").html(`${socio.cuota}€/Mes`);

    // Buttons Function
    $(".inicio").click(function (e) {
        e.preventDefault();
        location.href = "../index.html";
    });


    $(".controlPanel").click(function (e) {
        e.preventDefault();
        location.href = "./panelControl.html";
    });
});