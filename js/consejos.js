/* Vista: Consejos (reto diario guardado por día en el navegador) */
(function () {
  var consejos = [
    'Bota tu basura en la caneca.',
    'No rayes pupitres ni paredes.',
    'Deja tu salón ordenado al salir.',
    'Cierra las llaves de agua completamente.',
    'Avisa a un docente si ves un daño.',
    'Respeta jardines y zonas verdes.',
    'Cuida los baños como si fueran los de tu casa.',
    'Invita a un compañero a cuidar el colegio.'
  ];

  var clave = 'lc-consejos-' + new Date().toDateString();
  var hechos = LC.get(clave, []);
  var caja = document.getElementById('checks');

  function actualizar() {
    document.getElementById('bar').value = Math.round(hechos.length / consejos.length * 100);
    document.getElementById('ptxt').textContent = hechos.length + ' de ' + consejos.length + ' consejos cumplidos hoy';
    document.getElementById('win').hidden = hechos.length !== consejos.length;
  }

  consejos.forEach(function (texto, i) {
    var p = document.createElement('p');
    p.innerHTML = '<label><input type="checkbox"> ' + LC.esc(texto) + '</label>';
    var c = p.querySelector('input');
    c.checked = hechos.indexOf(i) > -1;
    c.onchange = function () {
      var k = hechos.indexOf(i);
      if (c.checked && k < 0) hechos.push(i);
      if (!c.checked && k > -1) hechos.splice(k, 1);
      LC.set(clave, hechos);
      actualizar();
    };
    caja.appendChild(p);
  });
  actualizar();

  document.getElementById('rnd').onclick = function () {
    document.getElementById('rtip').textContent = consejos[Math.floor(Math.random() * consejos.length)];
  };
})();
