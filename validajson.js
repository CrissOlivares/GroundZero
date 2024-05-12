document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario
    const form = document.querySelector('.needs-validation');
  
    // Selecciona el botón de pago
    const botonPago = document.getElementById('botonPago');
  
    // Agrega un evento de escucha para el clic en el botón de pago
    botonPago.addEventListener('click', function(event) {
        // Verifica si el formulario es válido
        if (!form.checkValidity()) {
            // Si el formulario no es válido, evita que se envíe
            event.preventDefault();
            event.stopPropagation();
        }
  
        // Agrega las clases de validación de Bootstrap
        form.classList.add('was-validated');
    });
});

// Agrega un evento de escucha al input del número de tarjeta de crédito para dar formato
document.getElementById('validationCustom02').addEventListener('input', function (e) {
    var target = e.target;
    // Obtiene solo los dígitos numéricos del valor actual del campo
    var input = target.value.replace(/\D/g, '');
    // Si el valor es un número de tarjeta de crédito válido (16 dígitos), lo formatea
    if (/^\d{16}$/.test(input)) {
        var formattedInput = input.replace(/(\d{4})/g, '$1 ');
        target.value = formattedInput.trim();
    }
});