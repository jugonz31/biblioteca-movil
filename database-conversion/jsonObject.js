$.ajax({
  dataType: 'json',
  url: 'http://OTRO-DOMINIO.com/datos.php',
  success: function(datos) {
              for (var clave in datos) {
                if (datos.hasOwnProperty(clave)) {
                    console.log(clave + " -> " + datos[clave]);
                }
              }
           },
   error: function() { console.log("Error leyendo fichero JSON"); }
});