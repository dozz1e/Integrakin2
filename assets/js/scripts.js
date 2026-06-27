document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Fade In on Scroll - Intersection Observer
  (function initFadeIn() {
    const fadeElements = document.querySelectorAll(
      ".fade-in, .fade-in-left, .fade-in-right, .fade-in-scale, .reveal-text",
    );

    if (!fadeElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-50px",
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("reveal-text")) {
            entry.target.classList.add("active");
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach((el) => observer.observe(el));
  })();

  // 3. Global Data
  const products = [
    {
      name: "Wonder Precision",
      price: "$2.490.990",
      img: "assets/images/maquinas/1.webp",
      cat: "Musculación",
      featured: true,
    },
    {
      name: "LegoLaser Trio",
      price: "$8.990.000",
      img: "assets/images/maquinas/2.webp",
      cat: "Depilación",
      featured: true,
    },
    {
      name: "DermoPro Max",
      price: "$1.299.990",
      img: "assets/images/maquinas/3.webp",
      cat: "Facial",
      featured: true,
    },
    {
      name: "CryoSculpt Pro",
      price: "$5.490.000",
      img: "assets/images/maquinas/4.webp",
      cat: "Corporal",
      featured: true,
    },
    {
      name: "HIFU S-Line",
      price: "$4.150.000",
      img: "assets/images/maquinas/5.webp",
      cat: "Lifting",
      featured: true,
    },
    {
      name: "LipoPlus 360",
      price: "$3.890.000",
      img: "assets/images/maquinas/1.webp",
      cat: "Corporal",
      featured: true,
    },
    {
      name: "UltraSHR Laser",
      price: "$7.499.990",
      img: "assets/images/maquinas/2.webp",
      cat: "Depilación",
      featured: true,
    },
    {
      name: "HydroReveal",
      price: "$990.000",
      img: "assets/images/maquinas/3.webp",
      cat: "Facial",
      featured: true,
    },
  ];

  // 3. Render Helper
  function createProductCard(p, variant, index) {
    variant = variant || "slider";
    index = index || 0;
    var isFade = variant === "fadeslider";
    var wrapperClass = isFade
      ? "swiper-slide"
      : "w-full flex-none";
    
    var isDark = variant === 'dark' || variant === 'fadeslider'; // For now, featured products on index are always on dark background
    var textClass = isDark ? "text-white" : "text-obsidiana";
    var textMutedClass = isDark ? "text-white/40" : "text-obsidiana/40";
    var borderClass = isDark ? "border-white/10" : "border-obsidiana/10";
    var cardBg = isDark ? "bg-white/5 border-white/5" : "bg-white border-obsidiana/5";

    var card =
      '<div class="' + wrapperClass + '">';
    card +=
      '<div class="group bento-card p-5 h-full flex flex-col justify-between ' + cardBg + '">';
    card +=
      '<a href="producto.html?id=' + encodeURIComponent(p.name) + '" class="block aspect-square mb-5 relative overflow-hidden">';
    card +=
      '<img src="' +
      p.img +
      '" alt="' +
      p.name +
      '" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" loading="lazy">';
    card +=
      '<span class="absolute top-0 left-0 bg-primary/10 text-primary text-[8px] font-sync px-3 py-1 tracking-widest">' +
      p.cat +
      "</span>";
    card += '</a>';
    card += '<div>';
    card +=
      '<a href="producto.html?id=' + encodeURIComponent(p.name) + '" class="block hover:text-primary transition-colors">';
    card +=
      '<h3 class="font-sync text-base tracking-tighter mb-2 ' + textClass + ' leading-tight">' +
      p.name +
      "</h3>";
    card += '</a>';
    card +=
      '<p class="' + textMutedClass + ' font-sync text-[10px] mb-6 tracking-widest">' +
      p.price +
      "</p>";
    card +=
      '<div class="flex items-center justify-between">';
    card +=
      '<a href="producto.html?id=' + encodeURIComponent(p.name) + '" class="text-[8px] font-sync ' + textMutedClass + ' hover:text-primary transition-colors tracking-widest uppercase">Details</a>';
    card +=
      '<button class="w-10 h-10 border ' + borderClass + ' flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 group/btn">';
    card +=
      '<i data-lucide="plus" class="w-4 h-4 ' + textClass + ' group-hover/btn:text-white"></i></button></div></div></div></div>';
    return card;
  }

  // 4. Populate Grids
  function populateGrid(id, data, variant) {
    var el = document.getElementById(id);
    if (el) {
      var html = "";
      for (var i = 0; i < data.length; i++) {
        html += createProductCard(data[i], variant, i);
      }
      el.innerHTML = html;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  // Index Grids
  var featuredItems = products.filter(function (p) {
    return p.featured;
  });
  populateGrid(
    "featured-products-container",
    featuredItems.concat(featuredItems),
    "fadeslider",
  );

  // Initialize Swiper
  if (typeof Swiper !== 'undefined') {
    new Swiper('.featured-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
        1440: {
          slidesPerView: 4.5,
        }
      }
    });
  }

  populateGrid("offers-grid", products.slice(0, 4), "grid");
  populateGrid("shop-grid", products.concat(products), "grid");

  // 5. Category Marquee
  const catContainer = document.getElementById("categories-container");
  if (catContainer) {
    const cats = [
      { name: "CORPORALES", link: "tienda.html?cat=body-shape" },
      { name: "FACIALES", link: "tienda.html?cat=analizadores-de-piel" },
      { name: "REHABILITACIÓN", link: "tienda.html?cat=electroestimulador" },
      { name: "MOBILIARIO", link: "tienda.html?cat=mobiliario" },
      { name: "INSUMOS", link: "tienda.html?cat=insumos-y-repuestos" },
      { name: "OFERTAS", link: "tienda.html?cat=ofertas" },
      { name: "WONDER", link: "tienda.html?brand=wonder" },
      { name: "LEGOLÁSER", link: "tienda.html?brand=legolaser" },
    ];
    const html = cats
      .map(
        (c) =>
          `<div class="flex items-center gap-4"><span class="w-1 h-1 bg-primary rounded-full"></span><a href="${c.link}" class="hover:text-obsidiana transition-colors">${c.name}</a></div>`,
      )
      .join("");
    catContainer.innerHTML = html + html;
  }

  // 6. Header Logic
  const header = document.getElementById("main-header");
  const promoBar = document.getElementById("promo-bar");
  
  if (header) {
    const megaMenus = document.querySelectorAll(".mega-menu-dropdown");
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 20) {
          header.style.top = "0";
          header.classList.add("py-0");
          header.classList.remove("top-8");
          megaMenus.forEach(m => m.style.top = "5rem");
          if (promoBar) promoBar.classList.add("-translate-y-full");
        } else {
          header.style.top = "2rem"; // top-8
          header.classList.remove("py-0");
          header.classList.add("top-8");
          megaMenus.forEach(m => m.style.top = "7rem");
          if (promoBar) promoBar.classList.remove("-translate-y-full");
        }
      },
      { passive: true },
    );
  }

  // 8. Mobile Menu Logic
  const mobileTrigger = document.getElementById("mobile-menu-trigger");
  const mobileClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileTrigger && mobileMenu) {
    mobileTrigger.onclick = () => {
      mobileMenu.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    };
  }

  if (mobileClose && mobileMenu) {
    mobileClose.onclick = () => {
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "";
    };
  }

  // 9. Drag-to-scroll logic
  const sliders = document.querySelectorAll(".hide-scrollbar");
  sliders.forEach((slider) => {
    let isDown = false,
      startX,
      scrollLeft;
    slider.onmousedown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    slider.onmouseleave = () => {
      isDown = false;
    };
    slider.onmouseup = () => {
      isDown = false;
    };
    slider.onmousemove = (e) => {
      if (!isDown) return;
      const x = e.pageX - slider.offsetLeft;
      slider.scrollLeft = scrollLeft - (x - startX) * 2;
    };
  });

  // 10. Product Detail Page Logic
  const prodContainer = document.getElementById("product-container");
  if (prodContainer) {
    // Parse URL parameter to determine which product to show
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    let p = products[0]; // fallback
    if (productId) {
      const decodedId = decodeURIComponent(productId).toLowerCase().replace(/\s+/g, '');
      const foundProduct = products.find(prod => prod.name.toLowerCase().replace(/\s+/g, '') === decodedId);
      if (foundProduct) {
        p = foundProduct;
      }
    }

    // Update dynamic document title
    document.title = `${p.name} | Integrakin Medicina Estética`;

    // Update Breadcrumb
    const breadcrumb = document.getElementById("product-breadcrumb");
    if (breadcrumb) breadcrumb.innerText = p.name.toUpperCase();

    // Render Product HTML
    prodContainer.innerHTML = `
            <!-- Gallery -->
            <div class="space-y-6">
                <div class="aspect-[4/5] bg-white rounded-3xl border border-gray-100 overflow-hidden group relative">
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110">
                    <button class="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-xl">
                        <i data-lucide="maximize-2" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>

            <!-- Info -->
            <div class="flex flex-col">
                <div class="mb-10">
                    <span class="inline-block bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">${p.cat}</span>
                    <h1 class="font-sync text-4xl lg:text-5xl tracking-tighter text-secondary mb-4 uppercase leading-none">${p.name}</h1>
                    <div class="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <div class="flex text-yellow-400">
                            <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                            <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                            <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                            <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                            <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                        </div>
                        <span>12 Valoraciones</span>
                    </div>
                </div>

                <p class="text-4xl font-sync tracking-tighter text-primary mb-10">${p.price}</p>

                <div class="prose prose-sm text-gray-500 font-light leading-relaxed mb-12 max-w-md">
                    <p>Tecnología de vanguardia diseñada para resultados profesionales. Este equipo ofrece la máxima eficiencia en tratamientos de ${p.cat.toLowerCase()}, garantizando seguridad y confort para el paciente.</p>
                </div>

                <!-- Actions -->
                <div class="space-y-6">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex items-center bg-gray-50 rounded-2xl p-2 border border-gray-100">
                            <button class="w-12 h-12 flex items-center justify-center hover:text-primary transition-colors"><i data-lucide="minus" class="w-4 h-4"></i></button>
                            <input type="number" value="1" class="w-12 bg-transparent text-center font-bold text-secondary outline-none pointer-events-none">
                            <button class="w-12 h-12 flex items-center justify-center hover:text-primary transition-colors"><i data-lucide="plus" class="w-4 h-4"></i></button>
                        </div>
                        <button class="flex-1 bg-primary hover:bg-obsidiana text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                            <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                            Añadir al Carrito
                        </button>
                    </div>
                    <button class="w-full border-2 border-gray-100 hover:border-primary/30 hover:bg-primary/5 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                        <i data-lucide="heart" class="w-5 h-5"></i>
                        Lista de Deseo
                    </button>
                </div>
            </div>
        `;

    const tabs = document.getElementById("product-tabs");
    if (tabs) tabs.classList.remove("hidden");

    const woocommerceDesc = document.getElementById("woocommerce-description");
    if (woocommerceDesc) {
      woocommerceDesc.innerHTML = `<p>El equipo <strong>${p.name}</strong> representa la cima de la innovación en ${p.cat}. Con años de investigación clínica y desarrollo de ingeniería, este equipo ha sido optimizado para proporcionar:</p><ul><li>Resultados inmediatos y duraderos.</li><li>Interfaz intuitiva para el operador.</li><li>Mínimo mantenimiento requerido.</li><li>Diseño ergonómico premium.</li></ul>`;
    }

    // Related Products Grid (excluding currently viewed product)
    const related = products.filter(prod => prod.name !== p.name).slice(0, 4);
    populateGrid("related-products-grid", related, "grid");

    if (window.lucide) window.lucide.createIcons();
  }

  // 11. Cart Logic (Mobile vs Desktop)
  // Dynamic Injection of Cart Drawer on pages that don't have it
  if (!document.getElementById("cart-drawer")) {
    const drawerHtml = `
    <div id="cart-drawer" class="fixed inset-y-0 right-0 w-full sm:w-[450px] z-[120] translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] shadow-2xl flex flex-col glass-effect">
        <div class="p-12 h-full flex flex-col relative z-10">
            <div class="flex items-center justify-between mb-16">
                <h2 class="font-sync text-2xl tracking-tighter text-obsidiana uppercase">Tu <span class="text-primary italic">Pedido.</span></h2>
                <button id="cart-drawer-close" class="p-4 rounded-full bg-surface text-obsidiana">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            
            <div class="flex-1 overflow-y-auto pr-4 -mr-4 space-y-10 scrollbar-hide">
                <!-- Cart Item 1 -->
                <div class="flex gap-8 group">
                    <div class="w-24 h-24 bg-surface p-4 border border-obsidiana/5 shrink-0 overflow-hidden">
                        <img src="assets/images/maquinas/1.webp" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between mb-2">
                            <h3 class="text-[10px] font-sync text-obsidiana uppercase tracking-widest">Wonder Precision</h3>
                            <button class="text-obsidiana/20 hover:text-primary transition-colors"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                        </div>
                        <p class="text-[9px] font-sync text-obsidiana/70 uppercase mb-4 tracking-widest">Mobiliario</p>
                        <span class="text-sm font-sync tracking-tighter text-obsidiana">$2.490.990</span>
                    </div>
                </div>
                <!-- Cart Item 2 -->
                <div class="flex gap-8 group pt-10 border-t border-obsidiana/5">
                    <div class="w-24 h-24 bg-surface p-4 border border-obsidiana/5 shrink-0 overflow-hidden">
                        <img src="assets/images/maquinas/3.webp" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between mb-2">
                            <h3 class="text-[10px] font-sync text-obsidiana uppercase tracking-widest">DermoPro Max</h3>
                            <button class="text-obsidiana/20 hover:text-primary transition-colors"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                        </div>
                        <p class="text-[9px] font-sync text-obsidiana/70 uppercase mb-4 tracking-widest">Facial</p>
                        <span class="text-sm font-sync tracking-tighter text-obsidiana">$1.299.990</span>
                    </div>
                </div>
            </div>

            <div class="pt-12 border-t border-obsidiana/5 mt-10">
                <div class="flex justify-between mb-10 items-end">
                    <span class="text-[10px] font-sync text-obsidiana/70 uppercase tracking-widest">Total</span>
                    <span class="text-3xl font-sync tracking-tighter text-obsidiana">$3.790.980</span>
                </div>
                <a href="carrito.html" class="w-full bg-primary hover:bg-obsidiana text-white py-6 text-[10px] font-sync tracking-[0.3em] flex items-center justify-center gap-4 transition-all duration-500 uppercase shadow-lg shadow-primary/20">
                    Finalizar Compra
                </a>
            </div>
        </div>
    </div>
    `;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = drawerHtml.trim();
    document.body.appendChild(tempDiv.firstChild);
    if (window.lucide) window.lucide.createIcons();
  }

  if (!document.getElementById("cart-overlay")) {
    const overlayDiv = document.createElement("div");
    overlayDiv.id = "cart-overlay";
    overlayDiv.className = "fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] opacity-0 invisible transition-all duration-700";
    document.body.appendChild(overlayDiv);
  }

  const cartTrigger = document.getElementById("cart-trigger");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartClose = document.getElementById("cart-drawer-close");
  const cartOverlay = document.getElementById("cart-overlay");

  const mobileCartBtn = document.querySelector(
    "#mobile-menu button.bg-primary",
  );

  const openCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove("translate-x-full");
      cartOverlay.classList.remove("opacity-0", "invisible");
      document.body.style.overflow = "hidden";
    }
  };

  const closeCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add("translate-x-full");
      cartOverlay.classList.add("opacity-0", "invisible");
      document.body.style.overflow = "";
    }
  };

  if (cartTrigger) cartTrigger.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);
  if (mobileCartBtn) mobileCartBtn.addEventListener("click", openCart);
});

// Global Tab Switcher
window.switchTab = (tabName) => {
  // Hide all tab contents
  const contents = ["tab-description", "tab-reviews", "tab-specs"];
  contents.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  // Remove active styles from all buttons
  const btns = ["tab-btn-description", "tab-btn-reviews", "tab-btn-specs"];
  btns.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove("text-primary", "border-primary");
      el.classList.add("text-gray-400", "border-transparent");
    }
  });

  // Show selected and set active
  const selectedTab = document.getElementById(`tab-${tabName}`);
  if (selectedTab) selectedTab.classList.remove("hidden");

  const selectedBtn = document.getElementById(`tab-btn-${tabName}`);
  if (selectedBtn) {
    selectedBtn.classList.add("text-primary", "border-primary");
    selectedBtn.classList.remove("text-gray-400", "border-transparent");
  }
};

// Video Mute Toggle
function toggleMute(videoId) {
  const v = document.getElementById(videoId);
  if (!v) return;
  v.muted = !v.muted;
  const off =
    document.getElementById("mute-icon-off-hero") ||
    document.getElementById("mute-icon-off");
  const on =
    document.getElementById("mute-icon-on-hero") ||
    document.getElementById("mute-icon-on");
  if (off && on) {
    off.classList.toggle("hidden", !v.muted);
    on.classList.toggle("hidden", v.muted);
  }
}
