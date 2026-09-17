const btnMensagens = document.getElementById("btn-mensagens");

btnMensagens.addEventListener("click", function () {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <section class="app-section" id="section-mensagens">

            <div class="messages-page">

                <!-- LISTA DE CONVERSAS -->

                <section class="chat-list">

                    <div class="chat-list-header">
                        <h2>Mensagens</h2>
                        <button class="icon-btn" title="Nova mensagem">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                    </div>

                    <div class="chat-search">
                        <input 
                            type="text" 
                            placeholder="Pesquisar conversas..." 
                        />
                    </div>

                    <div class="conversations">

                        <!-- CONVERSA 1 -->

                        <div class="conversation-item active" data-chat="rafael">

                            <div class="avatar avatar-orange">
                                RM
                            </div>

                            <div class="conversation-info">

                                <div class="conversation-top">
                                    <span class="conversation-name">
                                        Rafael Mendes
                                    </span>
                                    <span class="conversation-time">
                                        12 min
                                    </span>
                                </div>

                                <p class="conversation-preview">
                                    Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
                                </p>

                            </div>

                            <span class="unread-dot"></span>

                        </div>


                        <!-- CONVERSA 2 -->

                        <div class="conversation-item" data-chat="beatriz">

                            <div class="avatar avatar-blue">
                                BS
                            </div>

                            <div class="conversation-info">

                                <div class="conversation-top">
                                    <span class="conversation-name">
                                        Beatriz Souza
                                    </span>
                                    <span class="conversation-time">
                                        1 h
                                    </span>
                                </div>

                                <p class="conversation-preview">
                                    Vai rolar vôlei na quadra da Vila às 18h?
                                </p>

                            </div>

                        </div>


                        <!-- CONVERSA 3 -->

                        <div class="conversation-item" data-chat="lucas">

                            <div class="avatar avatar-green">
                                LC
                            </div>

                            <div class="conversation-info">

                                <div class="conversation-top">
                                    <span class="conversation-name">
                                        Lucas Andrade
                                    </span>
                                    <span class="conversation-time">
                                        3 h
                                    </span>
                                </div>

                                <p class="conversation-preview">
                                    Marca aí, faltou gente pro fut de quinta
                                </p>

                            </div>

                        </div>


                        <!-- CONVERSA 4 -->

                        <div class="conversation-item" data-chat="grupo">

                            <div class="avatar avatar-purple">
                                TQ
                            </div>

                            <div class="conversation-info">

                                <div class="conversation-top">
                                    <span class="conversation-name">
                                        Tênis de Quarta
                                    </span>
                                    <span class="conversation-time">
                                        1 dia
                                    </span>
                                </div>

                                <p class="conversation-preview">
                                    Mariana: bora trocar a quadra pra sexta
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                <!-- JANELA DA CONVERSA -->

                <section class="chat-window">

                    <div class="chat-window-header">

                        <div class="chat-user">

                            <div class="avatar avatar-orange">
                                RM
                            </div>

                            <div>
                                <div class="chat-user-name">
                                    Rafael Mendes
                                </div>
                                <div class="chat-user-status">
                                    <span class="status-dot"></span>
                                    online agora
                                </div>
                            </div>

                        </div>

                        <div class="chat-actions">

                            <button type="button" class="icon-btn">
                                <i class="bi bi-camera"></i>
                            </button>

                            <button type="button" class="icon-btn">
                                <i class="bi bi-info-circle"></i>
                            </button>

                        </div>

                    </div>


                    <div class="messages" id="messages">

                        <div class="message received">
                            <div class="avatar avatar-orange small">RM</div>
                            <div class="bubble">
                                <p>E aí, viu o vídeo da sessão de hoje?</p>
                                <span class="msg-time">14:02</span>
                            </div>
                        </div>

                        <div class="message sent">
                            <div class="bubble">
                                <p>Vi sim! O ollie no corrimão ficou insano 🔥</p>
                                <span class="msg-time">14:05</span>
                            </div>
                        </div>

                        <div class="message received">
                            <div class="avatar avatar-orange small">RM</div>
                            <div class="bubble">
                                <p>Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹</p>
                                <span class="msg-time">14:07</span>
                            </div>
                        </div>

                        <div class="message sent">
                            <div class="bubble">
                                <p>Bora marcar amanhã de novo, mesmo horário?</p>
                                <span class="msg-time">14:09</span>
                            </div>
                        </div>

                    </div>


                    <form class="chat-input" id="chatForm">

                        <button type="button" class="icon-btn">
                            <i class="bi bi-emoji-smile"></i>
                        </button>

                        <input 
                            type="text" 
                            id="chatInput" 
                            placeholder="Escreva uma mensagem..." 
                            autocomplete="off" 
                        />

                        <button type="submit" class="send-btn">
                            Enviar
                        </button>

                    </form>

                </section>

            </div>

        </section>

    `;

    iniciarMensagens();

});