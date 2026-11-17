/* Vista: Problemas y soluciones (desplegables) */
(function () {
  var problemas = [
    ['Pupitres y paredes rayados', 'Usa tu cuaderno para dibujar o escribir. Si ves a alguien rayando, recuérdale que ese puesto es de todos. Propongan un mural autorizado para expresar sus ideas.'],
    ['Baños sucios o sin agua', 'Usa el baño con cuidado, tira la basura en la caneca y avisa de inmediato si hay una fuga o un daño.'],
    ['Basura en patios y pasillos', 'Recoge tu basura siempre. Organicen jornadas de aseo por grupos y pongan más canecas rotuladas.'],
    ['Vidrios, puertas y sillas rotos', 'Evita juegos bruscos dentro de los salones. Reporta cualquier daño al docente para repararlo pronto.'],
    ['Jardines pisoteados', 'Camina por los senderos. Adopten un jardín por grado para cuidarlo y regarlo.'],
    ['Desperdicio de agua y luz', 'Cierra las llaves y apaga luces y ventiladores al salir. Pequeños ahorros se notan al final del mes.']
  ];

  var contenedor = document.getElementById('probs');
  problemas.forEach(function (p) {
    var d = document.createElement('details');
    d.innerHTML = '<summary>Problema: ' + LC.esc(p[0]) + '</summary><p><strong>Solución:</strong> ' + LC.esc(p[1]) + '</p>';
    contenedor.appendChild(d);
  });

  function todas(abrir) {
    [].forEach.call(contenedor.querySelectorAll('details'), function (d) { d.open = abrir; });
  }
  document.getElementById('abrir').onclick = function () { todas(true); };
  document.getElementById('cerrar').onclick = function () { todas(false); };
})();
