const conteudo = document.getElementById("conteudo");

const btnFeed = document.getElementById("btn-feed");


btnFeed.addEventListener("click", function(){

    conteudo.innerHTML=`

    <div class="feed-main">

          <!-- BANNER DO FEED -->
          <div class="feed-hero">
            <!-- FOTO AQUI -->
            <div class="feed-hero-photo">
              <img src="../img/fundo.png" class="feed-hero-photo-img">
            </div>
          </div>

          <!-- CABEÇALHO -->

          <div class="feed-header">

            <div>

              <span class="feed-kicker">
                COMUNIDADE
              </span>

              <h2>
                O que está acontecendo
              </h2>

              <p>
                Acompanhe os momentos esportivos da sua comunidade.
              </p>

            </div>


            <button
              type="button"
              class="feed-create-button"
              id="create-post-button"
            >

              <i class="bi bi-plus-lg"></i>

              Criar publicação

            </button>

          </div>


          <!-- FILTROS -->

          <div class="feed-filters">

            <button
              type="button"
              class="feed-filter active"
              data-filter="todos"
            >
              Todos
            </button>

            <button
              type="button"
              class="feed-filter"
              data-filter="Futebol"
            >
              <i class="bi bi-circle-fill"></i>
              Futebol
            </button>

            <button
              type="button"
              class="feed-filter"
              data-filter="Basquete"
            >
              <i class="bi bi-basketball"></i>
              Basquete
            </button>

            <button
              type="button"
              class="feed-filter"
              data-filter="Skate"
            >
              <i class="bi bi-person"></i>
              Skate
            </button>

            <button
              type="button"
              class="feed-filter"
              data-filter="Vôlei"
            >
              <i class="bi bi-dribbble"></i>
              Vôlei
            </button>

            <button
              type="button"
              class="feed-filter"
              data-filter="Tênis"
            >
              <i class="bi bi-circle"></i>
              Tênis
            </button>

          </div>


          <!-- RESULTADO DA BUSCA -->

          <div
            class="feed-search-result"
            id="feed-search-result"
          ></div>


          <!-- POSTS -->

          <div class="feed-wrap" id="feed-posts">


            <!-- ================= POST 1 ================= -->

            <article
              class="post-card"
              data-sport="Skate"
              data-search="Rafael Mendes rafamendes Skate Fechamos a pista hoje cedo ninguém segurou esse ollie"
            >

              <div class="post-head">

                <div class="avatar">
                  RM
                </div>

                <div class="post-user">

                  <div class="name">

                    Rafael Mendes

                    <span class="sport-tag">
                      Skate
                    </span>

                  </div>

                  <div class="meta">
                    @rafamendes · há 12 min
                  </div>

                </div>

                <button
                  type="button"
                  class="post-follow"
                >
                  Seguir
                </button>

              </div>


              <div class="post-caption">
                Fechamos a pista hoje cedo, ninguém segurou esse ollie 🛹
              </div>


              <div class="post-photo">

                <i class="bi bi-image"></i>

                <span>espaço para foto</span>

              </div>


              <div class="post-actions">

                <button
                  type="button"
                  class="action-btn like-button liked"
                  data-likes="128"
                >

                  <i class="bi bi-heart-fill"></i>

                  <span class="like-count">
                    128
                  </span>

                </button>


                <button
                  type="button"
                  class="action-btn"
                >

                  <i class="bi bi-chat"></i>
                  14

                </button>


                <button
                  type="button"
                  class="action-btn share-button"
                >

                  <i class="bi bi-share"></i>
                  Compartilhar

                </button>

              </div>


              <div class="post-likes">

                Curtido por
                <strong>Vinícius R.</strong>
                e mais
                <strong>127 pessoas</strong>

              </div>

            </article>


            <!-- ================= POST 2 ================= -->

            <article
              class="post-card"
              data-sport="Vôlei"
              data-search="Julia Alves ju.alves Vôlei Treino sábado quadra Vila Time completo domingo"
            >

              <div class="post-head">

                <div class="avatar">
                  JA
                </div>

                <div class="post-user">

                  <div class="name">

                    Julia Alves

                    <span class="sport-tag">
                      Vôlei
                    </span>

                  </div>

                  <div class="meta">
                    @ju.alves · há 40 min
                  </div>

                </div>

                <button
                  type="button"
                  class="post-follow"
                >
                  Seguir
                </button>

              </div>


              <div class="post-caption">
                Treino de sábado na quadra da Vila.
                Time completo pra domingo! 🏐
              </div>


              <div class="post-photo">

                <i class="bi bi-image"></i>

                <span>espaço para foto</span>

              </div>


              <div class="post-actions">

                <button
                  type="button"
                  class="action-btn like-button"
                  data-likes="76"
                >

                  <i class="bi bi-heart"></i>

                  <span class="like-count">
                    76
                  </span>

                </button>


                <button type="button" class="action-btn">

                  <i class="bi bi-chat"></i>
                  5

                </button>


                <button
                  type="button"
                  class="action-btn share-button"
                >

                  <i class="bi bi-share"></i>
                  Compartilhar

                </button>

              </div>


              <div class="post-likes">

                Curtido por
                <strong>76 pessoas</strong>

              </div>

            </article>


            <!-- ================= POST 3 ================= -->

            <article
              class="post-card"
              data-sport="Futebol"
              data-search="Bruno Zago brunozago Futebol Gol bicicleta pelada hoje"
            >

              <div class="post-head">

                <div class="avatar">
                  BZ
                </div>

                <div class="post-user">

                  <div class="name">

                    Bruno Zago

                    <span class="sport-tag">
                      Futebol
                    </span>

                  </div>

                  <div class="meta">
                    @brunozago · há 1 h
                  </div>

                </div>

                <button
                  type="button"
                  class="post-follow"
                >
                  Seguir
                </button>

              </div>


              <div class="post-caption">
                Gol de bicicleta na pelada de hoje,
                quem viu sabe 🔥⚽
              </div>


              <div class="post-photo">

                <i class="bi bi-image"></i>

                <span>espaço para foto</span>

              </div>


              <div class="post-actions">

                <button
                  type="button"
                  class="action-btn like-button liked"
                  data-likes="342"
                >

                  <i class="bi bi-heart-fill"></i>

                  <span class="like-count">
                    342
                  </span>

                </button>


                <button type="button" class="action-btn">

                  <i class="bi bi-chat"></i>
                  48

                </button>


                <button
                  type="button"
                  class="action-btn share-button"
                >

                  <i class="bi bi-share"></i>
                  Compartilhar

                </button>

              </div>


              <div class="post-likes">

                Curtido por
                <strong>Rafael M.</strong>
                e mais
                <strong>341 pessoas</strong>

              </div>

            </article>


            <!-- ================= POST 4 ================= -->

            <article
              class="post-card"
              data-sport="Tênis"
              data-search="Carla Souza carlas Tênis Primeira aula quadra nova saibro"
            >

              <div class="post-head">

                <div class="avatar">
                  CS
                </div>

                <div class="post-user">

                  <div class="name">

                    Carla Souza

                    <span class="sport-tag">
                      Tênis
                    </span>

                  </div>

                  <div class="meta">
                    @carlas · há 2 h
                  </div>

                </div>

                <button
                  type="button"
                  class="post-follow"
                >
                  Seguir
                </button>

              </div>


              <div class="post-caption">
                Primeira aula na quadra nova,
                saudade de jogar em saibro 🎾
              </div>


              <div class="post-photo">

                <i class="bi bi-image"></i>

                <span>espaço para foto</span>

              </div>


              <div class="post-actions">

                <button
                  type="button"
                  class="action-btn like-button"
                  data-likes="59"
                >

                  <i class="bi bi-heart"></i>

                  <span class="like-count">
                    59
                  </span>

                </button>


                <button type="button" class="action-btn">

                  <i class="bi bi-chat"></i>
                  3

                </button>


                <button
                  type="button"
                  class="action-btn share-button"
                >

                  <i class="bi bi-share"></i>
                  Compartilhar

                </button>

              </div>


              <div class="post-likes">

                Curtido por
                <strong>59 pessoas</strong>

              </div>

            </article>


            <!-- ================= POST 5 ================= -->

            <article
              class="post-card"
              data-sport="Basquete"
              data-search="Vinícius Rocha viniciusr Basquete 5x5 Ibirapuera quadra"
            >

              <div class="post-head">

                <div class="avatar">
                  VR
                </div>

                <div class="post-user">

                  <div class="name">

                    Vinícius Rocha

                    <span class="sport-tag">
                      Basquete
                    </span>

                  </div>

                  <div class="meta">
                    @viniciusr · há 3 h
                  </div>

                </div>

                <button
                  type="button"
                  class="post-follow"
                >
                  Seguir
                </button>

              </div>


              <div class="post-caption">
                Fechamos com 5x5 até escurecer na quadra
                do Ibirapuera 🏀
              </div>


              <div class="post-photo">

                <i class="bi bi-image"></i>

                <span>espaço para foto</span>

              </div>


              <div class="post-actions">

                <button
                  type="button"
                  class="action-btn like-button liked"
                  data-likes="213"
                >

                  <i class="bi bi-heart-fill"></i>

                  <span class="like-count">
                    213
                  </span>

                </button>


                <button type="button" class="action-btn">

                  <i class="bi bi-chat"></i>
                  22

                </button>


                <button
                  type="button"
                  class="action-btn share-button"
                >

                  <i class="bi bi-share"></i>
                  Compartilhar

                </button>

              </div>


              <div class="post-likes">

                Curtido por
                <strong>Julia A.</strong>
                e mais
                <strong>212 pessoas</strong>

              </div>

            </article>


            <!-- ================= POST 6 ================= -->

            <article
              class="post-card"
              data-sport="Futebol"
              data-search="Thiago Lima thiagol Futebol racha quinta time"
            >

              <div class="post-head">

                <div class="avatar">
                  TL
                </div>

                <div class="post-user">

                  <div class="name">

                    Thiago Lima

                    <span class="sport-tag">
                      Futebol
                    </span>

                  </div>

                  <div class="meta">
                    @thiagol · há 4 h
                  </div>

                </div>

                <button
                  type="button"
                  class="post-follow"
                >
                  Seguir
                </button>

              </div>


              <div class="post-caption">
                Time montado pro racha de quinta,
                só falta você 👀⚽
              </div>


              <div class="post-photo">

                <i class="bi bi-image"></i>

                <span>espaço para foto</span>

              </div>


              <div class="post-actions">

                <button
                  type="button"
                  class="action-btn like-button"
                  data-likes="45"
                >

                  <i class="bi bi-heart"></i>

                  <span class="like-count">
                    45
                  </span>

                </button>


                <button type="button" class="action-btn">

                  <i class="bi bi-chat"></i>
                  9

                </button>


                <button
                  type="button"
                  class="action-btn share-button"
                >

                  <i class="bi bi-share"></i>
                  Compartilhar

                </button>

              </div>


              <div class="post-likes">

                Curtido por
                <strong>45 pessoas</strong>

              </div>

            </article>


          </div>


          <!-- SEM RESULTADOS -->

          <div
            class="feed-empty"
            id="feed-empty"
          >

            <i class="bi bi-search"></i>

            <h3>Nenhuma publicação encontrada</h3>

            <p>
              Tente buscar por outro nome, esporte ou assunto.
            </p>

          </div>

        </div>

    `;

    // ===== ADICIONADO: liga o botão de criar publicação =====
    const createPostButton = document.getElementById("create-post-button");
    if (createPostButton) {
      createPostButton.addEventListener("click", abrirModalPublicacao);
    }

});


// ===== ADICIONADO: modal de criar publicação =====

function abrirModalPublicacao() {
  if (document.getElementById("create-post-overlay")) return; // evita duplicar

  const overlay = document.createElement("div");
  overlay.id = "create-post-overlay";
  overlay.className = "create-post-overlay";
  overlay.innerHTML = `
    <div class="create-post-modal">

      <div class="create-post-header">
        <h3>Criar publicação</h3>
        <button type="button" class="create-post-close" id="create-post-close">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="create-post-body">

        <label class="create-post-photo" for="create-post-photo-input">
          <input type="file" id="create-post-photo-input" accept="image/*" hidden />

          <div class="create-post-photo-placeholder" id="create-post-photo-placeholder">
            <i class="bi bi-image"></i>
            <span>Clique para adicionar uma foto</span>
          </div>

          <img id="create-post-photo-preview" class="create-post-photo-preview" hidden />
        </label>

        <textarea
          id="create-post-description"
          class="create-post-description"
          placeholder="Escreva uma legenda para sua publicação..."
          rows="4"
        ></textarea>

      </div>

      <div class="create-post-footer">
        <button type="button" class="create-post-cancel" id="create-post-cancel">Cancelar</button>
        <button type="button" class="create-post-submit" id="create-post-submit">Publicar</button>
      </div>

    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden"; // trava o scroll atrás do modal

  iniciarModalPublicacao(overlay);
}

function fecharModalPublicacao() {
  const overlay = document.getElementById("create-post-overlay");
  if (overlay) overlay.remove();
  document.body.style.overflow = "";
}

function iniciarModalPublicacao(overlay) {
  const closeBtn = overlay.querySelector("#create-post-close");
  const cancelBtn = overlay.querySelector("#create-post-cancel");
  const submitBtn = overlay.querySelector("#create-post-submit");
  const photoInput = overlay.querySelector("#create-post-photo-input");
  const photoPlaceholder = overlay.querySelector("#create-post-photo-placeholder");
  const photoPreview = overlay.querySelector("#create-post-photo-preview");
  const description = overlay.querySelector("#create-post-description");

  closeBtn.addEventListener("click", fecharModalPublicacao);
  cancelBtn.addEventListener("click", fecharModalPublicacao);

  // Fecha clicando no fundo escuro (fora do card)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharModalPublicacao();
  });

  // Fecha com Esc
  document.addEventListener("keydown", function escListener(e) {
    if (e.key === "Escape") {
      fecharModalPublicacao();
      document.removeEventListener("keydown", escListener);
    }
  });

  // Preview da foto escolhida
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreview.src = e.target.result;
      photoPreview.hidden = false;
      photoPlaceholder.hidden = true;
    };
    reader.readAsDataURL(file);
  });

  // Botão Publicar (por enquanto só fecha — depois liga com o backend)
  submitBtn.addEventListener("click", () => {
    const texto = description.value.trim();

    if (!texto && !photoInput.files[0]) {
      alert("Escreva algo ou adicione uma foto antes de publicar.");
      return;
    }

    console.log("Nova publicação:", {
      texto,
      foto: photoInput.files[0] || null,
    });

    fecharModalPublicacao();
  });
}