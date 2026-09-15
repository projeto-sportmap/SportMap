/* =================================================
   SPORTMAP - SCRIPT PRINCIPAL
   Ativa: busca, filtros, curtidas, compartilhar,
   modal de nova publicação e toast.
   ================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ===================== ELEMENTOS ===================== */

  const searchForm   = document.getElementById('feed-search-form');
  const searchInput  = document.getElementById('feed-search');
  const searchResult = document.getElementById('feed-search-result');

  const postsWrap = document.getElementById('feed-posts');
  const emptyBox  = document.getElementById('feed-empty');

  const filters = document.querySelectorAll('.feed-filter');

  const modal       = document.getElementById('post-modal');
  const openButtons = [
    document.getElementById('create-post-button'),
    document.getElementById('hero-create-post')
  ];
  const closeButton  = document.getElementById('close-post-modal');
  const cancelButton = document.getElementById('cancel-post');
  const createForm   = document.getElementById('create-post-form');
  const postText     = document.getElementById('new-post-text');
  const postSport    = document.getElementById('new-post-sport');

  const toast = document.getElementById('feed-toast');

  let sportFilter = 'todos';
  let searchTerm  = '';


  /* ===================== UTILIDADES ===================== */

  // Remove acentos e deixa minúsculo, para a busca funcionar
  // com "volei", "Vôlei", "TENIS" etc.
  function normalize(text) {
    return (text || '')
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;

    const span = toast.querySelector('span');
    if (span) span.textContent = message;

    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2600);
  }


  /* ===================== BUSCA E FILTROS ===================== */

  function applyFilters() {

    const posts = postsWrap ? postsWrap.querySelectorAll('.post-card') : [];
    const term  = normalize(searchTerm);
    let visible = 0;

    posts.forEach(function (post) {

      const sport = post.dataset.sport || '';
      const text  = normalize(post.dataset.search || post.textContent);

      const matchSport = sportFilter === 'todos' || sport === sportFilter;
      const matchTerm  = term === '' || text.includes(term);

      const show = matchSport && matchTerm;

      post.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    // Mensagem de vazio
    if (emptyBox) {
      emptyBox.style.display = visible === 0 ? '' : 'none';
    }

    // Resumo do resultado
    if (searchResult) {
      if (term === '' && sportFilter === 'todos') {
        searchResult.textContent = '';
        searchResult.style.display = 'none';
      } else {
        const plural = visible === 1 ? 'publicação' : 'publicações';
        searchResult.textContent = visible + ' ' + plural + ' ' +
          (visible === 1 ? 'encontrada' : 'encontradas') + '.';
        searchResult.style.display = '';
      }
    }
  }

  // Estado inicial: esconde o vazio e o resumo
  if (emptyBox) emptyBox.style.display = 'none';
  if (searchResult) searchResult.style.display = 'none';

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchTerm = searchInput.value;
      applyFilters();
    });
  }

  // Evita que o Enter recarregue a página e perca a navegação
  if (searchForm) {
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      applyFilters();
    });
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () {

      filters.forEach(function (other) {
        other.classList.remove('active');
      });

      button.classList.add('active');
      sportFilter = button.dataset.filter || 'todos';

      applyFilters();
    });
  });


  /* ===================== CURTIDAS ===================== */

  function bindLike(button) {

    button.addEventListener('click', function () {

      const icon    = button.querySelector('i');
      const counter = button.querySelector('.like-count');

      let likes = parseInt(button.dataset.likes || '0', 10);
      const liked = button.classList.toggle('liked');

      likes = liked ? likes + 1 : likes - 1;
      if (likes < 0) likes = 0;

      button.dataset.likes = likes;
      if (counter) counter.textContent = likes;

      if (icon) {
        icon.classList.toggle('bi-heart-fill', liked);
        icon.classList.toggle('bi-heart', !liked);
      }
    });
  }

  document.querySelectorAll('.like-button').forEach(bindLike);


  /* ===================== COMPARTILHAR ===================== */

  function bindShare(button) {
    button.addEventListener('click', function () {
      showToast('Link da publicação copiado.');
    });
  }

  document.querySelectorAll('.share-button').forEach(bindShare);


  /* ===================== SEGUIR ===================== */

  function bindFollow(button) {
    button.addEventListener('click', function () {

      const following = button.classList.toggle('following');
      button.textContent = following ? 'Seguindo' : 'Seguir';

      showToast(following ? 'Agora você segue esse perfil.' : 'Você deixou de seguir.');
    });
  }

  document.querySelectorAll('.post-follow').forEach(bindFollow);


  /* ===================== MODAL ===================== */

  function openModal() {
    if (!modal) return;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    if (postText) postText.focus();
  }

  function closeModal() {
    if (!modal) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  openButtons.forEach(function (button) {
    if (button) button.addEventListener('click', openModal);
  });

  if (closeButton)  closeButton.addEventListener('click', closeModal);
  if (cancelButton) cancelButton.addEventListener('click', closeModal);

  // Fecha ao clicar fora do conteúdo
  if (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });
  }

  // Fecha com Esc
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeModal();
  });


  /* ===================== CRIAR PUBLICAÇÃO ===================== */

  // Iniciais do nome, para o avatar
  function initials(name) {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(function (part) { return part[0].toUpperCase(); })
      .join('');
  }

  function buildPost(text, sport) {

    const author = 'João Vitor Pereira';
    const handle = '@joaovitor';

    const article = document.createElement('article');
    article.className = 'post-card';
    article.dataset.sport  = sport;
    article.dataset.search = author + ' ' + handle + ' ' + sport + ' ' + text;

    article.innerHTML = `
      <div class="post-head">
        <div class="avatar">${initials(author)}</div>
        <div class="post-user">
          <div class="name">
            ${author}
            <span class="sport-tag">${sport}</span>
          </div>
          <div class="meta">${handle} · agora</div>
        </div>
      </div>

      <div class="post-caption"></div>

      <div class="post-photo">
        <i class="bi bi-image"></i>
        <span>espaço para foto</span>
      </div>

      <div class="post-actions">
        <button type="button" class="action-btn like-button" data-likes="0">
          <i class="bi bi-heart"></i>
          <span class="like-count">0</span>
        </button>
        <button type="button" class="action-btn">
          <i class="bi bi-chat"></i>
          0
        </button>
        <button type="button" class="action-btn share-button">
          <i class="bi bi-share"></i>
          Compartilhar
        </button>
      </div>

      <div class="post-likes">Seja o primeiro a curtir</div>
    `;

    // textContent evita injeção de HTML pelo texto digitado
    article.querySelector('.post-caption').textContent = text;

    bindLike(article.querySelector('.like-button'));
    bindShare(article.querySelector('.share-button'));

    return article;
  }

  if (createForm) {
    createForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const text  = postText ? postText.value.trim() : '';
      const sport = postSport ? postSport.value : 'Futebol';

      if (text === '') {
        if (postText) postText.focus();
        return;
      }

      const post = buildPost(text, sport);

      if (postsWrap) {
        postsWrap.prepend(post);
      }

      createForm.reset();
      closeModal();
      applyFilters();
      showToast('Publicação criada.');
    });
  }


  /* ===================== MAPA: FILTROS ===================== */

  const mapFilters = document.querySelectorAll('.sport-filter');

  mapFilters.forEach(function (button) {
    button.addEventListener('click', function () {

      mapFilters.forEach(function (other) {
        other.classList.remove('active');
      });

      button.classList.add('active');
    });
  });


  /* ===================== MARKETPLACE: FAVORITOS ===================== */

  document.querySelectorAll('.fav-btn').forEach(function (button) {
    button.addEventListener('click', function () {

      const icon = button.querySelector('i');
      if (!icon) return;

      const active = icon.classList.toggle('bi-heart-fill');
      icon.classList.toggle('bi-heart', !active);
      icon.style.color = active ? 'var(--sm-orange)' : '';
    });
  });

});