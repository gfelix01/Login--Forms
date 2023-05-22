document.addEventListener("DOMContentLoaded", function() {
  // Obtener el formulario
  var form = document.getElementById("forma");

  // Escuchar el evento de envío del formulario
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Obtener los valores de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    // Realizar alguna validación de datos si es necesario
    if (usuario === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return; // Detener la ejecución del código
    }

    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o realizar verificaciones adicionales

    // Por ejemplo, puedes mostrar los valores en la consola
    console.log("Usuario:", usuario);
    console.log("Contraseña:", password);

    // O redirigir a otra página
    // window.location.href = "tu-pagina-de-bienvenida.html";
  });
});
