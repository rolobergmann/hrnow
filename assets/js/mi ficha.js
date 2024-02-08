// mi-ficha.js

// Este script se ejecutará cuando se cargue la página 'Mi Ficha'
document.addEventListener('DOMContentLoaded', function() {
    // Supongamos que estos datos vendrían de una solicitud al servidor
    var datosEmpleado = {
      nombre: "Geraldine Soledad Nunez Sanhueza",
      foto: "assets/img/employee-photo.jpg",
      cargo: "Coordinador de Despacho Aeronave",
      area: "G. de Aeropuertos (Operaciones Terrestres)",
      division: "Dirección Operaciones",
      empresa: "Sky Airline S.A.",
      centroCostos: "DOJOT",
      supervisor: "Avendaño, Rodrigo"
    };
  
    // Función para actualizar la ficha del empleado con los datos
    function actualizarFicha(datos) {
      document.getElementById('employee-photo').src = datos.foto;
      document.getElementById('employee-name').textContent = datos.nombre;
      document.getElementById('employee-role').textContent = datos.cargo;
      document.getElementById('employee-area').textContent = datos.area;
      document.getElementById('employee-division').textContent = datos.division;
      document.getElementById('employee-company').textContent = datos.empresa;
      document.getElementById('employee-costcenter').textContent = datos.centroCostos;
      document.getElementById('employee-supervisor').textContent = datos.supervisor;
    }
  
    // Llama a la función para actualizar los datos en la ficha
    actualizarFicha(datosEmpleado);
  });
  