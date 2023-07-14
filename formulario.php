<?php
// Obtener los datos del formulario
$nombreEmpresa = $_POST['nombreEmpresa'];
$nombreContacto = $_POST['nombreContacto'];
$tipoEmpresa = $_POST['tipoEmpresa'];
$correo = $_POST['correo'];
$detalleCaso = $_POST['detalleCaso'];

// Realizar la conexión a la base de datos MySQL
$servername = "localhost"; // Cambia esto si tu servidor MySQL no está en localhost
$username = "root";
$password = "";
$dbname = "comunicaciones";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay algún error en la conexión
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Insertar los datos del formulario en la base de datos
$sql = "INSERT INTO clientes (nombre_empresa, nombre_contacto, tipo_requerimiento, correo, detalle_caso) VALUES ('$nombreEmpresa', '$nombreContacto', '$tipoEmpresa', '$correo', '$detalleCaso')";

if ($conn->query($sql) === TRUE) {
    echo "Los datos se han guardado correctamente en la base de datos";
    echo '<meta http-equiv="refresh" content="3;url=index.html">';
} else {
    echo "Error al guardar los datos en la base de datos: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
