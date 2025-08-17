function week1() {
    alert('Seja bem-vinda ao labirinto que criei para nós. Um passo por semana… até o fim.');
}

function week2() {
    const poem = document.querySelector('.poem');
    poem.style.transition = 'all 0.8s ease';
    poem.style.transform = 'rotateX(25deg) skewX(10deg)';
    poem.style.opacity = '0.7';

    setTimeout(() => {
        poem.style.transform = 'rotateX(0) skewX(0)';
        poem.style.opacity = '1';
    }, 1200);

    const tarotContainer = document.querySelector('.tarot-container');
    const cards = document.querySelectorAll('.tarot-card');

    tarotContainer.style.opacity = '1';

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0) translateY(0)'
        }, index * 400);
    });
}

function week3() {
    const sky = document.querySelector('.night-sky');
    sky.classList.add('active');

    const poem = document.querySelector('.poem');
    poem.style.transition = 'color 1.5s ease';
    poem.style.color = '#ddd';
}

function week4() {
    const ocean = document.querySelector('.ocean');
    ocean.classList.add('active');

    document.querySelector('.lyrics').innerHTML = `
    "I knew you never before,<br>
    I see you never more,<br>
    But the love the pain the hope O beaufitul one,<br>
    Have made you mine 'till all my years are done"<br>
    - Nightwish, <i>Gethsemane</i>
    `;
}
