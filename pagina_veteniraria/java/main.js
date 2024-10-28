document.querySelectorAll('#sedes .hospital').forEach(hospital => {
    hospital.addEventListener('click', () => {
        // Remover la clase 'active' de todos los demás
        document.querySelectorAll('#sedes .hospital').forEach(h => {
            h.classList.remove('active');
            h.querySelector('.info').classList.remove('show'); // Cerrar información
        });

        // Alternar la clase 'active' en el hospital actual
        const info = hospital.querySelector('.info');
        hospital.classList.toggle('active');

        // Controlar la visibilidad de la información
        if (info.classList.contains('show')) {
            // Para ocultar la información suavemente
            info.style.maxHeight = info.scrollHeight + 'px'; // Obtener la altura actual
            requestAnimationFrame(() => {
                info.style.maxHeight = '0'; // Cambiar a 0
                info.style.opacity = '0'; // Cambiar opacidad a 0
                info.addEventListener('transitionend', () => {
                    info.classList.remove('show'); // Remover la clase show
                }, { once: true }); // Eliminar el listener después de una vez
            });
        } else {
            // Para mostrar la información suavemente
            info.classList.add('show'); // Añadir la clase 'show'
            info.style.maxHeight = '0'; // Inicializar max-height
            requestAnimationFrame(() => {
                info.style.maxHeight = info.scrollHeight + 'px'; // Cambiar a la altura real
                info.style.opacity = '1'; // Cambiar opacidad a 1
            });
        }
    });
});
