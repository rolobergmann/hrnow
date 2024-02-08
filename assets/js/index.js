document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar a').forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Obtén el ID de la sección del href del enlace
        var sectionId = this.getAttribute('href').replace('#', '');
        
        // Cargar el contenido apropiado según el ID de la sección
        if (sectionId === 'ficha') {
          // Prevenir la acción por defecto para no seguir el enlace
          event.preventDefault();
          // Aquí iría el código para cargar la página 'mi-ficha.html'
          fetch('hrnow/mi-ficha.html')
            .then(response => response.text())
            .then(html => {
              document.getElementById('main-content').innerHTML = html;
            })
            .catch(error => console.error('Error al cargar la ficha:', error));
        }
        // Aquí puedes agregar más lógica para otras secciones si es necesario
      });
    });
  });
  