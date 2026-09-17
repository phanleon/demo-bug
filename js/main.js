// =========================================
// LAMBORGHINI LUXURY CARS - MAIN JS
// =========================================

// Dữ liệu các dòng xe Lamborghini
const LAMBO_MODELS = [
    {
        id: "aventador-svj",
        name: "AVENTADOR SVJ",
        category: "V12 SUPER SPORT",
        badge: "V12 ENGINE",
        price: "$517,770",
        priceNum: 517770,
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200",
        bgImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2071",
        description: "Thiết kế vượt qua giới hạn của kỹ thuật ô tô, Aventador SVJ tạo nên một tiêu chuẩn mới về hiệu năng và trải nghiệm lái đỉnh cao.",
        specs: {
            speed: "350 km/h",
            accel: "2.8 s (0-100 km/h)",
            power: "770 CV / 566 kW",
            engine: "V12, 6.5 L"
        },
        colors: ["#d4af37", "#cc0000", "#111111", "#0055ff", "#e6e6e6"]
    },
    {
        id: "revuelto",
        name: "LAMBORGHINI REVUELTO",
        category: "V12 HYBRID HPEV",
        badge: "HYBRID HYPERCAR",
        price: "$604,000",
        priceNum: 604000,
        image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200",
        bgImage: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2071",
        description: "Chiếc siêu xe hybrid sạc điện V12 đầu tiên của Lamborghini, định hình tương lai tốc độ với công suất kinh ngạc 1015 CV.",
        specs: {
            speed: "> 350 km/h",
            accel: "2.5 s (0-100 km/h)",
            power: "1015 CV",
            engine: "V12 6.5L + 3 Motor Điện"
        },
        colors: ["#ff5500", "#111111", "#d4af37", "#00aa55", "#ffffff"]
    },
    {
        id: "huracan-sto",
        name: "HURACÁN STO",
        category: "V10 TRACK FOCUSED",
        badge: "V10 RACE CAR",
        price: "$334,965",
        priceNum: 334965,
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
        bgImage: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2071",
        description: "Super Trofeo Omologata: Siêu xe thương mại mang DNA đường đua chuyên nghiệp với khí động học cực đại.",
        specs: {
            speed: "310 km/h",
            accel: "3.0 s (0-100 km/h)",
            power: "640 CV",
            engine: "V10 N/A 5.2 L"
        },
        colors: ["#0088ff", "#ff0055", "#1a1a1a", "#d4af37", "#e0e0e0"]
    },
    {
        id: "urus-performante",
        name: "URUS PERFORMANTE",
        category: "SUPER SUV",
        badge: "PERFORMANCE SUV",
        price: "$269,885",
        priceNum: 269885,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
        bgImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2071",
        description: "Mẫu Super SUV nâng tầm giới hạn thể thao, kết hợp hoàn hảo giữa hiệu năng siêu xe và sự linh hoạt vượt địa hình.",
        specs: {
            speed: "306 km/h",
            accel: "3.3 s (0-100 km/h)",
            power: "666 CV",
            engine: "V8 Twin-Turbo 4.0 L"
        },
        colors: ["#ffcc00", "#111111", "#0044cc", "#888888", "#ffffff"]
    },
    {
        id: "sian-fkp37",
        name: "SIÁN FKP 37",
        category: "HYBRID LIMITED",
        badge: "FEW-OFF SPECIAL",
        price: "$3,700,000",
        priceNum: 3700000,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200",
        bgImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2071",
        description: "Kiệt tác giới hạn ứng dụng công nghệ siêu tụ điện độc quyền, tạo nên siêu phẩm động cơ V12 mạnh nhất của Lamborghini.",
        specs: {
            speed: "> 355 km/h",
            accel: "2.8 s (0-100 km/h)",
            power: "819 CV",
            engine: "V12 + Siêu tụ điện"
        },
        colors: ["#00a86b", "#d4af37", "#111111", "#800020", "#c0c0c0"]
    },
    {
        id: "countach-lpi800",
        name: "COUNTACH LPI 800-4",
        category: "ICONIC REBIRTH",
        badge: "LEGENDARY V12",
        price: "$2,640,000",
        priceNum: 2640000,
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200",
        bgImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2071",
        description: "Huyền thoại sống dậy. Sự kết hợp giữa đường nét tương lai huyền thoại Countach cùng sức mạnh V12 hybrid tiên tiến.",
        specs: {
            speed: "355 km/h",
            accel: "2.8 s (0-100 km/h)",
            power: "814 CV",
            engine: "V12 6.5 L + Motor 48V"
        },
        colors: ["#ffffff", "#d4af37", "#111111", "#cc0000", "#336699"]
    }
];

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initGSAPAnimations();
    initCartCount();
    initModelsSection();
});

// Smooth Scroll với Lenis
function initLenis() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
}

// Khởi tạo GSAP Animations cho Hero & Sections
function initGSAPAnimations() {
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Animating Hero Elements
        tl.to('.title', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.2
        })
        .to('.subtitle', {
            opacity: 1,
            y: 0,
            duration: 1.0
        }, '-=0.8')
        .to('.btn-luxury', {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.6');
    } else {
        // Fallback hiển thị nếu GSAP không tải được
        document.querySelectorAll('.title, .subtitle, .btn-luxury').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
}

// Khởi tạo danh sách các dòng xe và bộ lọc category
function initModelsSection() {
    const gridContainer = document.getElementById('models-grid');
    if (!gridContainer) return;

    // Thêm bộ lọc category nếu chưa có
    const sectionHeading = document.querySelector('.models-heading');
    if (sectionHeading && !document.getElementById('category-filters')) {
        const filterContainer = document.createElement('div');
        filterContainer.id = 'category-filters';
        filterContainer.className = 'category-filters';
        filterContainer.innerHTML = `
            <button class="filter-btn active" onclick="filterModels('ALL', this)">TẤT CẢ</button>
            <button class="filter-btn" onclick="filterModels('V12', this)">V12 SUPERCAR</button>
            <button class="filter-btn" onclick="filterModels('V10', this)">V10 RACE</button>
            <button class="filter-btn" onclick="filterModels('HYBRID', this)">HYBRID</button>
            <button class="filter-btn" onclick="filterModels('SUV', this)">SUPER SUV</button>
        `;
        sectionHeading.appendChild(filterContainer);
    }

    renderModelsGrid(LAMBO_MODELS);
}

// Render lưới siêu xe
function renderModelsGrid(models) {
    const gridContainer = document.getElementById('models-grid');
    if (!gridContainer) return;

    if (models.length === 0) {
        gridContainer.innerHTML = `<p class="empty-msg">Không tìm thấy mẫu xe tương ứng.</p>`;
        return;
    }

    gridContainer.innerHTML = models.map(car => `
        <div class="model-card" data-category="${car.category}">
            <div class="model-card-image-wrap">
                <img src="${car.image}" alt="${car.name}" class="model-card-image" loading="lazy">
                <span class="model-badge">${car.badge}</span>
            </div>
            <div class="model-card-content">
                <p class="model-card-category">${car.category}</p>
                <h3 class="model-card-title">${car.name}</h3>
                <p class="model-card-description">${car.description}</p>
                <div class="model-card-specs">
                    <div><span>Vmax</span><strong>${car.specs.speed}</strong></div>
                    <div><span>0-100 km/h</span><strong>${car.specs.accel}</strong></div>
                    <div><span>Công suất</span><strong>${car.specs.power}</strong></div>
                </div>
                <div class="model-card-footer">
                    <span class="model-card-price">${car.price}</span>
                    <div class="card-actions">
                        <a href="detail.html?id=${car.id}" class="model-card-link">CHI TIẾT</a>
                        <button class="btn-add-cart-icon" title="Thêm vào giỏ hàng VIP" onclick="addToCart('${car.id}', event)">
                            + CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Lọc siêu xe theo category
function filterModels(category, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    if (category === 'ALL') {
        renderModelsGrid(LAMBO_MODELS);
    } else {
        const filtered = LAMBO_MODELS.filter(car => 
            car.category.toUpperCase().includes(category) || 
            car.badge.toUpperCase().includes(category)
        );
        renderModelsGrid(filtered);
    }
}

// Quản lý giỏ hàng VIP
function getCart() {
    return JSON.parse(localStorage.getItem('lambo_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('lambo_cart', JSON.stringify(cart));
    initCartCount();
}

function addToCart(carId, event) {
    if (event) event.preventDefault();
    const car = LAMBO_MODELS.find(item => item.id === carId);
    if (!car) return;

    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === carId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            id: car.id,
            name: car.name,
            price: car.price,
            priceNum: car.priceNum,
            image: car.image,
            category: car.category,
            quantity: 1
        });
    }

    saveCart(cart);
    showNotification(`Đã thêm ${car.name} vào Giỏ hàng VIP!`);
}

function removeFromCart(carId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== carId);
    saveCart(cart);
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

function initCartCount() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = totalCount;
    }
}

// Thông báo Toast VIP sang trọng
function showNotification(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'luxury-toast';
    toast.innerHTML = `
        <span class="toast-icon">★</span>
        <span class="toast-text">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Giả lập âm thanh động cơ V12 bằng Web Audio API
function playEngineRev() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';

        const now = ctx.currentTime;
        // Giả lập Rev tiếng ga Lamborghini V12: từ 120Hz rồ ga vọt lên 450Hz rồi giảm dần
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(520, now + 0.6);
        osc.frequency.exponentialRampToValueAtTime(180, now + 1.8);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.25, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.1);

        showNotification("🔊 V12 Engine Rev Initiated!");
    } catch (e) {
        console.log("Audio not allowed without user interaction first.");
    }
}
