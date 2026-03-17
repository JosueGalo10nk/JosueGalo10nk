// 1. LISTA DE IMÁGENES Y FRASES (AQUÍ AGREGAS TODAS LAS QUE QUIERAS)
const fotos = [
    { url: 'images/foto1.jpg', frase: 'Donde el destino cruzó nuestras miradas y el "nosotros" comenzó a escribirse. ❤️' },
    { url: 'images/foto2.jpg', frase: 'Aquellos primeros pasos de un camino que hoy es mi destino favorito.' },
    { url: 'images/foto3.jpg', frase: 'Tu sonrisa: esa luz que desarma mis miedos y enamora mi alma cada día.' },
    { url: 'images/foto4.jpg', frase: 'A tu lado no solo camino, Carolina; contigo florezco y me convierto en mi mejor versión.' },
    { url: 'images/foto5.jpg', frase: 'Cómplices de locuras que el tiempo no borra, sino que atesora como oro puro.' },
    { url: 'images/foto6.jpg', frase: 'Cada segundo compartido es un verso grabado a fuego en mi memoria.' },
    { url: 'images/foto7.jpg', frase: 'Tenerte en mis brazos hoy, le da un sentido mágico a todo mi pasado.' },
    { url: 'images/foto8.jpg', frase: 'Si un día la memoria me fallara, dejaré que estas fotos le cuenten al corazón quién eres.' },
    { url: 'images/foto9.jpg', frase: 'Que se me olvide el mundo entero, pero que nunca olvide que tú eres mi hogar.' },
    { url: 'images/foto10.jpg', frase: 'Tus besos son el mapa que me guía directo a la luna, sin escalas.' },
    { url: 'images/foto11.jpg', frase: 'Lo que ayer fue un sueño lejano, hoy es mi realidad más hermosa a tu lado.' },
    { url: 'images/foto12.jpg', frase: 'Mientras seamos uno, no habrá horizonte que no podamos alcanzar volando.' },
    { url: 'images/foto13.jpg', frase: 'Mis brazos te protegen, pero es tu amor el que sostiene mi alma entera.' },
    { url: 'images/foto14.jpg', frase: 'Contigo toco el cielo, sintiendo que el mundo es pequeño comparado con lo nuestro.' },
    { url: 'images/foto15.jpg', frase: 'Te admiro en silencio y te aplaudo en cada paso, siendo tu fan eterno.' },
    { url: 'images/foto16.jpg', frase: 'Tus ojos no solo miran; son dos estrellas que decidieron brillar solo para mí.' },
    { url: 'images/foto17.jpg', frase: 'En este tiempo hemos creado más que una historia: hemos fundado nuestra propia familia.' },
    { url: 'images/foto18.jpg', frase: 'Cada instante me confirma que encontrarte es lo mejor que me pudo pasar.' },
    { url: 'images/foto19.jpg', frase: 'Gracias por elegirme, por quedarte y por hacer de estos dos años un paraíso.' },
    { url: 'images/foto20.jpg', frase: 'Por una vida entera, por mil primaveras más y un poquito más de eternidad. ❤️' }
];



// 2. GENERAR LAS FOTOS AUTOMÁTICAMENTE
const gallery = document.getElementById('gallery');

fotos.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('photo-card');
    
    card.innerHTML = `
        <img src="${item.url}" alt="Recuerdo">
        <p>${item.frase}</p>
    `;
    
    gallery.appendChild(card);
});

// 3. CONTADOR DE TIEMPO (Desde 17 de Marzo 2024)
const startDate = new Date('March 17, 2024 00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}
setInterval(updateTimer, 1000);

// 4. EFECTO DE APARICIÓN (Scroll Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.photo-card').forEach(card => observer.observe(card));

// 5. CORAZONES FLOTANTES
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    document.getElementById('heart-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);