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
                        <p>Compartilhe seus treinos, lugares e momentos esportivos.</p>
                    </div>

                    <button type="button" onclick="abrirModal()" class="BOTAO">Criar publicação</button>
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
                                    <span class="post-esporte">Skate</span>
                                </div>

                                <div class="post-data">
                                    @rafamendes · há 12 min
                                </div>
                            </div>

                            <button type="button" class="btn-seguir">Seguir</button>
                        </div>

                        <div class="post-texto">
                            Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                        </div>

                        <div class="ladoAlado margemDireita">
                           <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para foto
                            </span>
                        </div>
                        
                        <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para mapa
                            </span>
                        </div>
                        
                        </div>
                
                        <div class="post-acoes">
                            <button type="button" class="acao-post curtida">
                                <i class="bi bi-heart-fill"></i>
                                128
                            </button>

                            <button type="button" class="acao-post">
                                <i class="bi bi-chat"></i>
                                14
                            </button>

                            <button type="button" class="acao-post">
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
                                RM
                            </div>

                            <div class="post-usuario">
                                <div class="post-nome">
                                    Rafael Mendes
                                    <span class="post-esporte">Skate</span>
                                </div>

                                <div class="post-data">
                                    @rafamendes · há 12 min
                                </div>
                            </div>

                            <button type="button" class="btn-seguir">Seguir</button>
                        </div>

                        <div class="post-texto">
                            Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                        </div>

                        <div class="ladoAlado margemDireita">
                           <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para foto
                            </span>
                        </div>
                        
                        <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para mapa
                            </span>
                        </div>
                        
                        </div>
                
                        <div class="post-acoes">
                            <button type="button" class="acao-post curtida">
                                <i class="bi bi-heart-fill"></i>
                                128
                            </button>

                            <button type="button" class="acao-post">
                                <i class="bi bi-chat"></i>
                                14
                            </button>

                            <button type="button" class="acao-post">
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
                         PUBLICAÇÃO 3
                    ====================================== -->

                    <article class="post-comunidade">
                        <div class="post-header">
                            <div class="post-avatar">
                                RM
                            </div>

                            <div class="post-usuario">
                                <div class="post-nome">
                                    Rafael Mendes
                                    <span class="post-esporte">Skate</span>
                                </div>

                                <div class="post-data">
                                    @rafamendes · há 12 min
                                </div>
                            </div>

                            <button type="button" class="btn-seguir">Seguir</button>
                        </div>

                        <div class="post-texto">
                            Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                        </div>

                        <div class="ladoAlado margemDireita">
                           <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para foto
                            </span>
                        </div>
                        
                        <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para mapa
                            </span>
                        </div>
                        
                        </div>
                
                        <div class="post-acoes">
                            <button type="button" class="acao-post curtida">
                                <i class="bi bi-heart-fill"></i>
                                128
                            </button>

                            <button type="button" class="acao-post">
                                <i class="bi bi-chat"></i>
                                14
                            </button>

                            <button type="button" class="acao-post">
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
                         PUBLICAÇÃO 4
                    ====================================== -->

                    <article class="post-comunidade">
                        <div class="post-header">
                            <div class="post-avatar">
                                RM
                            </div>

                            <div class="post-usuario">
                                <div class="post-nome">
                                    Rafael Mendes
                                    <span class="post-esporte">Skate</span>
                                </div>

                                <div class="post-data">
                                    @rafamendes · há 12 min
                                </div>
                            </div>

                            <button type="button" class="btn-seguir">Seguir</button>
                        </div>

                        <div class="post-texto">
                            Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                        </div>

                        <div class="ladoAlado margemDireita">
                           <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para foto
                            </span>
                        </div>
                        
                        <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para mapa
                            </span>
                        </div>
                        
                        </div>
                
                        <div class="post-acoes">
                            <button type="button" class="acao-post curtida">
                                <i class="bi bi-heart-fill"></i>
                                128
                            </button>

                            <button type="button" class="acao-post">
                                <i class="bi bi-chat"></i>
                                14
                            </button>

                            <button type="button" class="acao-post">
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
                         PUBLICAÇÃO 5
                    ====================================== -->

                    <article class="post-comunidade">
                        <div class="post-header">
                            <div class="post-avatar">
                                RM
                            </div>

                            <div class="post-usuario">
                                <div class="post-nome">
                                    Rafael Mendes
                                    <span class="post-esporte">Skate</span>
                                </div>

                                <div class="post-data">
                                    @rafamendes · há 12 min
                                </div>
                            </div>

                            <button type="button" class="btn-seguir">Seguir</button>
                        </div>

                        <div class="post-texto">
                            Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                        </div>

                        <div class="ladoAlado margemDireita">
                           <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para foto
                            </span>
                        </div>
                        
                        <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para mapa
                            </span>
                        </div>
                        
                        </div>
                
                        <div class="post-acoes">
                            <button type="button" class="acao-post curtida">
                                <i class="bi bi-heart-fill"></i>
                                128
                            </button>

                            <button type="button" class="acao-post">
                                <i class="bi bi-chat"></i>
                                14
                            </button>

                            <button type="button" class="acao-post">
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
                         PUBLICAÇÃO 6
                    ====================================== -->

                    <article class="post-comunidade">
                        <div class="post-header">
                            <div class="post-avatar">
                                RM
                            </div>

                            <div class="post-usuario">
                                <div class="post-nome">
                                    Rafael Mendes
                                    <span class="post-esporte">Skate</span>
                                </div>

                                <div class="post-data">
                                    @rafamendes · há 12 min
                                </div>
                            </div>

                            <button type="button" class="btn-seguir">Seguir</button>
                        </div>

                        <div class="post-texto">
                            Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                        </div>

                        <div class="ladoAlado margemDireita">
                           <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para foto
                            </span>
                        </div>
                        
                        <div class="post-imagem2">
                            <i class="bi bi-image"></i>
                            <span>
                                espaço para mapa
                            </span>
                        </div>
                        
                        </div>
                
                        <div class="post-acoes">
                            <button type="button" class="acao-post curtida">
                                <i class="bi bi-heart-fill"></i>
                                128
                            </button>

                            <button type="button" class="acao-post">
                                <i class="bi bi-chat"></i>
                                14
                            </button>

                            <button type="button" class="acao-post">
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


                </div>
            </div>

            
        </section>
        <!-- MODAL -->
            <div id="modal" class="modal">
              <div class="modalConteudo">


                <button type="button" onclick="fecharModal()" class="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"></button>


                <!-- Conteúdo do modal -->
                <div id="conteudoModal"></div>


              </div>
            </div>
          </div>


    `;
});


