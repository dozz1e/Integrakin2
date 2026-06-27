// INTEGRAKIN SLIDER - Using Swiper.js
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var products = [
            { name: "Wonder Precision", price: "$2.490.990", img: "assets/images/maquinas/1.webp", cat: "Musculación", featured: true },
            { name: "LegoLaser Trio", price: "$8.990.000", img: "assets/images/maquinas/2.webp", cat: "Depilación", featured: true },
            { name: "DermoPro Max", price: "$1.299.990", img: "assets/images/maquinas/3.webp", cat: "Facial", featured: true },
            { name: "CryoSculpt Pro", price: "$5.490.000", img: "assets/images/maquinas/4.webp", cat: "Corporal", featured: true },
            { name: "HIFU S-Line", price: "$4.150.000", img: "assets/images/maquinas/5.webp", cat: "Lifting", featured: true },
            { name: "LipoPlus 360", price: "$3.890.000", img: "assets/images/maquinas/1.webp", cat: "Corporal", featured: true },
            { name: "UltraSHR Laser", price: "$7.499.990", img: "assets/images/maquinas/2.webp", cat: "Depilación", featured: true },
            { name: "HydroReveal", price: "$990.000", img: "assets/images/maquinas/3.webp", cat: "Facial", featured: true }
        ];
        
        function createCard(p) {
            var pid = encodeURIComponent(p.name);
            var html = '<a href="producto.html?id=' + pid + '" class="block w-full">';
            html += '<div class="group bg-white rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500">';
            html += '<div class="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-6 relative">';
            html += '<img src="' + p.img + '" alt="' + p.name + '" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700">';
            html += '<span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">' + p.cat + '</span>';
            html += '</div>';
            html += '<div class="p-6">';
            html += '<h3 class="font-sync text-sm tracking-tighter mb-2 uppercase text-secondary group-hover:text-primary transition-colors">' + p.name + '</h3>';
            html += '<p class="text-primary font-black tracking-widest mb-4">' + p.price + '</p>';
            html += '<span class="text-xs font-black uppercase text-secondary border-t border-gray-50 pt-4 block">Ver Detalles →</span>';
            html += '</div>';
            html += '<div class="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">';
            html += '<button class="w-full bg-primary hover:bg-obsidiana text-white py-3 rounded-lg text-[10px] font-black uppercase shadow-lg shadow-primary/20">Añadir al Carrito</button>';
            html += '</div>';
            html += '</div>';
            html += '</a>';
            return html;
        }
        
        var grid = document.getElementById('featured-grid');
        
        if (grid) {
            var featured = products.filter(function(p) { return p.featured; });
            var featuredQuad = featured.concat(featured).concat(featured).concat(featured);
            
            var html = '';
            for (var i = 0; i < featuredQuad.length; i++) {
                html += '<div class="swiper-slide" style="width:320px;margin-right:24px;">';
                html += createCard(featuredQuad[i]);
                html += '</div>';
            }
            grid.innerHTML = html;
        }
        
        // Init Swiper after content is set
        setTimeout(function() {
            var container = document.getElementById('featured-slider');
            if (!container || typeof Swiper === 'undefined') {
                return;
            }
            
            var featuredCount = 8;
            var swiper = new Swiper('#featured-slider', {
                slidesPerView: 'auto',
                spaceBetween: 24,
                loop: true,
                loopedSlides: featuredCount,
                grabCursor: true,
                touchgrabCursor: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.featured-next',
                    prevEl: '.featured-prev',
                },
                keyboard: {
                    enabled: true,
                },
                allowTouchMove: true,
                pagination: {
                    el: '#featured-dots',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 16,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    }
                }
            });
            
            }, 100);
    });
})();