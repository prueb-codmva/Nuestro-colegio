/* Funciones comunes: menú, almacenamiento y seguridad de texto */
window.LC = (function () {
  var base = document.body.getAttribute('data-base') || '';
  var actual = document.body.getAttribute('data-page');
  var items = [
    ['inicio', 'index.html', 'Inicio'],
    ['cuidado', 'views/cuidado.html', 'Cuidado del colegio'],
    ['pertenencia', 'views/pertenencia.html', 'Sentido de pertenencia'],
    ['problemas', 'views/problemas.html', 'Problemas y soluciones'],
    ['galeria', 'views/galeria.html', 'Galería'],
    ['consejos', 'views/consejos.html', 'Consejos']
  ];

  var menu = document.getElementById('menu');
  if (menu) {
    var html = '<nav aria-label="Secciones"><ul>';
    items.forEach(function (it) {
      html += '<li><a href="' + base + it[1] + '"' +
        (it[0] === actual ? ' aria-current="page"' : '') + '>' +
        (it[0] === actual ? '<strong>' + it[2] + '</strong>' : it[2]) + '</a></li>';
    });
    menu.innerHTML = html + '</ul></nav>';
  }

  function get(clave, defecto) {
    try {
      var v = localStorage.getItem(clave);
      return v ? JSON.parse(v) : defecto;
    } catch (e) { return defecto; }
  }
  function set(clave, valor) {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) {}
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  return { get: get, set: set, esc: esc };
})();
