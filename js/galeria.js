/* Vista: Galería (las fotos se previsualizan solo en la pantalla del usuario) */
(function () {
  var espacios = ['Entrada principal', 'Salones', 'Baños', 'Biblioteca', 'Cancha y patio', 'Jardines'];
  var galeria = document.getElementById('gal');
  var visor = document.getElementById('lb');
  var visorImg = document.getElementById('lbimg');

  espacios.forEach(function (nombre, i) {
    var fig = document.createElement('figure');
    fig.innerHTML =
      '<label for="f' + i + '">Foto de: ' + LC.esc(nombre) + '</label><br>' +
      '<input id="f' + i + '" type="file" accept="image/*">' +
      '<div class="foto"></div>' +
      '<figcaption>' + LC.esc(nombre) + '</figcaption>';
    var zona = fig.querySelector('.foto');

    fig.querySelector('input').onchange = function (e) {
      var archivo = e.target.files[0];
      if (!archivo || archivo.type.indexOf('image/') !== 0) return;
      var lector = new FileReader();
      lector.onload = function () {
        zona.innerHTML = '';
        var img = document.createElement('img');
        img.src = lector.result;
        img.alt = 'Foto: ' + nombre;
        img.width = 240;
        img.tabIndex = 0;
        function abrir() {
          visorImg.src = img.src;
          visorImg.alt = img.alt;
          if (visor.showModal) visor.showModal(); else visor.setAttribute('open', '');
        }
        img.onclick = abrir;
        img.onkeydown = function (ev) { if (ev.key === 'Enter') abrir(); };
        zona.appendChild(img);
      };
      lector.readAsDataURL(archivo);
    };
    galeria.appendChild(fig);
  });
})();
