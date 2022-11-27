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
    if (socio.avatar != "") {
        $("#avatar").attr("src", socio.avatar);
    }
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

    $(".avatarButton").click(function (e) {
        e.preventDefault();
        location.href = "./avatares.html";
    });

    // When the user clicks the modify button, asks the user for the new data, if it's ok replace the data, else, warns the user that data
    // isn't correct and reloads page, this applies for each modify button
    $(".telefonoButton").click(function (e) {
        e.preventDefault();
        let telefono = prompt("Introduce tu nuevo número de teléfono", "616616616");
        telefono = telefono.replaceAll(" ", "");
        socio.telefono = telefono;
        cambiarDato(/^[0-9]{9}$/, telefono, "Número de teléfono no válido");
    });

    $(".correoButton").click(function (e) {
        e.preventDefault();
        let correo = prompt("Introduce tu nueva dirección de correo electrónico", "example@domain.com");
        socio.correo = correo;
        cambiarDato(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, correo, "Dirección de correo electrónico no válida");
    });

    $(".posicionButton").click(function (e) {
        e.preventDefault();
        let posicion = prompt("Introduce tu posición favorita", "Base/Escolta/Alero/Alapivot/Pivot").toLowerCase();
        posicion = posicion[0].toUpperCase() + posicion.substring(1);
        socio.posicion = posicion;
        cambiarDato("Base|Escolta|Alero|Alapivot|Pivot", posicion, "Posicion no válida");
    });

    $(".horarioButton").click(function (e) {
        e.preventDefault();
        let horario = prompt("Introduce tu nuevo horario de preferencia", "Mañana/Tarde").toLowerCase();
        horario = horario[0].toUpperCase() + horario.substring(1);
        socio.horario = horario;
        cambiarDato("Mañana|Tarde", horario, "Horario no disponible");
    });


    // Function that changes the member data if it matches the regular expression, if not, alerts the user
    function cambiarDato(regex, datoIntroducido, errMsg) {
        if (datoIntroducido.match(regex)) {
            localStorage.setItem("member", JSON.stringify(socio));
            location.reload();
        } else {
            alert(errMsg);
            location.reload();
        }
    }
});