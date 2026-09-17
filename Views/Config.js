const btnConfiguracoes = document.getElementById("btn-perfilconfig");

btnConfiguracoes.addEventListener("click", function () {
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = `

        <div class="config-page">

            <!-- CABEÇALHO -->

            <div class="config-header">

                <div>

                    <span class="config-kicker">
                        CONTA
                    </span>

                    <h2>
                        Configurações
                    </h2>

                    <p>
                        Gerencie suas informações e preferências do SportMap.
                    </p>

                </div>

            </div>


            <!-- CONTEÚDO -->

            <div class="config-content">


                <!-- ================= PERFIL ================= -->

                <section class="config-section">

                    <div class="config-section-title">

                        <div class="config-title-icon">
                            <i class="bi bi-person"></i>
                        </div>

                        <div>

                            <h3>
                                Perfil
                            </h3>

                            <p>
                                Altere suas informações públicas.
                            </p>

                        </div>

                    </div>


                    <!-- FOTO -->

                    <div class="profile-photo-config">

                        <div class="config-avatar">

                            <img
                                id="config-profile-image"
                                src="https://i.pravatar.cc/150?img=12"
                                alt="Foto de perfil"
                            >

                        </div>


                        <div class="profile-photo-info">

                            <strong>
                                Foto de perfil
                            </strong>

                            <span>
                                JPG ou PNG. Recomendado 400x400px.
                            </span>


                            <label
                                for="profile-photo-input"
                                class="config-button secondary"
                            >

                                <i class="bi bi-camera"></i>

                                Alterar foto

                            </label>


                            <input
                                type="file"
                                id="profile-photo-input"
                                accept="image/png, image/jpeg"
                                hidden
                            >

                        </div>

                    </div>


                    <!-- NOME -->

                    <div class="config-field">

                        <label>
                            Nome de usuário
                        </label>

                        <div class="config-input-wrapper">

                            <i class="bi bi-at"></i>

                            <input
                                type="text"
                                value="joaovitor"
                                id="config-username"
                            >

                        </div>

                    </div>


                    <!-- NOME COMPLETO -->

                    <div class="config-field">

                        <label>
                            Nome
                        </label>

                        <div class="config-input-wrapper">

                            <i class="bi bi-person"></i>

                            <input
                                type="text"
                                value="João Vitor Pereira"
                                id="config-name"
                            >

                        </div>

                    </div>


                    <button
                        type="button"
                        class="config-button primary"
                        id="save-profile-button"
                    >

                        <i class="bi bi-check-lg"></i>

                        Salvar alterações

                    </button>

                </section>



                <!-- ================= CONTA ================= -->

                <section class="config-section">

                    <div class="config-section-title">

                        <div class="config-title-icon">
                            <i class="bi bi-person-vcard"></i>
                        </div>

                        <div>

                            <h3>
                                Conta
                            </h3>

                            <p>
                                Gerencie os dados utilizados para acessar sua conta.
                            </p>

                        </div>

                    </div>


                    <!-- EMAIL -->

                    <div class="config-field">

                        <label>
                            E-mail
                        </label>

                        <div class="config-input-wrapper">

                            <i class="bi bi-envelope"></i>

                            <input
                                type="email"
                                value="joaovitor@email.com"
                                id="config-email"
                            >

                        </div>

                    </div>


                    <button
                        type="button"
                        class="config-button primary"
                        id="save-email-button"
                    >

                        <i class="bi bi-check-lg"></i>

                        Atualizar e-mail

                    </button>


                    <!-- SENHA -->

                    <div class="config-option">

                        <div class="config-option-info">

                            <div class="config-option-icon">
                                <i class="bi bi-lock"></i>
                            </div>

                            <div>

                                <strong>
                                    Senha
                                </strong>

                                <span>
                                    Altere sua senha de acesso.
                                </span>

                            </div>

                        </div>


                        <button
                            type="button"
                            class="config-button secondary"
                            id="change-password-button"
                        >

                            Alterar senha

                            <i class="bi bi-chevron-right"></i>

                        </button>

                    </div>

                </section>



                <!-- ================= ESPORTES ================= -->

                <section class="config-section">

                    <div class="config-section-title">

                        <div class="config-title-icon">
                            <i class="bi bi-trophy"></i>
                        </div>

                        <div>

                            <h3>
                                Esportes
                            </h3>

                            <p>
                                Escolha os esportes que você pratica ou acompanha.
                            </p>

                        </div>

                    </div>


                    <div class="sports-selection">

                        <button
                            type="button"
                            class="sport-config active"
                        >
                            ⚽ Futebol
                        </button>

                        <button
                            type="button"
                            class="sport-config"
                        >
                            🏀 Basquete
                        </button>

                        <button
                            type="button"
                            class="sport-config"
                        >
                            🏐 Vôlei
                        </button>

                        <button
                            type="button"
                            class="sport-config"
                        >
                            🛹 Skate
                        </button>

                        <button
                            type="button"
                            class="sport-config"
                        >
                            🎾 Tênis
                        </button>

                        <button
                            type="button"
                            class="sport-config"
                        >
                            🏃 Corrida
                        </button>

                    </div>

                </section>



                <!-- ================= PREFERÊNCIAS ================= -->

                <section class="config-section">

                    <div class="config-section-title">

                        <div class="config-title-icon">
                            <i class="bi bi-sliders"></i>
                        </div>

                        <div>

                            <h3>
                                Preferências
                            </h3>

                            <p>
                                Personalize sua experiência no SportMap.
                            </p>

                        </div>

                    </div>


                    <!-- NOTIFICAÇÕES -->

                    <div class="config-toggle-option">

                        <div class="config-option-info">

                            <div class="config-option-icon">
                                <i class="bi bi-bell"></i>
                            </div>

                            <div>

                                <strong>
                                    Notificações
                                </strong>

                                <span>
                                    Receber notificações sobre curtidas,
                                    comentários e seguidores.
                                </span>

                            </div>

                        </div>


                        <label class="switch">

                            <input
                                type="checkbox"
                                checked
                            >

                            <span class="slider"></span>

                        </label>

                    </div>


                    <!-- LOCALIZAÇÃO -->

                    <div class="config-toggle-option">

                        <div class="config-option-info">

                            <div class="config-option-icon">
                                <i class="bi bi-geo-alt"></i>
                            </div>

                            <div>

                                <strong>
                                    Localização
                                </strong>

                                <span>
                                    Permitir que o SportMap encontre
                                    atividades esportivas próximas.
                                </span>

                            </div>

                        </div>


                        <label class="switch">

                            <input
                                type="checkbox"
                                checked
                            >

                            <span class="slider"></span>

                        </label>

                    </div>


                    <!-- PERFIL PRIVADO -->

                    <div class="config-toggle-option">

                        <div class="config-option-info">

                            <div class="config-option-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>

                            <div>

                                <strong>
                                    Perfil privado
                                </strong>

                                <span>
                                    Somente pessoas aprovadas poderão
                                    acompanhar seu perfil.
                                </span>

                            </div>

                        </div>


                        <label class="switch">

                            <input
                                type="checkbox"
                            >

                            <span class="slider"></span>

                        </label>

                    </div>

                </section>



                <!-- ================= ZONA DE PERIGO ================= -->

                <section class="config-section danger-section">

                    <div class="config-section-title">

                        <div class="config-title-icon danger">
                            <i class="bi bi-exclamation-triangle"></i>
                        </div>

                        <div>

                            <h3>
                                Conta
                            </h3>

                            <p>
                                Ações relacionadas à sua conta.
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="logout-button"
                        id="logout-button"
                    >

                        <i class="bi bi-box-arrow-right"></i>

                        Sair da conta

                    </button>

                </section>


            </div>

        </div>

    `;


});