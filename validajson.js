var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function() {
    $("#botonPago").click(function() {
        var nombre = $("#itNombre").val();
        var correo = $("#itCorreo").val(); // Added to retrieve email input value

        if (nombre == "") {
            $("#mensaje1").fadeIn();
            return false;
        } else {
            $("#mensaje1").fadeOut();
            if (correo == "" || !expr.test(correo)) {
                $("#mensaje2").fadeIn();
                return false;
            }
        }
    });
});

