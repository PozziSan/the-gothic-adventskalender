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

function week5() {
    const hidden = document.getElementById("week5-hidden");
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    }
}

function week6() {
    const wheel = document.querySelector('#week6 .wheel');
    const hiddenFields = document.querySelectorAll('.hidden');

    wheel.style.animation = 'week6SpinFast 3s linear';

    setTimeout(() => wheel.style.animation = 'week6SlowRotate 40s linear infinite', 3000);

    hiddenFields.forEach((field) => field.classList.remove('hidden'));
}

function week7() {
    const garden = document.getElementById('garden');
    const contemplate = document.getElementById('contemplate');

    if (contemplate.classList.contains('hidden')) contemplate.classList.remove('hidden');

    if (!garden.classList.contains('active')) {
        garden.classList.add('active');

        for (let i = 1; i <= 66; i++) {
            const rose = document.createElement('div');
            const leftPct = 6 + Math.random() * 88; //random horizontal position - 6 - 94%
            const baseTop = 20 + Math.random() * 60; // 20 - 80% random vertical position
            const rot = `${(Math.random() * 8 - 4).toFixed(2)}deg`; // rotaaaating

            rose.className = 'rose';
            rose.style.left = `${leftPct}%`;
            rose.style.top = `${baseTop}%`;
            rose.style.setProperty('--r', rot);

            const delay = 120 + i * 140 + Math.random() * 120;
            setTimeout(() => rose.classList.add('visible'), delay);
            garden.appendChild(rose);
        }

        return;
    }

    garden.querySelectorAll('.rose').forEach((r) => {
        r.style.transition = 'transform .35s ease, filter .4s ease';
        r.style.transform = `translateY(-6px) scale(1.03) rotate(${getComputedStyle(r).getPropertyValue('--r')})`;

        setTimeout(() => {
            r.style.transform = `translateY(0) scale(1) rotate(${getComputedStyle(r).getPropertyValue('--r')})`;
        }, 230);
    });
}

function week8() {
    const lust = document.querySelector('#week8 .lust');
    const hiddenFields = document.querySelectorAll('.hidden');

    lust.style.animation = 'week6SpinFast 3s linear';

    setTimeout(() => lust.style.animation = 'week6SlowRotate 40s linear infinite', 3000);

    hiddenFields.forEach((field) => field.classList.remove('hidden'));
}

function week9() {
    const hidden = document.querySelector('.week9-hidden')
    hidden.classList.replace('hidden', 'show');
}
