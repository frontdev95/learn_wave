addEventListener('DOMContentLoaded', () => {
  const contadores = document.querySelectorAll('.contador-cant');
  const velocidad = 1000;

  const animarContadores = () => {
    for (const contador of contadores) {
      const actualizarContador = () => {
        let cantMax = +contador.dataset.cantTotal;
        valorActual = +contador.innerText;
        incremento = cantMax / velocidad;

        if (valorActual < cantMax) {
          contador.innerText = Math.ceil(valorActual + incremento);
          setTimeout(actualizarContador, 5);
        } else {
          contador.innerText = cantMax;
        }
      };

      actualizarContador();
    }
  };

  const mostrarContadores = (elementos) => {
    elementos.forEach((elemento) => {
      if (elemento.isIntersecting) {
        elemento.target.classList.add('animar');
        elemento.target.classList.remove('ocultar');
        setTimeout(animarContadores, 300);
      }
    });
  };

  //IntersectionObserver
  const observer = new IntersectionObserver(mostrarContadores, {
    threshold: 0.5,
  });

  const elementosHTML = document.querySelectorAll('.contador');
  elementosHTML.forEach((elementoHTML) => {
    observer.observe(elementoHTML);
  });
});
