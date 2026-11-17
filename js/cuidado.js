/* Vista: Cuidado del colegio (pestañas por espacio) */
(function () {
  var espacios = {
    'Salones': [
      'Entra y sal sin gritar ni correr; los vidrios y puertas se rompen.',
      'Deja el tablero limpio y las sillas ordenadas al terminar la clase.',
      'No pegues chicles ni escribas en paredes y puertas.',
      'Apaga luces y ventiladores si eres el último en salir.'],
    'Baños': [
      'Tira el papel en la caneca, nunca en el sanitario.',
      'Cierra bien las llaves y avisa si una gotea.',
      'Deja el baño como te gustaría encontrarlo.',
      'No dañes espejos, secadores ni dispensadores: son de todos.'],
    'Pupitres': [
      'No rayes ni dibujes sobre el pupitre; limpiar cuesta tiempo y dinero.',
      'No te balancees en la silla ni te subas a ella.',
      'Reporta a tu director de grupo si hay un pupitre dañado.',
      'Al final del día, deja tu puesto sin basura debajo.'],
    'Zonas comunes': [
      'Usa las canecas y separa los residuos cuando sea posible.',
      'Cuida jardines, matas y árboles: no los pises ni los arranques.',
      'Respeta canchas, pasillos y la cafetería; haz fila y recoge tus residuos.',
      'No dejes envolturas en las escaleras ni en los corredores.']
  };

  var tabs = document.getElementById('tabs');
  var panel = document.getElementById('panel');

  function mostrar(nombre) {
    [].forEach.call(tabs.children, function (b) {
      var activo = b.getAttribute('data-nombre') === nombre;
      b.setAttribute('aria-selected', activo);
      b.textContent = (activo ? '✔ ' : '') + b.getAttribute('data-nombre');
    });
    panel.innerHTML = '<h3>' + LC.esc(nombre) + '</h3><ul>' +
      espacios[nombre].map(function (t) { return '<li>' + LC.esc(t) + '</li>'; }).join('') + '</ul>';
  }

  Object.keys(espacios).forEach(function (nombre) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('data-nombre', nombre);
    b.onclick = function () { mostrar(nombre); };
    tabs.appendChild(b);
  });
  mostrar('Salones');
})();
