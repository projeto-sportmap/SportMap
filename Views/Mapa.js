const btnMapa = document.getElementById("btn-mapa");

btnMapa.addEventListener("click", function () {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <section class="app-section" id="section-dashboard">

            <div class="map-page">

                <!-- TOPO DO MAPA -->

                <div class="map-top">

                    <div class="sport-filters">

                        <button type="button" class="sport-filter active">
                            <i class="bi bi-grid"></i>
                            Todos
                        </button>

                        <button type="button" class="sport-filter">
                            <i class="bi bi-person-walking"></i>
                            Corrida
                        </button>

                        <button type="button" class="sport-filter">
                            <i class="bi bi-heart-pulse"></i>
                            Musculação
                        </button>

                        <button type="button" class="sport-filter">
                            <i class="bi bi-circle-fill"></i>
                            Futebol
                        </button>

                        <button type="button" class="sport-filter">
                            <i class="bi bi-bicycle"></i>
                            Bike
                        </button>

                        <button type="button" class="sport-filter">
                            <i class="bi bi-three-dots"></i>
                            Outros
                        </button>

                    </div>

                </div>


                <!-- CONTEÚDO PRINCIPAL DO MAPA -->

                <div class="map-content">

                    <!-- MAPA -->

                    <div class="sport-map">

                        <!-- FUNDO DO MAPA -->

                        <div class="map-background">

                            <div class="map-road road-1"></div>
                            <div class="map-road road-2"></div>
                            <div class="map-road road-3"></div>
                            <div class="map-road road-4"></div>

                            <span class="map-place place-1">
                                CENTRO
                            </span>

                            <span class="map-place place-2">
                                VILA RICA
                            </span>

                            <span class="map-place place-3">
                                JARDIM REGINA
                            </span>

                            <span class="map-place place-4">
                                ARARETAMA
                            </span>

                        </div>


                        <!-- RAIO DE 5 KM -->

                        <div class="radius-circle">

                            <span class="radius-label">
                                5 km
                            </span>

                        </div>


                        <!-- SUA LOCALIZAÇÃO -->

                        <div class="user-location">

                            <div class="user-pulse"></div>
                            <div class="user-dot"></div>

                        </div>


                        <!-- MARCADORES -->

                        <button 
                            type="button" 
                            class="sport-marker corrida marker-1" 
                            aria-label="Corrida"
                        >
                            <i class="bi bi-person-walking"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker futebol marker-2" 
                            aria-label="Futebol"
                        >
                            <i class="bi bi-circle-fill"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker bike marker-3" 
                            aria-label="Bike"
                        >
                            <i class="bi bi-bicycle"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker musculacao marker-4" 
                            aria-label="Musculação"
                        >
                            <i class="bi bi-heart-pulse"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker corrida marker-5" 
                            aria-label="Corrida"
                        >
                            <i class="bi bi-person-walking"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker futebol marker-6" 
                            aria-label="Futebol"
                        >
                            <i class="bi bi-circle-fill"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker bike marker-7" 
                            aria-label="Bike"
                        >
                            <i class="bi bi-bicycle"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker corrida marker-8" 
                            aria-label="Corrida"
                        >
                            <i class="bi bi-person-walking"></i>
                        </button>

                        <button 
                            type="button" 
                            class="sport-marker musculacao marker-9" 
                            aria-label="Musculação"
                        >
                            <i class="bi bi-heart-pulse"></i>
                        </button>


                        <!-- CONTROLES -->

                        <div class="map-controls">

                            <button type="button" aria-label="Aproximar">
                                <i class="bi bi-plus-lg"></i>
                            </button>

                            <button type="button" aria-label="Afastar">
                                <i class="bi bi-dash-lg"></i>
                            </button>

                            <button type="button" aria-label="Centralizar no meu local">
                                <i class="bi bi-crosshair"></i>
                            </button>

                        </div>


                        <!-- INFORMAÇÃO DO RAIO -->

                        <div class="radius-info">

                            <div class="radius-info-icon">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>

                            <div>

                                <strong>
                                    Você está vendo pessoas em um raio de 5 km
                                </strong>

                                <span>
                                    42 pessoas praticando esportes agora
                                </span>

                            </div>

                        </div>


                        <!-- LEGENDA -->

                        <div class="map-legend">

                            <div class="legend-item">
                                <span class="legend-dot corrida"></span>
                                Corrida
                            </div>

                            <div class="legend-item">
                                <span class="legend-dot musculacao"></span>
                                Musculação
                            </div>

                            <div class="legend-item">
                                <span class="legend-dot futebol"></span>
                                Futebol
                            </div>

                            <div class="legend-item">
                                <span class="legend-dot bike"></span>
                                Bike
                            </div>

                        </div>


                        <!-- COMPARTILHAR -->

                        <button type="button" class="share-sport-button">

                            <i class="bi bi-share"></i>
                            Compartilhar seu esporte

                        </button>


                        <!-- MODAL COMPARTILHAR ESPORTE -->

                        <div class="share-modal-overlay" id="share-modal-overlay">
                            <div class="share-modal">

                                <div class="share-modal-header">
                                    <h3>Compartilhar seu esporte</h3>
                                    <button type="button" class="share-modal-close" id="share-modal-close">
                                        <i class="bi bi-x-lg"></i>
                                    </button>
                                </div>

                                <div class="share-modal-body">

                                    <!-- ESPORTE -->
                                    <label class="share-modal-label">Esporte</label>
                                    <div class="share-sport-options" id="share-sport-options">
                                        <button type="button" class="share-sport-option" data-sport="corrida">
                                            <i class="bi bi-person-walking"></i> Corrida
                                        </button>
                                        <button type="button" class="share-sport-option" data-sport="musculacao">
                                            <i class="bi bi-heart-pulse"></i> Musculação
                                        </button>
                                        <button type="button" class="share-sport-option" data-sport="futebol">
                                            <i class="bi bi-circle-fill"></i> Futebol
                                        </button>
                                        <button type="button" class="share-sport-option" data-sport="bike">
                                            <i class="bi bi-bicycle"></i> Bike
                                        </button>
                                        <button type="button" class="share-sport-option" data-sport="outros">
                                            <i class="bi bi-three-dots"></i> Outros
                                        </button>
                                    </div>

                                    <!-- HORÁRIO -->
                                    <label class="share-modal-label" for="share-datetime">Data e horário</label>
                                    <input type="datetime-local" id="share-datetime" class="share-modal-input">

                                    <!-- LOCAL NO MAPA -->
                                    <label class="share-modal-label">
                                        Local (clique no mapa para marcar)
                                    </label>
                                    <div class="share-mini-map" id="share-mini-map">
                                        <div class="map-road road-1"></div>
                                        <div class="map-road road-2"></div>
                                        <div class="map-road road-3"></div>
                                        <div class="map-road road-4"></div>

                                        <span class="map-place place-1">CENTRO</span>
                                        <span class="map-place place-2">VILA RICA</span>
                                        <span class="map-place place-3">JARDIM REGINA</span>
                                        <span class="map-place place-4">ARARETAMA</span>

                                        <div class="share-marker" id="share-marker" style="display:none;">
                                            <i class="bi bi-geo-alt-fill"></i>
                                        </div>
                                    </div>
                                    <span class="share-map-hint" id="share-map-hint">
                                        Nenhum local selecionado
                                    </span>

                                    <!-- DESCRIÇÃO -->
                                    <label class="share-modal-label" for="share-description">Descrição (opcional)</label>
                                    <textarea id="share-description" class="share-modal-input" rows="2"
                                        placeholder="Ex: Corrida leve, ritmo tranquilo..."></textarea>

                                </div>

                                <div class="share-modal-footer">
                                    <button type="button" class="share-btn-cancel" id="share-btn-cancel">
                                        Cancelar
                                    </button>
                                    <button type="button" class="share-btn-post" id="share-btn-post">
                                        Postar
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>


                    <!-- PESSOAS POR PERTO -->

                    <aside class="nearby-people">

                        <div class="nearby-header">

                            <div>

                                <h2>
                                    Pessoas por perto
                                </h2>

                                <span>
                                    42 resultados
                                </span>

                            </div>

                            <i class="bi bi-people"></i>

                        </div>


                        <!-- PESSOA 1 -->

                        <div class="person-card">

                            <div class="person-avatar">
                                LF
                            </div>

                            <div class="person-info">

                                <div class="person-name">
                                    Lucas Ferreira
                                    <span class="online"></span>
                                </div>

                                <div class="person-sport corrida-text">
                                    <i class="bi bi-person-walking"></i>
                                    Corrida
                                </div>

                                <p>
                                    Corrida leve no Parque da Cidade
                                </p>

                                <span class="person-distance">
                                    <i class="bi bi-geo-alt"></i>
                                    1,2 km
                                </span>

                            </div>

                            <button type="button" class="connect-button">
                                Conectar
                            </button>

                        </div>


                        <!-- PESSOA 2 -->

                        <div class="person-card">

                            <div class="person-avatar avatar-purple">
                                AS
                            </div>

                            <div class="person-info">

                                <div class="person-name">
                                    Ana Souza
                                    <span class="online"></span>
                                </div>

                                <div class="person-sport musculacao-text">
                                    <i class="bi bi-heart-pulse"></i>
                                    Musculação
                                </div>

                                <p>
                                    Treino de membros superiores
                                </p>

                                <span class="person-distance">
                                    <i class="bi bi-geo-alt"></i>
                                    2,4 km
                                </span>

                            </div>

                            <button type="button" class="connect-button">
                                Conectar
                            </button>

                        </div>


                        <!-- PESSOA 3 -->

                        <div class="person-card">

                            <div class="person-avatar avatar-green">
                                RC
                            </div>

                            <div class="person-info">

                                <div class="person-name">
                                    Rafael Costa
                                    <span class="online"></span>
                                </div>

                                <div class="person-sport futebol-text">
                                    <i class="bi bi-circle-fill"></i>
                                    Futebol
                                </div>

                                <p>
                                    Jogando no campo do Araratema
                                </p>

                                <span class="person-distance">
                                    <i class="bi bi-geo-alt"></i>
                                    3,1 km
                                </span>

                            </div>

                            <button type="button" class="connect-button">
                                Conectar
                            </button>

                        </div>


                        <!-- PESSOA 4 -->

                        <div class="person-card">

                            <div class="person-avatar avatar-blue">
                                MS
                            </div>

                            <div class="person-info">

                                <div class="person-name">
                                    Matheus Silva
                                    <span class="online"></span>
                                </div>

                                <div class="person-sport bike-text">
                                    <i class="bi bi-bicycle"></i>
                                    Bike
                                </div>

                                <p>
                                    Pedalada pelo centro
                                </p>

                                <span class="person-distance">
                                    <i class="bi bi-geo-alt"></i>
                                    3,8 km
                                </span>

                            </div>

                            <button type="button" class="connect-button">
                                Conectar
                            </button>

                        </div>


                        <!-- PESSOA 5 -->

                        <div class="person-card">

                            <div class="person-avatar">
                                GL
                            </div>

                            <div class="person-info">

                                <div class="person-name">
                                    Gabriela Lima
                                    <span class="online"></span>
                                </div>

                                <div class="person-sport corrida-text">
                                    <i class="bi bi-person-walking"></i>
                                    Corrida
                                </div>

                                <p>
                                    Corrida na orla do Ribeirão
                                </p>

                                <span class="person-distance">
                                    <i class="bi bi-geo-alt"></i>
                                    4,5 km
                                </span>

                            </div>

                            <button type="button" class="connect-button">
                                Conectar
                            </button>

                        </div>

                    </aside>

                </div>

            </div>

        </section>

    `;

    // ===== LÓGICA DO MODAL "COMPARTILHAR ESPORTE" =====

    const shareOverlay = document.getElementById("share-modal-overlay");
    const shareBtnOpen = conteudo.querySelector(".share-sport-button");
    const shareBtnClose = document.getElementById("share-modal-close");
    const shareBtnCancel = document.getElementById("share-btn-cancel");
    const shareBtnPost = document.getElementById("share-btn-post");
    const sportOptions = document.querySelectorAll(".share-sport-option");
    const miniMap = document.getElementById("share-mini-map");
    const marker = document.getElementById("share-marker");
    const mapHint = document.getElementById("share-map-hint");
    const datetimeInput = document.getElementById("share-datetime");

    let selectedSport = null;
    let selectedLocation = null; // { x, y } em porcentagem

    function abrirModal() {
        shareOverlay.classList.add("active");
    }

    function fecharModal() {
        shareOverlay.classList.remove("active");
        resetarModal();
    }

    function resetarModal() {
        selectedSport = null;
        selectedLocation = null;
        sportOptions.forEach(opt => opt.classList.remove("selected"));
        marker.style.display = "none";
        mapHint.textContent = "Nenhum local selecionado";
        datetimeInput.value = "";
        document.getElementById("share-description").value = "";
    }

    // abrir modal
    shareBtnOpen.addEventListener("click", abrirModal);

    // fechar modal (X e Cancelar)
    shareBtnClose.addEventListener("click", fecharModal);
    shareBtnCancel.addEventListener("click", fecharModal);

    // fechar clicando fora do card
    shareOverlay.addEventListener("click", function (e) {
        if (e.target === shareOverlay) fecharModal();
    });

    // seleção de esporte
    sportOptions.forEach(function (btn) {
        btn.addEventListener("click", function () {
            sportOptions.forEach(opt => opt.classList.remove("selected"));
            btn.classList.add("selected");
            selectedSport = btn.dataset.sport;
        });
    });

    // clique no mini mapa para marcar local
    miniMap.addEventListener("click", function (e) {
        const rect = miniMap.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        selectedLocation = { x, y };

        marker.style.left = x + "%";
        marker.style.top = y + "%";
        marker.style.display = "block";

        mapHint.textContent = `Local selecionado (${x.toFixed(0)}%, ${y.toFixed(0)}%)`;
    });

    // postar
    shareBtnPost.addEventListener("click", function () {
        if (!selectedSport) {
            alert("Selecione um esporte.");
            return;
        }
        if (!datetimeInput.value) {
            alert("Selecione data e horário.");
            return;
        }
        if (!selectedLocation) {
            alert("Marque um local no mapa.");
            return;
        }

        const descricao = document.getElementById("share-description").value;

        const novoPost = {
            esporte: selectedSport,
            horario: datetimeInput.value,
            local: selectedLocation,
            descricao: descricao
        };

        console.log("Novo post de esporte:", novoPost);

        // AQUI: enviar para backend/API, ou adicionar um marcador
        // real no mapa principal (.sport-map) usando novoPost.local

        fecharModal();
    });

});