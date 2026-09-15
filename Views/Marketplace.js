
const btnMarketplace = document.getElementById("btn-marketplace");

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

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3">


                            <!-- PRODUTO 1 -->

                            <div class="col">

                                <div class="product-card">

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

                                <div class="product-card">

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

                                <div class="product-card">

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

                                <div class="product-card">

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

                                <div class="product-card">

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

                                <div class="product-card">

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

        </section>

    `;

});
