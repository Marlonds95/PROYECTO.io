document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se envíe el formulario de manera tradicional

    // Obtener los valores de los campos
    var nombreEmpresa = document.getElementById('#nombreEmpresa').value;
    var nombreContacto = document.getElementById('#nombreContacto').value;
    var tipoEmpresa = document.getElementById('#tipoEmpresa').value;
    var correo = document.getElementById('#correo').value;
    var detalleCaso = document.getElementById('#detalleCaso').value;

    // Crear una solicitud HTTP
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'guardar_datos.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Enviar los datos como parámetros
    var data = 'nombreEmpresa=' + encodeURIComponent(nombreEmpresa) +
               '&nombreContacto=' + encodeURIComponent(nombreContacto) +
               '&tipoEmpresa=' + encodeURIComponent(tipoEmpresa) +
               '&correo=' + encodeURIComponent(correo) +
               '&detalleCaso=' + encodeURIComponent(detalleCaso);
    xhr.send(data);

    // Manejar la respuesta
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            //  realizar otras acciones después de enviar los datos
        }
    };

    // Restablecer el formulario
    document.getElementById('formulario').reset();
});