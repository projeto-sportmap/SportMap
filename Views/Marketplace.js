const btnMarketplace = document.getElementById("btn-marketplace");

/* =========================================
   BASE DE PRODUTOS
   (cada card chama abrirProdutoModal(ID) e
   este objeto é consultado pelo mesmo ID)
========================================= */
const produtos = {
    1: {
        nome: "Chuteira Nike Mercurial laranja",
        preco: "R$ 180",
        condicao: "Usado",
        imagem: "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?auto=format&fit=crop&w=900&q=75",
        local: "Moema · 1,2km de distância",
        descricao: "Chuteira Nike Mercurial usada poucas vezes, sola em ótimo estado, ideal para grama sintética.",
        vendedor: "Rafael Mendes",
        avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?auto=format&fit=crop&w=100&q=60",
        nota: "4.8"
    },
    2: {
        nome: "Bola de basquete Spalding oficial",
        preco: "R$ 129",
        condicao: "Novo",
        imagem: "https://images.unsplash.com/photo-1595795279832-13f0df36fbb9?auto=format&fit=crop&w=900&q=75",
        local: "Vila Mariana · 2,8km de distância",
        descricao: "Bola oficial Spalding, tamanho 7, ainda na embalagem, nunca usada em quadra.",
        vendedor: "Vinicius Rocha",
        avatar: "https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=100&q=60",
        nota: "5.0"
    },
    3: {
        nome: "Skate completo shape 8.0",
        preco: "R$ 320",
        condicao: "Usado",
        imagem: "https://images.unsplash.com/photo-1511190874914-2606678a0693?auto=format&fit=crop&w=900&q=75",
        local: "Pinheiros · 3,4km de distância",
        descricao: "Shape 8.0 com rolamentos ABEC-7, truck e rodas em bom estado. Pronto para andar.",
        vendedor: "Bianca Alves",
        avatar: "https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=100&q=60",
        nota: "4.6"
    },
    4: {
        nome: "Bola de vôlei de praia Mikasa",
        preco: "R$ 95",
        condicao: "Novo",
        imagem: "https://images.unsplash.com/photo-1565818819174-d76ccec8b2af?auto=format&fit=crop&w=900&q=75",
        local: "Ibirapuera · 1,0km de distância",
        descricao: "Bola Mikasa oficial de vôlei de praia, lacrada, comprada a mais e sem uso.",
        vendedor: "Camila Duarte",
        avatar: "https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=100&q=60",
        nota: "4.9"
    },
    5: {
        nome: "Tênis Nike para quadra nº 41",
        preco: "R$ 210",
        condicao: "Usado",
        imagem: "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?auto=format&fit=crop&w=900&q=75",
        local: "Itaim Bibi · 4,1km de distância",
        descricao: "Tênis Nike próprio para quadra, número 41, usado em cerca de 10 jogos, sola sem desgaste.",
        vendedor: "Thiago Lima",
        avatar: "https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=100&q=60",
        nota: "4.7"
    },
    6: {
        nome: "Cesta de basquete portátil ajustável",
        preco: "R$ 450",
        condicao: "Usado",
        imagem: "https://images.unsplash.com/photo-1653965189275-8cb10d9f0a81?auto=format&fit=crop&w=900&q=75",
        local: "Morumbi · 5,6km de distância",
        descricao: "Cesta portátil com altura ajustável, base para encher com água ou areia, tabela em ótimo estado.",
        vendedor: "Rafael Mendes",
        avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?auto=format&fit=crop&w=100&q=60",
        nota: "4.8"
    }
};

let proximoProdutoId = 7;


/* =========================================
   MODAL: VER PRODUTO (pelo mesmo ID do card clicado)
========================================= */
function abrirProdutoModal(id) {
    const p = produtos[id];
    if (!p) return;

    document.getElementById("pm-id-label").textContent = "ID do produto: #" + id;
    document.getElementById("pm-nome").textContent = p.nome;
    document.getElementById("pm-preco").textContent = p.preco;
    document.getElementById("pm-descricao").textContent = p.descricao;
    document.getElementById("pm-local").textContent = p.local;
    document.getElementById("pm-vendedor").textContent = p.vendedor;
    document.getElementById("pm-nota").textContent = p.nota;

    const img = document.getElementById("pm-img");
    img.src = p.imagem;
    img.alt = p.nome;

    document.getElementById("pm-avatar").src = p.avatar;

    const badge = document.getElementById("pm-badge");
    badge.textContent = p.condicao;
    badge.classList.toggle("novo", p.condicao === "Novo");

    document.getElementById("produto-modal-overlay").classList.add("ativo");
}

function fecharProdutoModal() {
    document.getElementById("produto-modal-overlay").classList.remove("ativo");
}


/* =========================================
   MODAL: ANUNCIAR ITEM
========================================= */
function abrirAnuncioModal() {
    document.getElementById("anuncio-modal-overlay").classList.add("ativo");
}

function fecharAnuncioModal() {
    document.getElementById("anuncio-modal-overlay").classList.remove("ativo");
}

/* =========================================
   PUBLICAR ANÚNCIO
   Pega os dados do formulário, cria um novo
   produto (com um novo ID), adiciona no objeto
   "produtos" e insere o card no topo do grid.
========================================= */
function publicarAnuncio(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("anuncio-nome");
    const categoriaInput = document.getElementById("anuncio-categoria");
    const precoInput = document.getElementById("anuncio-preco");
    const condicaoInput = document.querySelector('input[name="anuncio-condicao"]:checked');
    const localInput = document.getElementById("anuncio-local");
    const descricaoInput = document.getElementById("anuncio-descricao");

    const nome = nomeInput.value.trim();
    const precoValor = precoInput.value.trim();

    if (!nome || !precoValor) {
        if (!nome) nomeInput.focus();
        else precoInput.focus();
        return;
    }

    const novoId = proximoProdutoId++;

    const imagensPorCategoria = {
        "Futebol": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?auto=format&fit=crop&w=900&q=75",
        "Basquete": "https://images.unsplash.com/photo-1595795279832-13f0df36fbb9?auto=format&fit=crop&w=900&q=75",
        "Skate": "https://images.unsplash.com/photo-1511190874914-2606678a0693?auto=format&fit=crop&w=900&q=75",
        "Vôlei": "https://images.unsplash.com/photo-1565818819174-d76ccec8b2af?auto=format&fit=crop&w=900&q=75",
        "Tênis": "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?auto=format&fit=crop&w=900&q=75",
        "Roupas": "https://images.unsplash.com/photo-1653965189275-8cb10d9f0a81?auto=format&fit=crop&w=900&q=75"
    };

    const categoria = categoriaInput.value;
    const imagem = imagensPorCategoria[categoria] || imagensPorCategoria["Futebol"];

    produtos[novoId] = {
        nome: nome,
        preco: "R$ " + precoValor,
        condicao: condicaoInput ? condicaoInput.value : "Usado",
        imagem: imagem,
        local: (localInput.value.trim() || "São Paulo, SP") + " · 0km de distância",
        descricao: descricaoInput.value.trim() || "Sem descrição adicionada.",
        vendedor: "Você",
        avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?auto=format&fit=crop&w=100&q=60",
        nota: "—"
    };

    const p = produtos[novoId];
    const grid = document.getElementById("produtos-grid");

    const novaCol = document.createElement("div");
    novaCol.className = "col";
    novaCol.innerHTML = `
        <div class="product-card" data-id="${novoId}" onclick="abrirProdutoModal(${novoId})">
            <div class="product-img-wrap">
                <img loading="lazy" src="${p.imagem}" alt="${p.nome}">
                <span class="badge-condition ${p.condicao === 'Novo' ? 'novo' : ''}">${p.condicao}</span>
                <button type="button" class="fav-btn" aria-label="Favoritar" onclick="event.stopPropagation()">
                    <i class="bi bi-heart"></i>
                </button>
            </div>
            <div class="p-3">
                <div class="product-title">${p.nome}</div>
                <div class="product-price">${p.preco}</div>
                <div class="product-meta mt-1"><i class="bi bi-geo-alt"></i> ${p.local}</div>
                <div class="seller-row d-flex align-items-center gap-2">
                    <img class="seller-avatar" loading="lazy" src="${p.avatar}" alt="vendedor">
                    <span class="product-meta">${p.vendedor}</span>
                    <span class="stars ms-auto"><i class="bi bi-star-fill"></i> ${p.nota}</span>
                </div>
            </div>
        </div>
    `;

    grid.insertBefore(novaCol, grid.firstChild);

    event.target.reset();
    fecharAnuncioModal();
}


btnMarketplace.addEventListener("click", function () {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <section class="app-section" id="section-products">

            <!-- ===== Topbar ===== -->

            <nav class="topbar d-flex align-items-center gap-3">

                <div class="logo-mark d-none d-sm-block">
                    <span class="sport">Sport</span>
                    <span class="map">Map</span>
                </div>

                <div class="flex-grow-1 mx-2" style="max-width:520px;">

                    <div class="input-group">

                        <span class="input-group-text search-input border-end-0">
                            <i class="bi bi-search"></i>
                        </span>

                        <input
                            type="text"
                            class="form-control search-input border-start-0"
                            placeholder="Buscar chuteiras, skates, bolas..."
                            aria-label="Buscar no marketplace"
                        >

                    </div>

                </div>

                <div class="ms-auto d-flex align-items-center gap-2">

                    <button
                        type="button"
                        class="btn btn-orange d-none d-md-inline-flex align-items-center gap-2"
                        onclick="abrirAnuncioModal()"
                    >
                        <i class="bi bi-plus-lg"></i>
                        Anunciar item
                    </button>

                    <button
                        type="button"
                        class="icon-btn"
                        aria-label="Favoritos"
                    >
                        <i class="bi bi-heart"></i>
                    </button>

                    <button
                        type="button"
                        class="icon-btn"
                        aria-label="Mensagens"
                    >
                        <i class="bi bi-chat-dots"></i>
                        <span class="icon-dot">3</span>
                    </button>

                    <img
                        class="avatar-sm"
                        loading="lazy"
                        src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?auto=format&fit=crop&w=100&q=60"
                        alt="perfil"
                    >

                </div>

            </nav>


            <div class="container-fluid px-3 px-lg-4 py-4">

                <!-- Cabeçalho -->

                <div class="d-flex flex-wrap align-items-end justify-content-between mb-3 gap-2">

                    <div>

                        <div class="section-title">
                            Marketplace
                        </div>

                        <div class="results-count">
                            890 anúncios perto de você
                        </div>

                    </div>

                    <button
                        type="button"
                        class="btn btn-orange d-inline-flex d-md-none align-items-center gap-2"
                        onclick="abrirAnuncioModal()"
                    >
                        <i class="bi bi-plus-lg"></i>
                        Anunciar
                    </button>

                </div>


                <!-- Categorias -->

                <div
                    class="d-flex gap-2 overflow-auto pb-3 mb-3"
                    style="scrollbar-width:none;"
                >

                    <a href="#" class="cat-pill active">
                        Todos
                    </a>

                    <a href="#" class="cat-pill">
                        <i class="bi bi-dribbble"></i>
                        Futebol
                    </a>

                    <a href="#" class="cat-pill">
                        Basquete
                    </a>

                    <a href="#" class="cat-pill">
                        Skate
                    </a>

                    <a href="#" class="cat-pill">
                        Vôlei
                    </a>

                    <a href="#" class="cat-pill">
                        Tênis
                    </a>

                    <a href="#" class="cat-pill">
                        Roupas
                    </a>

                </div>


                <div class="row g-4">


                    <!-- =========================
                         FILTROS
                    ========================== -->

                    <div class="col-lg-3 filters-col">

                        <div class="filters-card mb-3">

                            <h6>Categoria</h6>

                            <div class="form-check mb-2">

                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="fFutebol"
                                    checked
                                >

                                <label
                                    class="form-check-label"
                                    for="fFutebol"
                                >
                                    Futebol
                                </label>

                            </div>


                            <div class="form-check mb-2">

                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="fBasquete"
                                >

                                <label
                                    class="form-check-label"
                                    for="fBasquete"
                                >
                                    Basquete
                                </label>

                            </div>


                            <div class="form-check mb-2">

                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="fSkate"
                                >

                                <label
                                    class="form-check-label"
                                    for="fSkate"
                                >
                                    Skate
                                </label>

                            </div>


                            <div class="form-check mb-2">

                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="fVolei"
                                >

                                <label
                                    class="form-check-label"
                                    for="fVolei"
                                >
                                    Vôlei
                                </label>

                            </div>


                            <div class="form-check">

                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="fTenis"
                                >

                                <label
                                    class="form-check-label"
                                    for="fTenis"
                                >
                                    Tênis
                                </label>

                            </div>

                        </div>


                        <!-- PREÇO -->

                        <div class="filters-card mb-3">

                            <h6>Faixa de preço</h6>

                            <input
                                type="range"
                                class="form-range"
                                min="0"
                                max="1000"
                                value="350"
                                aria-label="Faixa de preço"
                            >

                            <div class="d-flex justify-content-between product-meta">

                                <span>
                                    R$ 0
                                </span>

                                <span>
                                    R$ 1.000+
                                </span>

                            </div>

                        </div>


                        <!-- CONDIÇÃO -->

                        <div class="filters-card mb-3">

                            <h6>Condição</h6>

                            <div class="form-check mb-2">

                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="cond"
                                    id="cTodos"
                                    checked
                                >

                                <label
                                    class="form-check-label"
                                    for="cTodos"
                                >
                                    Todos
                                </label>

                            </div>


                            <div class="form-check mb-2">

                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="cond"
                                    id="cNovo"
                                >

                                <label
                                    class="form-check-label"
                                    for="cNovo"
                                >
                                    Novo
                                </label>

                            </div>


                            <div class="form-check">

                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="cond"
                                    id="cUsado"
                                >

                                <label
                                    class="form-check-label"
                                    for="cUsado"
                                >
                                    Usado
                                </label>

                            </div>

                        </div>


                        <!-- LOCALIZAÇÃO -->

                        <div class="filters-card">

                            <h6>Localização</h6>

                            <div class="input-group">

                                <span
                                    class="input-group-text search-input border-end-0"
                                >
                                    <i class="bi bi-geo-alt"></i>
                                </span>

                                <input
                                    type="text"
                                    class="form-control search-input border-start-0"
                                    value="São Paulo, SP"
                                    aria-label="Localização"
                                >

                            </div>

                            <div class="product-meta mt-2">
                                Raio de até 10km
                            </div>

                        </div>

                    </div>


                    <!-- =========================
                         PRODUTOS
                    ========================== -->

                    <div class="col-lg-9">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3" id="produtos-grid">


                            <!-- PRODUTO 1 -->

                            <div class="col">

                                <div class="product-card" data-id="1" onclick="abrirProdutoModal(1)">

                                    <div class="product-img-wrap">

                                        <img
                                            loading="lazy"
                                            src="https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?auto=format&fit=crop&w=500&q=70"
                                            alt="Chuteira Nike"
                                        >

                                        <span class="badge-condition">
                                            Usado
                                        </span>

                                        <button
                                            type="button"
                                            class="fav-btn"
                                            aria-label="Favoritar"
                                            onclick="event.stopPropagation()"
                                        >
                                            <i class="bi bi-heart"></i>
                                        </button>

                                    </div>


                                    <div class="p-3">

                                        <div class="product-title">
                                            Chuteira Nike Mercurial laranja
                                        </div>

                                        <div class="product-price">
                                            R$ 180
                                        </div>

                                        <div class="product-meta mt-1">
                                            <i class="bi bi-geo-alt"></i>
                                            Moema · 1,2km
                                        </div>

                                        <div class="seller-row d-flex align-items-center gap-2">

                                            <img
                                                class="seller-avatar"
                                                loading="lazy"
                                                src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?auto=format&fit=crop&w=60&q=60"
                                                alt="vendedor"
                                            >

                                            <span class="product-meta">
                                                Rafael Mendes
                                            </span>

                                            <span class="stars ms-auto">
                                                <i class="bi bi-star-fill"></i>
                                                4.8
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <!-- PRODUTO 2 -->

                            <div class="col">

                                <div class="product-card" data-id="2" onclick="abrirProdutoModal(2)">

                                    <div class="product-img-wrap">

                                        <img
                                            loading="lazy"
                                            src="https://images.unsplash.com/photo-1595795279832-13f0df36fbb9?auto=format&fit=crop&w=500&q=70"
                                            alt="Bola de basquete"
                                        >

                                        <span class="badge-condition novo">
                                            Novo
                                        </span>

                                        <button
                                            type="button"
                                            class="fav-btn"
                                            aria-label="Favoritar"
                                            onclick="event.stopPropagation()"
                                        >
                                            <i class="bi bi-heart"></i>
                                        </button>

                                    </div>


                                    <div class="p-3">

                                        <div class="product-title">
                                            Bola de basquete Spalding oficial
                                        </div>

                                        <div class="product-price">
                                            R$ 129
                                        </div>

                                        <div class="product-meta mt-1">
                                            <i class="bi bi-geo-alt"></i>
                                            Vila Mariana · 2,8km
                                        </div>

                                        <div class="seller-row d-flex align-items-center gap-2">

                                            <img
                                                class="seller-avatar"
                                                loading="lazy"
                                                src="https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=60&q=60"
                                                alt="vendedor"
                                            >

                                            <span class="product-meta">
                                                Vinicius Rocha
                                            </span>

                                            <span class="stars ms-auto">
                                                <i class="bi bi-star-fill"></i>
                                                5.0
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <!-- PRODUTO 3 -->

                            <div class="col">

                                <div class="product-card" data-id="3" onclick="abrirProdutoModal(3)">

                                    <div class="product-img-wrap">

                                        <img
                                            loading="lazy"
                                            src="https://images.unsplash.com/photo-1511190874914-2606678a0693?auto=format&fit=crop&w=500&q=70"
                                            alt="Skate completo"
                                        >

                                        <span class="badge-condition">
                                            Usado
                                        </span>

                                        <button
                                            type="button"
                                            class="fav-btn"
                                            aria-label="Favoritar"
                                            onclick="event.stopPropagation()"
                                        >
                                            <i class="bi bi-heart-fill"
                                                style="color:var(--sm-orange)">
                                            </i>
                                        </button>

                                    </div>


                                    <div class="p-3">

                                        <div class="product-title">
                                            Skate completo shape 8.0
                                        </div>

                                        <div class="product-price">
                                            R$ 320
                                        </div>

                                        <div class="product-meta mt-1">
                                            <i class="bi bi-geo-alt"></i>
                                            Pinheiros · 3,4km
                                        </div>

                                        <div class="seller-row d-flex align-items-center gap-2">

                                            <img
                                                class="seller-avatar"
                                                loading="lazy"
                                                src="https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=60&q=60"
                                                alt="vendedor"
                                            >

                                            <span class="product-meta">
                                                Bianca Alves
                                            </span>

                                            <span class="stars ms-auto">
                                                <i class="bi bi-star-fill"></i>
                                                4.6
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <!-- PRODUTO 4 -->

                            <div class="col">

                                <div class="product-card" data-id="4" onclick="abrirProdutoModal(4)">

                                    <div class="product-img-wrap">

                                        <img
                                            loading="lazy"
                                            src="https://images.unsplash.com/photo-1565818819174-d76ccec8b2af?auto=format&fit=crop&w=500&q=70"
                                            alt="Bola de vôlei"
                                        >

                                        <span class="badge-condition novo">
                                            Novo
                                        </span>

                                        <button
                                            type="button"
                                            class="fav-btn"
                                            aria-label="Favoritar"
                                            onclick="event.stopPropagation()"
                                        >
                                            <i class="bi bi-heart"></i>
                                        </button>

                                    </div>


                                    <div class="p-3">

                                        <div class="product-title">
                                            Bola de vôlei de praia Mikasa
                                        </div>

                                        <div class="product-price">
                                            R$ 95
                                        </div>

                                        <div class="product-meta mt-1">
                                            <i class="bi bi-geo-alt"></i>
                                            Ibirapuera · 1,0km
                                        </div>

                                        <div class="seller-row d-flex align-items-center gap-2">

                                            <img
                                                class="seller-avatar"
                                                loading="lazy"
                                                src="https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=60&q=60"
                                                alt="vendedor"
                                            >

                                            <span class="product-meta">
                                                Camila Duarte
                                            </span>

                                            <span class="stars ms-auto">
                                                <i class="bi bi-star-fill"></i>
                                                4.9
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <!-- PRODUTO 5 -->

                            <div class="col">

                                <div class="product-card" data-id="5" onclick="abrirProdutoModal(5)">

                                    <div class="product-img-wrap">

                                        <img
                                            loading="lazy"
                                            src="https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?auto=format&fit=crop&w=500&q=70"
                                            alt="Tênis para quadra"
                                        >

                                        <span class="badge-condition">
                                            Usado
                                        </span>

                                        <button
                                            type="button"
                                            class="fav-btn"
                                            aria-label="Favoritar"
                                            onclick="event.stopPropagation()"
                                        >
                                            <i class="bi bi-heart"></i>
                                        </button>

                                    </div>


                                    <div class="p-3">

                                        <div class="product-title">
                                            Tênis Nike para quadra nº 41
                                        </div>

                                        <div class="product-price">
                                            R$ 210
                                        </div>

                                        <div class="product-meta mt-1">
                                            <i class="bi bi-geo-alt"></i>
                                            Itaim Bibi · 4,1km
                                        </div>

                                        <div class="seller-row d-flex align-items-center gap-2">

                                            <img
                                                class="seller-avatar"
                                                loading="lazy"
                                                src="https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?auto=format&fit=crop&w=60&q=60"
                                                alt="vendedor"
                                            >

                                            <span class="product-meta">
                                                Thiago Lima
                                            </span>

                                            <span class="stars ms-auto">
                                                <i class="bi bi-star-fill"></i>
                                                4.7
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <!-- PRODUTO 6 -->

                            <div class="col">

                                <div class="product-card" data-id="6" onclick="abrirProdutoModal(6)">

                                    <div class="product-img-wrap">

                                        <img
                                            loading="lazy"
                                            src="https://images.unsplash.com/photo-1653965189275-8cb10d9f0a81?auto=format&fit=crop&w=500&q=70"
                                            alt="Cesta de basquete portátil"
                                        >

                                        <span class="badge-condition">
                                            Usado
                                        </span>

                                        <button
                                            type="button"
                                            class="fav-btn"
                                            aria-label="Favoritar"
                                            onclick="event.stopPropagation()"
                                        >
                                            <i class="bi bi-heart"></i>
                                        </button>

                                    </div>


                                    <div class="p-3">

                                        <div class="product-title">
                                            Cesta de basquete portátil ajustável
                                        </div>

                                        <div class="product-price">
                                            R$ 450
                                        </div>

                                        <div class="product-meta mt-1">
                                            <i class="bi bi-geo-alt"></i>
                                            Morumbi · 5,6km
                                        </div>

                                        <div class="seller-row d-flex align-items-center gap-2">

                                            <img
                                                class="seller-avatar"
                                                loading="lazy"
                                                src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?auto=format&fit=crop&w=60&q=60"
                                                alt="vendedor"
                                            >

                                            <span class="product-meta">
                                                Rafael Mendes
                                            </span>

                                            <span class="stars ms-auto">
                                                <i class="bi bi-star-fill"></i>
                                                4.8
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <!-- CARREGAR MAIS -->

                        <div class="text-center mt-4">

                            <button
                                type="button"
                                class="btn btn-social px-4"
                                style="
                                    background:var(--sm-panel-2);
                                    border:1px solid var(--sm-border);
                                    color:var(--sm-text);
                                    border-radius:10px;
                                    padding:.6rem 1.2rem;
                                "
                            >
                                Carregar mais anúncios
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <!-- ===== Modal: Ver produto (aberto via JS, pelo mesmo ID) ===== -->

            <div class="produto-modal-overlay" id="produto-modal-overlay">

                <div class="produto-modal-backdrop" onclick="fecharProdutoModal()"></div>

                <div class="produto-modal-box">

                    <button type="button" class="produto-modal-close" onclick="fecharProdutoModal()" aria-label="Fechar">&times;</button>

                    <div class="row g-4">

                        <div class="col-md-6">
                            <div class="product-img-wrap" style="height:280px;border-radius:14px;">
                                <img id="pm-img" src="" alt="">
                                <span id="pm-badge" class="badge-condition">Usado</span>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex flex-column">
                            <span class="product-meta mb-1" id="pm-id-label">ID do produto: #1</span>
                            <h4 class="fw-bold mb-1" id="pm-nome">Nome do produto</h4>
                            <div class="product-price fs-3 mb-2" id="pm-preco">R$ 0</div>
                            <p class="product-meta mb-2" id="pm-descricao">Descrição do produto.</p>
                            <div class="product-meta mb-3">
                                <i class="bi bi-geo-alt"></i>
                                <span id="pm-local"></span>
                            </div>

                            <div class="seller-row d-flex align-items-center gap-2">
                                <img class="seller-avatar" id="pm-avatar" src="" alt="vendedor" style="width:36px;height:36px;">
                                <div>
                                    <div class="fw-semibold" id="pm-vendedor" style="font-size:.9rem;"></div>
                                    <div class="stars"><i class="bi bi-star-fill"></i> <span id="pm-nota"></span></div>
                                </div>
                                <button class="btn btn-orange ms-auto">
                                    <i class="bi bi-chat-dots"></i>
                                    Conversar
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <!-- ===== Modal: Anunciar item (aberto/fechado via JS) ===== -->

            <div class="anuncio-modal-overlay" id="anuncio-modal-overlay">

                <div class="anuncio-modal-backdrop" onclick="fecharAnuncioModal()"></div>

                <div class="anuncio-modal-box">

                    <div class="anuncio-modal-header">
                        <h5>Anunciar item</h5>
                        <button type="button" class="anuncio-modal-close" onclick="fecharAnuncioModal()" aria-label="Fechar">&times;</button>
                    </div>

                    <form onsubmit="publicarAnuncio(event)">

                        <div class="mb-3">
                            <label class="form-label-custom">Foto do item</label>
                            <label class="upload-box">
                                <i class="bi bi-camera"></i>
                                <span>Clique para adicionar uma foto</span>
                                <input type="file" accept="image/*" hidden>
                            </label>
                        </div>

                        <div class="mb-3">
                            <label class="form-label-custom">Título do anúncio</label>
                            <input type="text" id="anuncio-nome" class="form-control search-input" placeholder="Ex: Chuteira Nike Mercurial">
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-sm-6">
                                <label class="form-label-custom">Categoria</label>
                                <select id="anuncio-categoria" class="form-select search-input">
                                    <option>Futebol</option>
                                    <option>Basquete</option>
                                    <option>Skate</option>
                                    <option>Vôlei</option>
                                    <option>Tênis</option>
                                    <option>Roupas</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label-custom">Preço</label>
                                <div class="input-group">
                                    <span class="input-group-text search-input border-end-0">R$</span>
                                    <input type="number" id="anuncio-preco" class="form-control search-input border-start-0" placeholder="0,00">
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label-custom d-block">Condição</label>
                            <div class="d-flex gap-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="anuncio-condicao" id="condNovo" value="Novo" checked>
                                    <label class="form-check-label" for="condNovo">Novo</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="anuncio-condicao" id="condUsado" value="Usado">
                                    <label class="form-check-label" for="condUsado">Usado</label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label-custom">Localização</label>
                            <div class="input-group">
                                <span class="input-group-text search-input border-end-0"><i class="bi bi-geo-alt"></i></span>
                                <input type="text" id="anuncio-local" class="form-control search-input border-start-0" placeholder="Bairro, cidade">
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label-custom">Descrição</label>
                            <textarea id="anuncio-descricao" class="form-control search-input" rows="3" placeholder="Conte o estado do item, tempo de uso, etc."></textarea>
                        </div>

                        <div class="anuncio-actions">
                            <button type="button" class="btn-cancel" onclick="fecharAnuncioModal()">Cancelar</button>
                            <button type="submit" class="btn btn-orange">Publicar anúncio</button>
                        </div>

                    </form>
                </div>
            </div>

        </section>

    `;

});