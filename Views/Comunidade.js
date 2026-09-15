const btnComunidade = document.getElementById("btn-comunidade");

btnComunidade.addEventListener("click", function () {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <section class="app-section" id="section-customers">

            <div class="comunidade-container">


                <!-- =========================================
                     CABEÇALHO
                ========================================== -->

                <div class="comunidade-header">

                    <div class="comunidade-icone">
                        <i class="bi bi-people-fill"></i>
                    </div>

                    <div>
                        <h1>Comunidade</h1>

                        <p>
                            Compartilhe seus treinos, lugares e momentos esportivos.
                        </p>
                    </div>

                    <button
                        type="button"
                        class="btn-criar-publicacao"
                    >
                        Criar publicação
                    </button>

                </div>


                <!-- =========================================
                     FEED
                ========================================== -->

                <div class="feed-comunidade">


                    <!-- =====================================
                         PUBLICAÇÃO 1
                    ====================================== -->

                    <article class="post-comunidade">

                        <div class="post-header">

                            <div class="post-avatar">
                                RM
                            </div>

                            <div class="post-usuario">

                                <div class="post-nome">

                                    Rafael Mendes

                                    <span class="post-esporte">
                                        Skate
                                    </span>

                                </div>

                                <div class="post-data">
                                    @rafamendes · há 12 min
                                </div>

                            </div>

                            <button
                                type="button"
                                class="btn-seguir"
                            >
                                Seguir
                            </button>

                        </div>


                        <div class="post-texto">
                            Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                        </div>


                        <div class="post-imagem">

                            <i class="bi bi-image"></i>

                            <span>
                                espaço para foto
                            </span>

                        </div>


                        <div class="post-acoes">

                            <button
                                type="button"
                                class="acao-post curtida"
                            >
                                <i class="bi bi-heart-fill"></i>
                                128
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-chat"></i>
                                14
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-share"></i>
                                Compartilhar
                            </button>

                        </div>


                        <div class="post-curtidas">
                            Curtido por
                            <strong>Vinícius R.</strong>
                            e mais
                            <strong>127 pessoas</strong>
                        </div>

                    </article>


                    <!-- =====================================
                         PUBLICAÇÃO 2
                    ====================================== -->

                    <article class="post-comunidade">

                        <div class="post-header">

                            <div class="post-avatar">
                                JA
                            </div>

                            <div class="post-usuario">

                                <div class="post-nome">

                                    Julia Alves

                                    <span class="post-esporte">
                                        Vôlei
                                    </span>

                                </div>

                                <div class="post-data">
                                    @ju.alves · há 40 min
                                </div>

                            </div>

                            <button
                                type="button"
                                class="btn-seguir"
                            >
                                Seguir
                            </button>

                        </div>


                        <div class="post-texto">
                            Treino de sábado na quadra da Vila. Time completo pra domingo! 🏐
                        </div>


                        <div class="post-imagem">

                            <i class="bi bi-image"></i>

                            <span>
                                espaço para foto
                            </span>

                        </div>


                        <div class="post-acoes">

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-heart"></i>
                                76
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-chat"></i>
                                5
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-share"></i>
                                Compartilhar
                            </button>

                        </div>


                        <div class="post-curtidas">
                            Curtido por
                            <strong>76 pessoas</strong>
                        </div>

                    </article>


                    <!-- =====================================
                         PUBLICAÇÃO 3
                    ====================================== -->

                    <article class="post-comunidade">

                        <div class="post-header">

                            <div class="post-avatar">
                                BZ
                            </div>

                            <div class="post-usuario">

                                <div class="post-nome">

                                    Bruno Zago

                                    <span class="post-esporte">
                                        Futebol
                                    </span>

                                </div>

                                <div class="post-data">
                                    @brunozago · há 1 h
                                </div>

                            </div>

                            <button
                                type="button"
                                class="btn-seguir"
                            >
                                Seguir
                            </button>

                        </div>


                        <div class="post-texto">
                            Gol de bicicleta na pelada de hoje, quem viu sabe 🔥⚽
                        </div>


                        <div class="post-imagem">

                            <i class="bi bi-image"></i>

                            <span>
                                espaço para foto
                            </span>

                        </div>


                        <div class="post-acoes">

                            <button
                                type="button"
                                class="acao-post curtida"
                            >
                                <i class="bi bi-heart-fill"></i>
                                342
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-chat"></i>
                                48
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-share"></i>
                                Compartilhar
                            </button>

                        </div>


                        <div class="post-curtidas">
                            Curtido por
                            <strong>Rafael M.</strong>
                            e mais
                            <strong>341 pessoas</strong>
                        </div>

                    </article>


                    <!-- =====================================
                         PUBLICAÇÃO 4
                    ====================================== -->

                    <article class="post-comunidade">

                        <div class="post-header">

                            <div class="post-avatar">
                                CS
                            </div>

                            <div class="post-usuario">

                                <div class="post-nome">

                                    Carla Souza

                                    <span class="post-esporte">
                                        Tênis
                                    </span>

                                </div>

                                <div class="post-data">
                                    @carlas · há 2 h
                                </div>

                            </div>

                            <button
                                type="button"
                                class="btn-seguir"
                            >
                                Seguir
                            </button>

                        </div>


                        <div class="post-texto">
                            Primeira aula na quadra nova, saudade de jogar em saibro 🎾
                        </div>


                        <div class="post-imagem">

                            <i class="bi bi-image"></i>

                            <span>
                                espaço para foto
                            </span>

                        </div>


                        <div class="post-acoes">

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-heart"></i>
                                59
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-chat"></i>
                                3
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-share"></i>
                                Compartilhar
                            </button>

                        </div>


                        <div class="post-curtidas">
                            Curtido por
                            <strong>59 pessoas</strong>
                        </div>

                    </article>


                    <!-- =====================================
                         PUBLICAÇÃO 5
                    ====================================== -->

                    <article class="post-comunidade">

                        <div class="post-header">

                            <div class="post-avatar">
                                VR
                            </div>

                            <div class="post-usuario">

                                <div class="post-nome">

                                    Vinícius Rocha

                                    <span class="post-esporte">
                                        Basquete
                                    </span>

                                </div>

                                <div class="post-data">
                                    @viniciusr · há 3 h
                                </div>

                            </div>

                            <button
                                type="button"
                                class="btn-seguir"
                            >
                                Seguir
                            </button>

                        </div>


                        <div class="post-texto">
                            Fechamos com 5x5 até escurecer na quadra do Ibirapuera 🏀
                        </div>


                        <div class="post-imagem">

                            <i class="bi bi-image"></i>

                            <span>
                                espaço para foto
                            </span>

                        </div>


                        <div class="post-acoes">

                            <button
                                type="button"
                                class="acao-post curtida"
                            >
                                <i class="bi bi-heart-fill"></i>
                                213
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-chat"></i>
                                22
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-share"></i>
                                Compartilhar
                            </button>

                        </div>


                        <div class="post-curtidas">
                            Curtido por
                            <strong>Julia A.</strong>
                            e mais
                            <strong>212 pessoas</strong>
                        </div>

                    </article>


                    <!-- =====================================
                         PUBLICAÇÃO 6
                    ====================================== -->

                    <article class="post-comunidade">

                        <div class="post-header">

                            <div class="post-avatar">
                                TL
                            </div>

                            <div class="post-usuario">

                                <div class="post-nome">

                                    Thiago Lima

                                    <span class="post-esporte">
                                        Futebol
                                    </span>

                                </div>

                                <div class="post-data">
                                    @thiagol · há 4 h
                                </div>

                            </div>

                            <button
                                type="button"
                                class="btn-seguir"
                            >
                                Seguir
                            </button>

                        </div>


                        <div class="post-texto">
                            Time montado pro racha de quinta, só falta você 👀⚽
                        </div>


                        <div class="post-imagem">

                            <i class="bi bi-image"></i>

                            <span>
                                espaço para foto
                            </span>

                        </div>


                        <div class="post-acoes">

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-heart"></i>
                                45
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-chat"></i>
                                9
                            </button>

                            <button
                                type="button"
                                class="acao-post"
                            >
                                <i class="bi bi-share"></i>
                                Compartilhar
                            </button>

                        </div>


                        <div class="post-curtidas">
                            Curtido por
                            <strong>45 pessoas</strong>
                        </div>

                    </article>


                </div>

            </div>

        </section>

    `;

});


