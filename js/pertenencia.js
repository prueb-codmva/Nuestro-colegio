/* Vista: Sentido de pertenencia (compromisos guardados en el navegador) */
(function () {
  var compromisos = LC.get('lc-compromisos', []);
  var campo = document.getElementById('pname');

  function dibujar() {
    document.getElementById('count').textContent = compromisos.length;
    document.getElementById('names').innerHTML = compromisos.slice(-12).map(function (n) {
      return '<li>' + LC.esc(n) + '</li>';
    }).join('');
  }

  function agregar() {
    var nombre = campo.value.trim();
    if (nombre.length < 2) {
      document.getElementById('perr').textContent = 'Escribe tu nombre para comprometerte.';
      return;
    }
    document.getElementById('perr').textContent = '';
    compromisos.push(nombre);
    LC.set('lc-compromisos', compromisos);
    campo.value = '';
    dibujar();
  }

  document.getElementById('pbtn').onclick = agregar;
  campo.addEventListener('keydown', function (e) { if (e.key === 'Enter') agregar(); });
  dibujar();
})();
