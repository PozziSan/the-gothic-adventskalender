const startDate = new Date("2025-06-25");
const weeks = [
    {
        title: 'Semana 1 – O Convite ao Labirinto',
        html: `
            <p class="fade-in">“Não sei onde este caminho nos leva. Mas sei que, passo a passo, ele termina no mesmo lugar: no abraço que espero desde sempre.”</p>
            <blockquote class="fade-in delay-1">“Não sei para onde vou, mas sei que não vou por aí.” — José Régio</blockquote>
            <img id="corvo" src="assets/img/corvo.png" alt="Corvo" class="pulse fade-in delay-2" onClick="week1()">
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
    },
    {
        title: 'Semana 4 - O Mar Noturno',
        html: `
                <div class="week">
                    <p class="poem">
                        “For my dreams I hold my life,<br>
                        For wishes I behold my night…”
                        <br>– Nightwish, <i>Sleeping Sun</i>
                    </p>

                    <button onclick="week4()">Navegar</button>

                    <div class="ocean">
                        <div class="waves"></div>
                        <div class="lyrics"></div>
                    </div>
                </div>

        `
    },
    {
        title: 'Semana 5 - Revelações da Penumbra',
        html: `
                <div class="ornament-wrapper">
                <div class="ornament"></div>
                </div>  
                <div class="week">
                    <p class="rice-quote">“You must know life to see decay. Yet it is in decay that life reveals itself most fully.” — Lestat</p>                    
                    <button onclick="week5()">Revelar</button>
                    
                    <div id="week5-hidden" style="display:none; margin-top: 20px;">
                        <p class="him-quote">"Love is the funeral of hearts</br>
                        And an ode for cruelty</br>
                        When angels cry blood </br> 
                        On flowers of evil in bloom" — HIM</p>

                        <p class="him-quote">Watch me fall for you, my Venus Doom. - Pedro</p>
                    </div>
                </div>

        `
    },
    {
        title: 'Semana 6 - O Destino em Movimento',
        html: `
                
                <div class="week6-text">
                    <p class="pessoa-quote">
                        "Navegar é preciso; viver não é preciso." <br />
                        — Fernando Pessoa
                    </p>
                    <button class="reveal-btn" onclick="week6()">Fazer a Roda girar</button>
                </div>
                <div id="week6" class="week6-container hidden">
                    <div class="wheel"></div>

                    <div class="week6-text">
                        <p id="rice-destiny" class="rice-destiny hidden">
                            “Very few really seek knowledge in this world. Mortal or immortal, 
                            few really ask. On the contrary, they try to wring from the unknown 
                            the answers they have already shaped in their own minds.”
                            — Anne Rice
                        </p>
                        <p id="my-quote" class="rice-destiny hidden">
                            "Within the deepest veil of darkness, I surrendered myself in sacrifice.</br>
                            There, in the aching silence, I lost myself as often as I was found.</br>
                            I believed nothing to be true and nearly let hope slip away.</br>
                            And yet, even there, Fortune never ceased her turning — and I could not have imagined the gift that destiny was about to place in my path..."
                            — Pedro
                        </p>
                    </div>
                </div>
        `
    },
    {
        title: 'Semana 7 - O Jardim das Sombras',
        html: `
                <div id="week7" class="week7-container">
                    <div class="garden-bg">
                        <span class="firefly"></span>
                        <span class="firefly"></span>
                        <span class="firefly"></span>
                    </div>

                    <div class="week7-content">
                        <p class="week7-text">
                        Há jardins que só se abrem à noite.  
                        Que a tua mão seja a chave.
                        </p>

                        <button class="reveal-btn" onclick="week7()">Fazer o jardim florescer</button>

                        <p id="contemplate" class="week7-text hidden">
                        Há em minhas horas mais noturnas, quando as estrelas se negam a brilhar e a lua, covarde, abandona o céu,
                        um desejo incontido de deter-me, imóvel, apenas para contemplá-la.
                        </p>
                        
                        <div id="garden" class="garden" aria-live="polite"></div>
                    </div>
                </div>

        `
    },
    {
        title: 'Semana 8 - Fogo e Comprometimento',
        html: `
                <div id="week8" class="week8-container">
                    <div class="week8-content">
                        <p class="week8-intro">
                        O fogo demanda. É preciso coragem para aqueles que ousam trilhar seus caminhos.</br>
                        É necessário comprometimento para que a manutenção da chama não torne-se um culto as cinzas.</br>
                        As vezes, é preciso morrer.
                        </p>
                        <div class="lust hidden"></div>

                        <button class="seal-btn" id="sealBtn" onclick="week8()">Would you join me in death?</button>

                        <div class="hidden" aria-live="polite">
                        <p class="rice-destiny">
                            Morte converte-se em renascimento. As chamas trazem a Fênix a nova vida. Que essa seja a Iniciação. </br>
                            Que a intensidade, a coragem, o prazer, e a Vontade guiem-nos a eterna manutenção da chama.</br>
                            Que não seja apenas pura rotina, mas sim um culto a vida, e a tesão de viver.</br></br>
                            
                            Ser eternamente sincero e ter a coragem de ser demasiadamente humano. Eis o que me comprometo, porque tal é minha Vontade.
                        </p>
                        </div>
                    </div>
                </div>
        `
    },
    {
        title: 'Semana 9 - A Travessia da Sombra',
        html: `
                <div class="week9-container">
                    <div class="week9-content">
                        <p class="week9-intro">
                            Toda chama projeta sombras. <br/>
                            É preciso morrer nelas para renascer na luz. <br/>
                            Este é o limiar da Travessia.
                        </p>

                        <button class="week9-btn" id="week9Btn" onclick="week9()">
                            Join the sinful — Study the Silence.
                        </button>

                        <div class="week9-hidden hidden" aria-live="polite">
                            <p class="week9-revelation">
                                Atravessar a sombra é aceitar o silêncio do mundo, </br>
                                é abandonar ilusões e identidades frágeis. </br>
                                Aqui morremos para os reflexos e para a visão "transcedental" de Mundo </br></br>
                                Here we give birth to the Century Child.

                            </p>
                        </div>
                    </div>
                    <div class="week9-ornament"></div>
                </div>
        `
    },
    {
        title: 'Semana 10 - O Aeon.',
        html: ``
    }
];
