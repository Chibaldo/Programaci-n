document.querySelectorAll('#sedes .hospital').forEach(hospital => {
    hospital.addEventListener('click', () => {
        document.querySelectorAll('#sedes .hospital').forEach(h => {
            h.classList.remove('active');
            h.querySelector('.info').classList.remove('show');
        });

        const info = hospital.querySelector('.info');
        hospital.classList.toggle('active');

        if (info.classList.contains('show')) {
            info.style.maxHeight = info.scrollHeight + 'px';
            requestAnimationFrame(() => {
                info.style.maxHeight = '0';
                info.style.opacity = '0';
                info.addEventListener('transitionend', () => {
                    info.classList.remove('show');
                }, { once: true });
            });
        } else {
            info.classList.add('show');
            info.style.maxHeight = '0';
            requestAnimationFrame(() => {
                info.style.maxHeight = info.scrollHeight + 'px';
                info.style.opacity = '1';
            });
        }
    });
});
