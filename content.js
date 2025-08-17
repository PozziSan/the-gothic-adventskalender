const startDate = new Date("2025-08-03");
const weeks = [
    {
        title: 'Semana 1 – O Convite ao Labirinto',
        html: `
            <p class="fade-in">“Não sei onde este caminho nos leva. Mas sei que, passo a passo, ele termina no mesmo lugar: no abraço que espero desde sempre.”</p>
            <blockquote class="fade-in delay-1">“Não sei para onde vou, mas sei que não vou por aí.” — José Régio</blockquote>
            <img id="corvo" src="assets/img/corvo.png" alt="Corvo" class="pulse fade-in delay-2" onClick="corvoAlert()">
            <p class="fade-in delay-2">Clique no corvo para receber sua primeira mensagem.</p>
        `
    },
    {
        title: 'Semana 2 - Espelhos',
        html: `
                <div class="week">
                    <p class="poem">
                        “O espelho reflete com exatidão,  
                        mas só mostra a superfície.  
                        Em ti, encontro mais que reflexo:  
                        encontro o abismo doce onde quero mergulhar.”  
                    </p>

                    <p class="quote">
                        <em>“O espelho é o mais inútil de todos os objetos: serve apenas para mostrar a face.”</em>  
                        – Fernando Pessoa
                    </p>

                    <button onclick="week2()">Revelar Reflexo</button>

                    <div class="tarot-container">
                        <img src="assets/img/prince_of_disks.jpg" alt="Príncipe de Discos" class="tarot-card left">
                        <img src="assets/img/princess_of_disks.webp" alt="Princesa de Discos" class="tarot-card right">
                    </div>
                </div>
        `
    },
    {
        title: 'Semana 3 - A Noite e os Símbolos',
        html: `
                <div class="week">
                    <p class="poem">
                        “A noite não é menos maravilhosa que o dia,  
                        não é menos divina; à noite brilham as estrelas,  
                        e há revelações que o dia ignora.”  
                    </p>

                    <p class="quote">
                        <em>“Tenho em mim todos os sonhos do mundo.”</em> – Fernando Pessoa
                    </p>

                    <button onclick="week3()">Mergulhar na Noite</button>

                    <div class="night-sky">
                        <div class="moon"></div>
                        <div class="stars"></div>
                        <img src="assets/img/star.webp" alt="Carta da Estrela - Tarot de Thoth" class="tarot-card-week3" />
                    </div>
                </div>

        `
    }
    // TODO: Add week 4 - 10
];
