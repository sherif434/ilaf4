/* -------------------------------------------------------------
   إيلاف - منطق العمل والتفاعلات (Eelaf Shop Application Logic)
   ------------------------------------------------------------- */

// رقم هاتف المشرف الافتراضي لتلقي الطلبات عبر الواتساب (يمكن تعديله هنا)
const SUPERVISOR_PHONE = "+212600000000";

// قاعدة بيانات المنتجات المغربية الفاخرة المحدثة بمعرض الصور والفوائد وطريقة الاستخدام
let PRODUCTS = [
    {
        id: 1,
        title: "زيت الأركان التجميلي العضوي النقي",
        desc: "معصور على البارد، طبيعي 100% لتغذية البشرة والشعر وترطيبهما بعمق.",
        price: 150.00,
        category: "cosmetics",
        badge: "الأكثر مبيعاً",
        image: "argan_oil.png",
        images: ["argan_oil.png", "logo.png"],
        benefits: [
            "ترطيب عميق للبشرة الجافة والتالفة واستعادة مرونتها.",
            "مكافحة الشيخوخة وتقليل ظهور الخطوط الدقيقة والتجاعيد.",
            "تغذية بصيلات الشعر وعلاج التقصف والبهتان والجفاف.",
            "تقوية الأظافر الهشة وحمايتها من التكسر والتشققات."
        ],
        usage: "ضعي بضع قطرات من الزيت على بشرة وجهك وجسمك بعد تنظيفهما، ودلكي بلطف بحركات دائرية قبل النوم. بالنسبة للشعر، وزعي الزيت بالتساوي على الأطراف وجذور الشعر، واتركيه لمدة ساعة على الأقل قبل الاستحمام وغسله."
    },
    {
        id: 2,
        title: "الصابون البلدي المغربي بالزيتون والنعناع",
        desc: "صابون تقليدي ناعم يزيل الخلايا الميتة وينظف البشرة بعمق في الحمام المغربي.",
        price: 45.00,
        category: "cosmetics",
        badge: "طبيعي",
        image: "black_soap.png",
        images: ["black_soap.png", "logo.png"],
        benefits: [
            "تقشير طبيعي فائق الفعالية يزيل خلايا الجلد الميتة تماماً.",
            "تنشيط الدورة الدموية وتفتيح وتوحيد لون البشرة والجسم.",
            "تنظيف مسام الجسم بعمق وإزالة الشوائب والترسبات الدهنية.",
            "إضفاء نعومة فائقة ونضارة طبيعية وملمس حريري رائع للجسم."
        ],
        usage: "يدهن الجسم بالكامل بالصابون البلدي بعد التعرض للبخار الدافئ أو الماء الساخن في الحمام لمدة 10 دقائق، يترك الصابون على الجسم لمدة 5 دقائق، ثم يشطف بالماء الفاتر جيداً، وبعدها يتم فرك الجسم باستخدام الليفة المغربية (الكيسة) بحركات طولية لإزالة الجلد الميت."
    },
    {
        id: 3,
        title: "الغاسول المغربي الفاخر بالأعشاب الطبيعية",
        desc: "طين الأطلس الطبيعي المخلوط بالورد والبابونج لتنظيف وتنعيم البشرة والشعر.",
        price: 60.00,
        category: "cosmetics",
        badge: "مميز",
        image: "ghassoul.png",
        images: ["logo.png", "argan_oil.png"],
        benefits: [
            "امتصاص الدهون الزائدة والشوائب من مسام البشرة بكفاءة عالية.",
            "شد مسام البشرة الواسعة وتحسين مرونتها ومظهرها العام.",
            "تغذية بصيلات الشعر وإضافة حجم ولمعان طبيعي مميز له.",
            "تلطيف البشرة الحساسة وتقليل الاحمرار والتهيجات الجلدية."
        ],
        usage: "يخلط مقدار مناسب من الغاسول بماء دافئ أو ماء ورد للحصول على عجينة متجانسة وسلسة. يوضع الماسك على الوجه أو الشعر لمدة 10-15 دقيقة حتى يجف تماماً، ثم يشطف بالماء الفاتر بلطف."
    },
    {
        id: 4,
        title: "ماء ورد قلعة مكونة المقطر الطبيعي",
        desc: "تونر طبيعي منعش لتهدئة البشرة وتنقيتها، مقطر من بتلات الورد الجوري.",
        price: 35.00,
        category: "cosmetics",
        badge: "شائع",
        image: "rose_water.png",
        images: ["logo.png", "black_soap.png"],
        benefits: [
            "تونر طبيعي ومثالي يوازن درجة حموضة البشرة الطبيعية (pH).",
            "تضييق المسام الواسعة بالوجه ومنحه إشراقة وانتعاشاً فورياً.",
            "تهدئة تهيج البشرة الحساسة واحمرارها بعد إزالة الشعر أو الحلاقة.",
            "ترطيب خفيف ومناسب لجميع أنواع البشرة في كافة فصول السنة."
        ],
        usage: "يرش ماء الورد مباشرة على الوجه والرقبة بعد تنظيفهما، أو يمسح بواسطة قطنة مبللة صباحاً ومساءً. يمكن استخدامه كعنصر خلط أساسي مع قناع الغاسول المغربي لنتائج أفضل."
    },
    {
        id: 5,
        title: "أملو المغربي الأصيل باللوز وأركان والعسل",
        desc: "مزيج لذيذ ومغذي من اللوز المحمص، زيت الأركان الغذائي وعسل النحل الحر.",
        price: 120.00,
        category: "food",
        badge: "صحي ومغذي",
        image: "amlou.png",
        images: ["logo.png", "argan_oil.png"],
        benefits: [
            "مصدر طبيعي وصحي هائل يمد الجسم بالطاقة والنشاط طوال اليوم.",
            "غني بالأحماض الدهنية الصحية (أوميغا 6 و 9) ومضادات الأكسدة.",
            "يقوي جهاز المناعة ويساعد في تحسين عملية الهضم والتمثيل الغذائي.",
            "بديل صحي ولذيذ وخالٍ من المواد الحافظة والسكريات المصنعة."
        ],
        usage: "يقدم كطبق أساسي في الفطور أو الوجبات الخفيفة، ويؤكل مع الخبز الساخن أو الفطائر المغربية (البغرير والمسمن). ينصح بتحريك وتحريك أملو جيداً في البرطمان قبل الاستهلاك نظراً لانفصال الزيت الطبيعي عن اللوز في الأعلى."
    },
    {
        id: 6,
        title: "زعفران تاليوين الحر الأصيل (1 جرام)",
        desc: "الذهب الأحمر المغربي ذو النكهة والرائحة القوية، مقطوف يدوياً من مزارع تاليوين.",
        price: 75.00,
        category: "food",
        badge: "فاخر",
        image: "saffron.png",
        images: ["logo.png", "black_soap.png"],
        benefits: [
            "مضاد قوي للأكسدة والالتهابات ويقوي صحة الشرايين والقلب.",
            "يساعد في تحسين المزاج العام ومكافحة أعراض القلق والاكتئاب.",
            "تحسين مستويات الذاكرة وتقوية القدرات الذهنية ومكافحة الزهايمر.",
            "يضفي نكهة ملكية فريدة ولوناً ذهبياً رائعاً للأطباق الفاخرة والشاي."
        ],
        usage: "تنقع بضع شعيرات من الزعفران في نصف كوب من الماء الدافئ أو الحليب الدافئ لمدة 10 دقائق لتتحلل خصائصه ونكهته، ثم يضاف السائل المنقوع للطبخ (مثل الطواجن أو الأرز) أو للشاي المغربي الساخن."
    },
    {
        id: 7,
        title: "طقم الشاي المغربي النحاسي الفاخر",
        desc: "براد نحاسي منقوش يدوياً مع 6 كؤوس مزخرفة وصينية لتقديم الشاي المغربي الأصيل.",
        price: 450.00,
        category: "sets",
        badge: "تراثي",
        image: "tea_set.png",
        images: ["logo.png", "argan_oil.png"],
        benefits: [
            "صناعة يدوية تقليدية 100% تعكس عراقة الفن والنحاس المغربي.",
            "نحاس نقي ذو جودة عالية يحتفظ بحرارة ونكهة الشاي لفترة أطول.",
            "تحفة فنية رائعة تضيف لمسة جمال وتراث أصيل لأي ركن بمنزلك.",
            "مثالي لإقامة طقوس الشاي المغربي المميزة واستقبال الضيوف بفخامة."
        ],
        usage: "يغسل البراد والكؤوس يدوياً بالماء الفاتر وصابون لطيف (تجنب غسالة الأطباق). يوضع الشاي الأخضر والنعناع والسكر والماء المغلي بداخله، ويترك ليتخمر لبضع دقائق، ثم يصب الشاي في الكؤوس من مسافة مرتفعة لخلق الرغوة التقليدية."
    },
    {
        id: 8,
        title: "صندوق العناية المغربي الملكي المتكامل",
        desc: "يحتوي على زيت أركان، صابون بلدي، غاسول، ليفة كيسة فاخرة، وماء الورد في صندوق خشبي مميز.",
        price: 280.00,
        category: "sets",
        badge: "باقة هدايا",
        image: "gift_box.png",
        images: ["logo.png", "black_soap.png"],
        benefits: [
            "تجربة حمام مغربي تقليدي ملكي متكاملة وفاخرة داخل منزلك.",
            "توفير قيمة اقتصادية ممتازة مقارنة بشراء المستحضرات بشكل فردي.",
            "هدية أنيقة وفاخرة ومثالية للمناسبات الخاصة والتهادي الفاخر.",
            "جميع المكونات طبيعية تماماً ومستخلصة بعناية لتمنح بشرتك النعومة الفائقة."
        ],
        usage: "ابدأ بالصابون البلدي بعد تعريض جسمك للبخار الساخن ثم التقشير بالليفة المغربية المرفقة، ثم اخلط قناع الغاسول بماء الورد وضعه على وجهك وجسمك، وفي النهاية بعد الاستحمام جفف جسمك ورطبه بالكامل بزيت الأركان النقي."
    }
];

// قاعدة بيانات الدول لرمز التحقق وتسجيل الدخول
const COUNTRIES = {
    EG: { name: "مصر", prefix: "+20", flag: "🇪🇬", placeholder: "1x xxx xxxx", pattern: /^[1][0-259]\d{8}$/ },
    MA: { name: "المغرب", prefix: "+212", flag: "🇲🇦", placeholder: "6xx xx xx xx", pattern: /^[5-7]\d{8}$/ },
    SA: { name: "السعودية", prefix: "+966", flag: "🇸🇦", placeholder: "5x xxx xxxx", pattern: /^5\d{8}$/ },
    AE: { name: "الإمارات", prefix: "+971", flag: "🇦🇪", placeholder: "5x xxx xxxx", pattern: /^5\d{8}$/ },
    KW: { name: "الكويت", prefix: "+965", flag: "🇰🇼", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ },
    QA: { name: "قطر", prefix: "+974", flag: "🇶🇦", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ },
    OM: { name: "عمان", prefix: "+968", flag: "🇴🇲", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ },
    BH: { name: "البحرين", prefix: "+973", flag: "🇧🇭", placeholder: "xxxx xxxx", pattern: /^\d{8}$/ }
};

// حالة التطبيق العامة (Application State)
let cart = [];
let currentUser = null;
let currentView = "home";
let currentOrder = null;
let otpCode = "";
let otpTimerInterval = null;
const SHIPPING_COST = 30.00; // تكلفة ثابتة للتوصيل بالجنيه المصري

// حالة صفحة تفاصيل المنتج النشطة
let selectedProduct = null;
let detailQuantity = 1;
let selectedCountry = "EG"; // الدولة الافتراضية هي مصر
let currentFilter = "all";

// إعدادات قاعدة البيانات السحابية (ExtendsClass JSON Storage)
const DB_BIN_URL = "https://extendsclass.com/api/json-storage/bin/fdfbfbc";
let dbOwners = [{ phone: "01060091916", password: "12345678" }]; // قائمة المسؤولين الافتراضية
let dbOrdersList = []; // قائمة جميع الطلبات المجلوبة من السحابة
let tempOwnerPhone = ""; // لحفظ رقم هاتف المسؤول مؤقتاً أثناء تسجيل الدخول
let isDarkMode = false; // حالة الوضع الداكن

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    // تحميل حالة المستخدم وسلة التسوق من التخزين المحلي
    loadSession();
    
    // تهيئة وتطبيق الوضع الداكن
    initDarkMode();
    
    // تحديث شريط السلة
    updateCartCount();
    
    // تفعيل أيقونات Lucide
    lucide.createIcons();
    
    // مراقبة أحداث الإدخال لرموز OTP للتركيز التلقائي
    initOtpInputFocus();

    // تهيئة قاعدة البيانات السحابية والمزامنة
    initCloudDatabase();
    startCloudSync();
});

// حفظ وحمل الجلسة
function loadSession() {
    const savedUser = localStorage.getItem("eelaf_user");
    const savedCart = localStorage.getItem("eelaf_cart");
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserButtonState(true);
    }
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveSession() {
    if (currentUser) {
        localStorage.setItem("eelaf_user", JSON.stringify(currentUser));
    } else {
        localStorage.removeItem("eelaf_user");
    }
    localStorage.setItem("eelaf_cart", JSON.stringify(cart));
}

// تحديث واجهة زر الحساب
function updateUserButtonState(isLoggedIn) {
    const userBtnText = document.getElementById("user-btn-text");
    const userBtn = document.getElementById("user-btn");
    const navOwner = document.getElementById("nav-owner");
    
    if (isLoggedIn && currentUser) {
        if (currentUser.role === 'owner') {
            userBtnText.textContent = `مسؤول: ${currentUser.phone}`;
            if (navOwner) navOwner.classList.remove("hidden");
        } else {
            userBtnText.textContent = `مرحباً، ${currentUser.phone}`;
            if (navOwner) navOwner.classList.add("hidden");
        }
        userBtn.classList.remove("btn-secondary");
        userBtn.classList.add("btn-primary");
    } else {
        userBtnText.textContent = "تسجيل الدخول";
        userBtn.classList.remove("btn-primary");
        userBtn.classList.add("btn-secondary");
        if (navOwner) navOwner.classList.add("hidden");
    }
}

// عرض المنتجات في الشبكة
function renderProducts(categoryFilter = "all") {
    const grid = document.getElementById("products-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    const filtered = categoryFilter === "all" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === categoryFilter);
        
    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            <div class="product-image-container" onclick="showProductDetails(${product.id})">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.title}" class="product-image" onerror="this.src='logo.png'">
            </div>
            <div class="product-info" onclick="showProductDetails(${product.id})">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title" title="${product.title}">${product.title}</h3>
                <p class="product-desc" title="${product.desc}">${product.desc}</p>
                <div class="product-price-action">
                    <span class="product-price">${product.price.toFixed(2)} ج.م.</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})" aria-label="عرض التفاصيل">
                        <i data-lucide="eye"></i>
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // إعادة تهيئة أيقونات Lucide للمنتجات الجديدة
    lucide.createIcons();
}

function getCategoryName(category) {
    switch (category) {
        case "cosmetics": return "مستحضرات تجميل";
        case "food": return "منتجات غذائية";
        case "sets": return "باقات وهدايا";
        default: return "عام";
    }
}

// منطق تصفية المنتجات
function filterProducts(category) {
    // تحديث حالة الأزرار النشطة
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute("onclick").includes(`'${category}'`));
    if (activeBtn) activeBtn.classList.add("active");
    
    renderProducts(category);
}

// تنبيهات Toast
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = `<i data-lucide="info"></i> <span>${message}</span>`;
    toast.classList.remove("hidden");
    lucide.createIcons();
    
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3500);
}

// إدارة سلة المشتريات
function toggleCart() {
    const drawer = document.getElementById("cart-drawer");
    drawer.classList.toggle("hidden");
    if (!drawer.classList.contains("hidden")) {
        renderCartItems();
    }
}

function closeCartOnOverlay(event) {
    toggleCart();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.product.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    saveSession();
    updateCartCount();
    showToast(`تمت إضافة "${product.title}" إلى سلة المشتريات.`);
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveSession();
        updateCartCount();
        renderCartItems();
    }
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.product.id === productId);
    if (itemIndex > -1) {
        const title = cart[itemIndex].product.title;
        cart.splice(itemIndex, 1);
        saveSession();
        updateCartCount();
        renderCartItems();
        showToast(`تم حذف "${title}" من السلة.`);
    }
}

function updateCartCount() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = [document.getElementById("cart-badge"), document.getElementById("cart-count")];
    
    badges.forEach(badge => {
        if (badge) badge.textContent = totalQty;
    });
}

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const totalPriceElement = document.getElementById("cart-total-price");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <i data-lucide="shopping-bag"></i>
                <p>سلة المشتريات فارغة حالياً</p>
                <button class="btn btn-primary btn-sm mt-3" onclick="toggleCart()">تصفح المنتجات</button>
            </div>
        `;
        totalPriceElement.textContent = "0.00 ج.م.";
        lucide.createIcons();
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;
        
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-image" onerror="this.src='logo.png'">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.product.title}</h4>
                <p class="cart-item-price">${item.product.price.toFixed(2)} ج.م.</p>
                <div class="cart-item-actions">
                    <div class="quantity-controller">
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, -1)">
                            <i data-lucide="minus"></i>
                        </button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, 1)">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                    <button class="delete-item-btn" onclick="removeFromCart(${item.product.id})" aria-label="حذف">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
    
    totalPriceElement.textContent = `${subtotal.toFixed(2)} ج.م.`;
    lucide.createIcons();
}

// عرض تفاصيل المنتج ديناميكياً
function showProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    selectedProduct = product;
    detailQuantity = 1; // تصفير الكمية المحددة
    
    // تعبئة البيانات في واجهة تفاصيل المنتج
    document.getElementById("detail-main-image").src = product.images[0];
    document.getElementById("detail-main-image").alt = product.title;
    document.getElementById("detail-category").textContent = getCategoryName(product.category);
    document.getElementById("detail-title").textContent = product.title;
    document.getElementById("detail-price").textContent = `${product.price.toFixed(2)} ج.م.`;
    document.getElementById("detail-desc").textContent = product.desc;
    document.getElementById("detail-qty-val").textContent = detailQuantity;
    
    // تعبئة معرض الصور المصغرة
    const thumbnailsContainer = document.getElementById("detail-thumbnails");
    thumbnailsContainer.innerHTML = "";
    
    product.images.forEach((img, idx) => {
        const thumb = document.createElement("img");
        thumb.className = `thumbnail-img ${idx === 0 ? 'active' : ''}`;
        thumb.src = img;
        thumb.alt = `${product.title} - صورة ${idx + 1}`;
        thumb.onerror = function() { this.src = 'logo.png'; };
        
        // عند الضغط على الصورة المصغرة تتغير الصورة الرئيسية
        thumb.onclick = () => {
            document.getElementById("detail-main-image").src = img;
            document.querySelectorAll(".thumbnail-img").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
        };
        
        thumbnailsContainer.appendChild(thumb);
    });
    
    // تعبئة الفوائد
    const benefitsList = document.getElementById("detail-benefits");
    benefitsList.innerHTML = "";
    product.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // تعبئة طريقة الاستخدام
    document.getElementById("detail-usage").textContent = product.usage;
    
    // الانتقال لصفحة التفاصيل
    navigateTo("product-detail");
}

// التحكم في كمية صفحة التفاصيل
function adjustDetailQuantity(delta) {
    detailQuantity += delta;
    if (detailQuantity < 1) {
        detailQuantity = 1;
    }
    document.getElementById("detail-qty-val").textContent = detailQuantity;
}

// إضافة المنتج من صفحة التفاصيل إلى السلة
function addProductFromDetailsToCart() {
    if (!selectedProduct) return;
    
    const existing = cart.find(item => item.product.id === selectedProduct.id);
    if (existing) {
        existing.quantity += detailQuantity;
    } else {
        cart.push({ product: selectedProduct, quantity: detailQuantity });
    }
    
    saveSession();
    updateCartCount();
    showToast(`تمت إضافة ${detailQuantity} من "${selectedProduct.title}" إلى السلة.`);
    
    // فتح سلة المشتريات تلقائياً لمراجعة الطلب والشراء
    toggleCart();
}

// التنقل بين الصفحات والأقسام (Views Management)
function navigateTo(viewName) {
    // جمع كل الأقسام (Views)
    const allViews = document.querySelectorAll(".view-section");
    allViews.forEach(v => v.classList.add("hidden"));
    
    // إزالة الصفة النشطة من جميع روابط الهيدر
    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
    
    currentView = viewName;
    
    if (viewName === "home") {
        document.getElementById("home-view").classList.remove("hidden");
        document.getElementById("nav-home").classList.add("active");
        window.scrollTo(0, 0);
    } else if (viewName === "products") {
        document.getElementById("products-view").classList.remove("hidden");
        document.getElementById("nav-products").classList.add("active");
        renderProducts(currentFilter || "all");
        window.scrollTo(0, 0);
    } else if (viewName === "testimonials") {
        document.getElementById("testimonials-view").classList.remove("hidden");
        document.getElementById("nav-testimonials").classList.add("active");
        window.scrollTo(0, 0);
    } else if (viewName === "checkout") {
        document.getElementById("checkout-view").classList.remove("hidden");
        window.scrollTo(0, 0);
    } else if (viewName === "receipt") {
        document.getElementById("receipt-view").classList.remove("hidden");
        window.scrollTo(0, 0);
    } else if (viewName === "product-detail") {
        document.getElementById("product-detail-view").classList.remove("hidden");
        document.getElementById("nav-products").classList.add("active");
        window.scrollTo(0, 0);
    } else if (viewName === "owner-panel") {
        document.getElementById("owner-panel-view").classList.remove("hidden");
        document.getElementById("nav-owner").classList.add("active");
        renderOwnerProductsTable();
        renderOwnerOrdersTable();
        updateOwnerNotificationCount();
        window.scrollTo(0, 0);
    }
    
    // تفعيل وتحديث أيقونات Lucide
    lucide.createIcons();
}

// الذهاب إلى صفحة الدفع
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast("سلتك فارغة! أضف بعض المنتجات للمتابعة.");
        return;
    }
    
    // إغلاق سلة المشتريات
    const drawer = document.getElementById("cart-drawer");
    drawer.classList.add("hidden");
    
    // التحقق من تسجيل الدخول أولاً
    if (!currentUser) {
        showToast("يرجى تسجيل الدخول برقم الهاتف أولاً لإتمام طلبك.");
        openAuthModal();
        return;
    }
    
    // تعبئة ملخص الدفع
    renderCheckoutSummary();
    
    // الانتقال لصفحة الشحن والدفع
    navigateTo("checkout");
}

function renderCheckoutSummary() {
    const itemsContainer = document.getElementById("checkout-summary-items");
    const subtotalText = document.getElementById("checkout-subtotal");
    const totalText = document.getElementById("checkout-total");
    
    if (!itemsContainer) return;
    itemsContainer.innerHTML = "";
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;
        
        const div = document.createElement("div");
        div.className = "summary-item-row";
        div.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.title}" class="summary-item-img" onerror="this.src='logo.png'">
            <div class="summary-item-details">
                <div class="summary-item-name">${item.product.title}</div>
                <div class="summary-item-qty">الكمية: ${item.quantity}</div>
            </div>
            <div class="summary-item-total">${itemTotal.toFixed(2)} ج.م.</div>
        `;
        itemsContainer.appendChild(div);
    });
    
    const finalTotal = subtotal + SHIPPING_COST;
    
    subtotalText.textContent = `${subtotal.toFixed(2)} ج.م.`;
    totalText.textContent = `${finalTotal.toFixed(2)} ج.م.`;
}

// إدارة نافذة تسجيل الدخول (Authentication Modals)
function openAuthModal() {
    const modal = document.getElementById("auth-modal");
    modal.classList.remove("hidden");
    showAuthStep("phone");
    handleCountryChange(); // تحديث الحقول الافتراضية
}

function closeAuthModal() {
    const modal = document.getElementById("auth-modal");
    modal.classList.add("hidden");
    resetAuthTimer();
}

function closeAuthModalOnOverlay(event) {
    closeAuthModal();
}

function showAuthStep(step) {
    const phoneStep = document.getElementById("auth-step-phone");
    const otpStep = document.getElementById("auth-step-otp");
    const passwordStep = document.getElementById("auth-step-password");
    
    phoneStep.classList.add("hidden");
    otpStep.classList.add("hidden");
    if (passwordStep) passwordStep.classList.add("hidden");
    
    if (step === "phone") {
        phoneStep.classList.remove("hidden");
        resetAuthTimer();
    } else if (step === "otp") {
        otpStep.classList.remove("hidden");
    } else if (step === "password") {
        if (passwordStep) passwordStep.classList.remove("hidden");
    }
}

// منطق تغيير الدولة في تسجيل الدخول
function handleCountryChange() {
    const select = document.getElementById("auth-country");
    selectedCountry = select.value;
    const countryData = COUNTRIES[selectedCountry];
    
    const prefixSpan = document.getElementById("country-prefix");
    const phoneInput = document.getElementById("auth-phone");
    
    prefixSpan.textContent = countryData.prefix;
    phoneInput.placeholder = countryData.placeholder;
    phoneInput.value = ""; // مسح القيمة الحالية لتفادي أخطاء التحقق
    
    // تحديث تلميح رقم الهاتف المساعد
    const hint = document.getElementById("phone-hint");
    hint.textContent = `أدخل رقم هاتف ${countryData.name} المكون من الأرقام المتبقية بدون مفتاح الاتصال.`;
}

// إدخال وتوجيه رمز OTP
function initOtpInputFocus() {
    const digits = document.querySelectorAll(".otp-digit");
    
    digits.forEach((digit, idx) => {
        digit.addEventListener("paste", (e) => {
            const data = e.clipboardData.getData("text").trim();
            if (data.length === 4 && /^\d+$/.test(data)) {
                digits.forEach((d, i) => d.value = data[i]);
                digits[3].focus();
            }
        });
    });
}

function handleOtpInput(event) {
    const input = event.target;
    const nextIdx = parseInt(input.dataset.index) + 1;
    const digits = document.querySelectorAll(".otp-digit");
    
    // التحقق من أن القيمة رقمية
    input.value = input.value.replace(/[^0-9]/g, "");
    
    if (input.value && nextIdx < 4) {
        digits[nextIdx].focus();
    }
}

function handleOtpKeyDown(event) {
    const input = event.target;
    const prevIdx = parseInt(input.dataset.index) - 1;
    const digits = document.querySelectorAll(".otp-digit");
    
    if (event.key === "Backspace" && !input.value && prevIdx >= 0) {
        digits[prevIdx].focus();
    }
}

// محاكاة إرسال كود التحقق بناءً على الدولة
function handleSendOTP(event) {
    event.preventDefault();
    const phoneVal = document.getElementById("auth-phone").value.trim().replace(/\s+/g, '');
    const countryData = COUNTRIES[selectedCountry];
    
    if (!phoneVal) {
        showToast("يرجى إدخال رقم الهاتف.");
        return;
    }
    
    // التحقق من صحة الرقم بناءً على نمط الدولة المحددة
    if (countryData.pattern && !countryData.pattern.test(phoneVal)) {
        showToast(`يرجى إدخال رقم هاتف صحيح لـ ${countryData.name}. (مثل: ${countryData.placeholder})`);
        return;
    }
    
    // رقم الهاتف الكامل مع رمز الدولة
    const fullPhone = `${countryData.prefix} ${phoneVal}`;
    document.getElementById("display-auth-phone").textContent = fullPhone;
    
    // التحقق مما إذا كان رقم الهاتف ينتمي لأحد المسؤولين (المقارنة الذكية)
    const cleanPhoneVal = phoneVal.replace(/^0+/, ''); // إزالة الأصفار في البداية
    const matchedOwner = dbOwners.find(owner => {
        const cleanOwnerPhone = owner.phone.replace(/\s+/g, '').replace(/^\+?\d+?0/, '').replace(/^0+/, '');
        return cleanPhoneVal.endsWith(cleanOwnerPhone);
    });

    if (matchedOwner) {
        // إذا كان مسؤولاً، نطلب كلمة المرور الخاصة به
        tempOwnerPhone = matchedOwner.phone;
        showAuthStep("password");
        return;
    }
    
    // توليد رمز OTP تجريبي (لأغراض العرض) وعرضه للمستخدم للتسهيل
    otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    
    showToast(`تم إرسال رمز تحقق تجريبي: ${otpCode} (أدخله في الخطوة التالية)`);
    
    showAuthStep("otp");
    startOtpTimer();
}

// إدارة عداد إعادة إرسال الكود
function startOtpTimer() {
    const timerText = document.getElementById("otp-timer");
    const resendBtn = document.getElementById("resend-btn");
    let seconds = 59;
    
    resendBtn.disabled = true;
    timerText.textContent = seconds;
    
    clearInterval(otpTimerInterval);
    otpTimerInterval = setInterval(() => {
        seconds--;
        timerText.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(otpTimerInterval);
            resendBtn.disabled = false;
            resendBtn.innerHTML = "إعادة إرسال رمز التحقق";
        } else {
            resendBtn.innerHTML = `إعادة إرسال (<span id="otp-timer">${seconds}</span> ثانية)`;
        }
    }, 1000);
}

function resetAuthTimer() {
    clearInterval(otpTimerInterval);
    const resendBtn = document.getElementById("resend-btn");
    if (resendBtn) {
        resendBtn.disabled = true;
        resendBtn.innerHTML = `إعادة إرسال (<span id="otp-timer">59</span> ثانية)`;
    }
}

function handleResendOTP() {
    otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    showToast(`تم إعادة إرسال الرمز التجريبي: ${otpCode}`);
    startOtpTimer();
}

// التحقق من رمز OTP
function handleVerifyOTP(event) {
    event.preventDefault();
    const digits = document.querySelectorAll(".otp-digit");
    let enteredCode = "";
    
    digits.forEach(d => enteredCode += d.value);
    
    if (enteredCode === otpCode || enteredCode === "1234") { // السماح بـ 1234 ككود طوارئ للتسهيل
        const phoneVal = document.getElementById("auth-phone").value.trim();
        const countryData = COUNTRIES[selectedCountry];
        currentUser = { phone: `${countryData.prefix} ${phoneVal}` };
        
        saveSession();
        updateUserButtonState(true);
        closeAuthModal();
        showToast("تم تسجيل الدخول بنجاح.");
        
        // مسح خانات الكود للفرات القادمة
        digits.forEach(d => d.value = "");
    } else {
        showToast("رمز التحقق غير صحيح، يرجى المحاولة مرة أخرى.");
    }
}

// معالجة وتقديم الطلب (Place Order)
function handlePlaceOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById("shipping-name").value.trim();
    const phone = document.getElementById("shipping-phone").value.trim();
    const city = document.getElementById("shipping-city").value.trim();
    const address = document.getElementById("shipping-address").value.trim();
    const notes = document.getElementById("shipping-notes").value.trim();
    
    // إنشاء كائن الطلب الفريد
    const orderId = "EEL-" + Math.floor(10000 + Math.random() * 90000);
    const orderDate = formatDate(new Date());
    
    currentOrder = {
        orderId,
        date: orderDate,
        customerName: name,
        customerPhone: phone,
        city,
        address,
        notes,
        items: [...cart],
        subtotal: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        shipping: SHIPPING_COST,
        total: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + SHIPPING_COST,
        status: 'pending' // قيد الانتظار للموافقة
    };
    
    // إرسال الطلب سحابياً
    dbOrdersList.push(currentOrder);
    saveCloudData(PRODUCTS, dbOwners, dbOrdersList);
    
    // عرض الفاتورة
    renderInvoice(currentOrder);
    
    // إفراغ سلة المشتريات
    cart = [];
    saveSession();
    updateCartCount();
    
    // الانتقال لصفحة الفاتورة وتأكيد الطلب
    navigateTo("receipt");
    showToast("تم تسجيل طلبك بنجاح! الرجاء تأكيد الطلب مع المشرف.");
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('ar-EG', options); // تنسيق عربي مصر
}

// بناء الفاتورة ديناميكياً
function renderInvoice(order) {
    document.getElementById("receipt-id").textContent = `#${order.orderId}`;
    document.getElementById("receipt-date").textContent = order.date;
    document.getElementById("receipt-name").textContent = order.customerName;
    document.getElementById("receipt-phone").textContent = order.customerPhone;
    document.getElementById("receipt-city").textContent = order.city;
    document.getElementById("receipt-address").textContent = order.address;
    document.getElementById("barcode-text").textContent = `EELAF-ORDER-${order.orderId}`;
    
    // تحديث شارة الحالة في الفاتورة للعميل
    const statusBadge = document.getElementById("invoice-status");
    if (statusBadge) {
        statusBadge.className = `invoice-status-badge ${order.status}`;
        statusBadge.innerHTML = getStatusText(order.status);
    }
    
    // تحديث حالة زر طلب الإرجاع
    const returnBtn = document.getElementById("btn-return-request");
    if (returnBtn) {
        if (order.status === 'approved') {
            returnBtn.classList.remove("hidden");
            returnBtn.disabled = false;
            returnBtn.innerHTML = `<i data-lucide="refresh-cw"></i> تقديم طلب إرجاع المنتجات`;
        } else if (order.status === 'return_pending') {
            returnBtn.classList.remove("hidden");
            returnBtn.disabled = true;
            returnBtn.innerHTML = `<i data-lucide="clock"></i> طلب الإرجاع قيد المراجعة... ⏳`;
        } else if (order.status === 'returned') {
            returnBtn.classList.remove("hidden");
            returnBtn.disabled = true;
            returnBtn.innerHTML = `<i data-lucide="check-circle"></i> تم إرجاع الطلب بنجاح ✅`;
        } else if (order.status === 'return_rejected') {
            returnBtn.classList.remove("hidden");
            returnBtn.disabled = true;
            returnBtn.innerHTML = `<i data-lucide="x-circle"></i> تم رفض طلب الإرجاع ❌`;
        } else {
            returnBtn.classList.add("hidden");
        }
    }
    
    const tableBody = document.getElementById("receipt-table-body");
    tableBody.innerHTML = "";
    
    order.items.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <strong>${item.product.title}</strong>
                <p style="font-size:0.75rem; color:#828e86; margin:4px 0 0 0;">${getCategoryName(item.product.category)}</p>
            </td>
            <td class="text-center">${item.product.price.toFixed(2)} ج.م.</td>
            <td class="text-center">${item.quantity}</td>
            <td class="text-left">${(item.product.price * item.quantity).toFixed(2)} ج.م.</td>
        `;
        tableBody.appendChild(tr);
    });
    
    document.getElementById("receipt-subtotal").textContent = `${order.subtotal.toFixed(2)} ج.م.`;
    document.getElementById("receipt-shipping").textContent = `${order.shipping.toFixed(2)} ج.م.`;
    document.getElementById("receipt-total").textContent = `${order.total.toFixed(2)} ج.م.`;
    
    // تحديث أيقونات Lucide المضافة حديثاً
    lucide.createIcons();
}

// التقاط لقطة شاشة للفاتورة وحفظها كصورة تلقائياً عبر html2canvas
function downloadInvoiceImage() {
    if (!currentOrder) return;
    
    const invoiceElement = document.getElementById("invoice-card");
    showToast("جاري إعداد وتحميل الفاتورة كصورة، يرجى الانتظار...");
    
    html2canvas(invoiceElement, {
        scale: 2, // جودة مضاعفة للفاتورة
        useCORS: true, // للسماح بتحميل الصور الخارجية
        backgroundColor: "#ffffff"
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = `EELAF-INVOICE-${currentOrder.orderId}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        showToast("تم حفظ الفاتورة بنجاح في جهازك. يرجى إرسالها للمشرف.");
    }).catch(err => {
        console.error("Error generating invoice image:", err);
        showToast("حدث خطأ أثناء تحميل الفاتورة، يرجى أخذ لقطة شاشة يدوية للشاشة.");
    });
}

// إرسال الطلب للمشرف عبر الواتساب مع رسالة منسقة
function sendOrderToWhatsApp() {
    if (!currentOrder) return;
    
    let itemsText = "";
    currentOrder.items.forEach(item => {
        itemsText += `• ${item.product.title} (الكمية: ${item.quantity}) - ${(item.product.price * item.quantity).toFixed(2)} ج.م.\n`;
    });
    
    // صياغة رسالة واتساب أنيقة ومفصلة
    const message = `السلام عليكم ورحمة الله،\nلقد قمت بتقديم طلب من متجر *إيلاف للمنتجات المغربية*:\n\n` +
                    `*رقم الطلب:* #${currentOrder.orderId}\n` +
                    `*التاريخ:* ${currentOrder.date}\n\n` +
                    `*بيانات العميل والشحن:*\n` +
                    `• *الاسم الكامل:* ${currentOrder.customerName}\n` +
                    `• *رقم الهاتف:* ${currentOrder.customerPhone}\n` +
                    `• *المدينة:* ${currentOrder.city}\n` +
                    `• *العنوان بالتفصيل:* ${currentOrder.address}\n` +
                    (currentOrder.notes ? `• *ملاحظات:* ${currentOrder.notes}\n` : '') + `\n` +
                    `*المنتجات المطلوبة:*\n${itemsText}\n` +
                    `*المجموع الفرعي:* ${currentOrder.subtotal.toFixed(2)} ج.م.\n` +
                    `*تكلفة التوصيل:* ${currentOrder.shipping.toFixed(2)} ج.م.\n` +
                    `*المجموع الكلي المترتب:* *${currentOrder.total.toFixed(2)} ج.م.*\n\n` +
                    `*حالة الدفع:* بانتظار تأكيد الاستلام أو التحويل.\n` +
                    `لقد قمت بأخذ لقطة شاشة للفاتورة وسأرفقها لكم الآن لتأكيد الطلب وشحنه. شكراً لكم.`;
                    
    const encodedText = encodeURIComponent(message);
    
    // رابط الواتساب المباشر
    const whatsappUrl = `https://wa.me/${SUPERVISOR_PHONE.replace('+', '')}?text=${encodedText}`;
    
    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, "_blank");
}

// إعادة تصفير البيانات والعودة للرئيسية
function resetToHome() {
    currentOrder = null;
    navigateTo("home");
}

// 1. إضافة منتج جديد
function saveProduct(productObj) {
    // جلب المنتجات الموجودة مسبقاً (إن وجدت)
    let products = JSON.parse(localStorage.getItem('myProducts') || '[]');
    
    // إضافة المنتج الجديد للقائمة
    products.push(productObj);
    
    // تحويل المصفوفة إلى نص (String) ثم حفظها
    localStorage.setItem('myProducts', JSON.stringify(products));
    console.log("تم حفظ المنتج بنجاح");
}

// 2. استرجاع المنتجات لعرضها
function getProducts() {
    const data = localStorage.getItem('myProducts');
    return data ? JSON.parse(data) : [];
}

/* -------------------------------------------------------------
   منطق المسؤول وإدارة قاعدة البيانات السحابية (Owner & Cloud DB Logic)
   ------------------------------------------------------------- */

// تهيئة الاتصال وحلب البيانات سحابياً
async function initCloudDatabase() {
    updateDbStatusBadge(true, "جاري الاتصال...");
    try {
        const response = await fetch(DB_BIN_URL);
        if (response.ok) {
            const data = await response.json();
            if (data && data.products && data.owners) {
                PRODUCTS = data.products;
                dbOwners = data.owners;
                dbOrdersList = data.orders || [];
                updateDbStatusBadge(true, "متصل بالسحابة");
            } else {
                // تهيئة الحاوية السحابية الفارغة بالبيانات الافتراضية
                await saveCloudData(PRODUCTS, dbOwners, []);
                updateDbStatusBadge(true, "تم تهيئة السحابة");
            }
        } else {
            throw new Error("فشل في الحصول على بيانات صحيحة");
        }
    } catch (error) {
        console.error("خطأ في الاتصال بقاعدة البيانات السحابية:", error);
        updateDbStatusBadge(false, "يعمل محلياً (أوفلاين)");
        showToast("فشل الاتصال بالسحابة، يعرض المتجر البيانات المحلية المؤقتة.");
    }
    
    // رندرة المنتجات
    renderProducts(currentFilter || "all");
    if (currentUser && currentUser.role === 'owner') {
        renderOwnerProductsTable();
        renderOwnerOrdersTable();
        updateOwnerNotificationCount();
    }
}

// حفظ التغييرات سحابياً
async function saveCloudData(productsList, ownersList, ordersList = dbOrdersList) {
    try {
        const response = await fetch(DB_BIN_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                products: productsList,
                owners: ownersList,
                orders: ordersList
            })
        });
        if (!response.ok) {
            throw new Error("فشل التحديث السحابي");
        }
        updateDbStatusBadge(true, "تم الحفظ سحابياً");
        return true;
    } catch (error) {
        console.error("خطأ أثناء المزامنة السحابية الصادرة:", error);
        updateDbStatusBadge(false, "خطأ في الحفظ");
        showToast("خطأ: لم يتم حفظ التعديلات سحابياً، يرجى التحقق من اتصالك.");
        return false;
    }
}

// المزامنة الدورية (Polling) كل 15 ثانية لجلب التعديلات من الأجهزة الأخرى
function startCloudSync() {
    setInterval(async () => {
        try {
            const response = await fetch(DB_BIN_URL);
            if (response.ok) {
                const data = await response.json();
                if (data && data.products && data.owners) {
                    const productsChanged = JSON.stringify(PRODUCTS) !== JSON.stringify(data.products);
                    const ownersChanged = JSON.stringify(dbOwners) !== JSON.stringify(data.owners);
                    const newOrdersList = data.orders || [];
                    const ordersChanged = JSON.stringify(dbOrdersList) !== JSON.stringify(newOrdersList);
                    
                    // تنبيه المشرف بالطلبات الجديدة
                    if (currentUser && currentUser.role === 'owner' && ordersChanged) {
                        const oldPendingCount = dbOrdersList.filter(o => o.status === 'pending' || o.status === 'return_pending').length;
                        const newPendingCount = newOrdersList.filter(o => o.status === 'pending' || o.status === 'return_pending').length;
                        if (newPendingCount > oldPendingCount) {
                            showToast("تنبيه: لديك طلبات أو طلبات إرجاع معلقة جديدة! 🔔");
                        }
                    }
                    
                    if (productsChanged || ownersChanged || ordersChanged) {
                        PRODUCTS = data.products;
                        dbOwners = data.owners;
                        dbOrdersList = newOrdersList;
                        
                        // إعادة رندرة الأقسام
                        renderProducts(currentFilter || "all");
                        if (currentView === "product-detail" && selectedProduct) {
                            const updatedProduct = PRODUCTS.find(p => p.id === selectedProduct.id);
                            if (updatedProduct) {
                                selectedProduct = updatedProduct;
                                renderProductDetail(selectedProduct.id);
                            } else {
                                showToast("تنبيه: تم حذف هذا المنتج من قبل مسؤول آخر.");
                                navigateTo("products");
                            }
                        }
                        
                        // تحديث الفاتورة المعروضة حالياً عند تغير حالتها
                        if (currentView === "receipt" && currentOrder) {
                            const updatedOrder = dbOrdersList.find(o => o.orderId === currentOrder.orderId);
                            if (updatedOrder && JSON.stringify(currentOrder) !== JSON.stringify(updatedOrder)) {
                                currentOrder = updatedOrder;
                                renderInvoice(currentOrder);
                                showToast(`تم تحديث حالة طلبك إلى: ${getStatusText(currentOrder.status)}`);
                            }
                        }
                        
                        if (currentUser && currentUser.role === 'owner') {
                            renderOwnerProductsTable();
                            renderOwnerOrdersTable();
                            updateOwnerNotificationCount();
                        }
                        console.log("تمت مزامنة البيانات سحابياً تلقائياً.");
                    }
                    updateDbStatusBadge(true, "متصل بالسحابة");
                }
            }
        } catch (e) {
            console.warn("تعذر المزامنة التلقائية حالياً:", e);
            updateDbStatusBadge(false, "أوفلاين");
        }
    }, 15000);
}

// التحقق من كلمة مرور المسؤول وإتمام تسجيل الدخول
function handleVerifyOwnerPassword(event) {
    event.preventDefault();
    const passwordInput = document.getElementById("auth-password");
    const enteredPassword = passwordInput.value.trim();
    
    // البحث عن حساب المسؤول
    const matchedOwner = dbOwners.find(owner => owner.phone === tempOwnerPhone);
    
    if (matchedOwner && matchedOwner.password === enteredPassword) {
        currentUser = { phone: matchedOwner.phone, role: 'owner' };
        
        saveSession();
        updateUserButtonState(true);
        closeAuthModal();
        showToast("أهلاً بك! تم تسجيل الدخول كمسؤول بنجاح.");
        
        // مسح الحقل وإعادة التوجيه للوحة التحكم
        passwordInput.value = "";
        navigateTo("owner-panel");
    } else {
        showToast("كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.");
    }
}

// تبديل تبويبات لوحة التحكم
function switchOwnerTab(tabId) {
    // إخفاء كل التبويبات
    document.querySelectorAll(".owner-tab-content").forEach(c => c.classList.add("hidden"));
    document.querySelectorAll(".owner-tabs .tab-btn").forEach(b => b.classList.remove("active"));
    
    // إظهار التبويب المحدد وتفعيله
    if (tabId === 'products-mgmt') {
        document.getElementById("owner-products-mgmt").classList.remove("hidden");
        document.getElementById("tab-btn-products").classList.add("active");
        renderOwnerProductsTable();
    } else if (tabId === 'settings-mgmt') {
        document.getElementById("owner-settings-mgmt").classList.remove("hidden");
        document.getElementById("tab-btn-settings").classList.add("active");
    } else if (tabId === 'orders-mgmt') {
        document.getElementById("owner-orders-mgmt").classList.remove("hidden");
        document.getElementById("tab-btn-orders").classList.add("active");
        renderOwnerOrdersTable();
    }
}

// رندرة جدول المنتجات للمسؤول
function renderOwnerProductsTable() {
    const tbody = document.getElementById("owner-products-tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    PRODUCTS.forEach(product => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${product.image}" alt="${product.title}" onerror="this.src='logo.png'"></td>
            <td><strong>${product.title}</strong></td>
            <td><span class="product-category">${getCategoryName(product.category)}</span></td>
            <td><strong>${product.price.toFixed(2)} ج.م.</strong></td>
            <td>
                <div class="actions-cell">
                    <button class="btn-action-edit" onclick="openProductModal('edit', ${product.id})">
                        <i data-lucide="edit-2" style="width:14px;height:14px;"></i> تعديل
                    </button>
                    <button class="btn-action-delete" onclick="deleteProduct(${product.id})">
                        <i data-lucide="trash-2" style="width:14px;height:14px;"></i> حذف
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
}

// فتح نافذة تعديل/إضافة المنتج
function openProductModal(mode, productId = null) {
    const modal = document.getElementById("product-modal");
    const title = document.getElementById("product-modal-title");
    const form = document.getElementById("product-form");
    
    form.reset();
    document.getElementById("edit-product-id").value = "";
    
    if (mode === "add") {
        title.textContent = "إضافة منتج جديد سحابياً";
    } else if (mode === "edit" && productId) {
        title.textContent = "تعديل بيانات المنتج";
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            document.getElementById("edit-product-id").value = product.id;
            document.getElementById("prod-title").value = product.title;
            document.getElementById("prod-price").value = product.price;
            document.getElementById("prod-category").value = product.category;
            document.getElementById("prod-badge").value = product.badge || "";
            document.getElementById("prod-desc").value = product.desc;
            document.getElementById("prod-image").value = product.image;
            document.getElementById("prod-images").value = (product.images || []).join(", ");
            document.getElementById("prod-benefits").value = (product.benefits || []).join("\n");
            document.getElementById("prod-usage").value = product.usage || "";
        }
    }
    
    modal.classList.remove("hidden");
    lucide.createIcons();
}

function closeProductModal() {
    document.getElementById("product-modal").classList.add("hidden");
}

function closeProductModalOnOverlay(event) {
    closeProductModal();
}

// حفظ أو إضافة المنتج
async function handleSaveProduct(event) {
    event.preventDefault();
    
    const idVal = document.getElementById("edit-product-id").value;
    const title = document.getElementById("prod-title").value.trim();
    const price = parseFloat(document.getElementById("prod-price").value);
    const category = document.getElementById("prod-category").value;
    const badge = document.getElementById("prod-badge").value.trim();
    const desc = document.getElementById("prod-desc").value.trim();
    const image = document.getElementById("prod-image").value.trim();
    
    // معالجة معرض الصور الإضافية
    const imagesVal = document.getElementById("prod-images").value.trim();
    let images = [image]; // الصورة الرئيسية دائماً الأولى
    if (imagesVal) {
        const extraImages = imagesVal.split(",").map(img => img.trim()).filter(img => img.length > 0);
        images = images.concat(extraImages);
    } else {
        images.push("logo.png"); // صورة احتياطية
    }
    
    // معالجة الفوائد
    const benefitsVal = document.getElementById("prod-benefits").value.trim();
    const benefits = benefitsVal.split("\n").map(b => b.trim()).filter(b => b.length > 0);
    
    const usage = document.getElementById("prod-usage").value.trim();
    
    if (idVal) {
        // وضع التعديل (Edit)
        const productId = parseInt(idVal);
        const idx = PRODUCTS.findIndex(p => p.id === productId);
        if (idx > -1) {
            PRODUCTS[idx] = {
                id: productId,
                title,
                price,
                category,
                badge: badge || undefined,
                desc,
                image,
                images,
                benefits,
                usage
            };
            showToast("تم تعديل المنتج بنجاح.");
        }
    } else {
        // وضع الإضافة (Add)
        // توليد معرف فريد جديد
        const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;
        const newProduct = {
            id: newId,
            title,
            price,
            category,
            badge: badge || undefined,
            desc,
            image,
            images,
            benefits,
            usage
        };
        PRODUCTS.push(newProduct);
        showToast("تم إضافة المنتج الجديد بنجاح.");
    }
    
    // حفظ التغييرات سحابياً وإعادة رندرة المعرض
    await saveCloudData(PRODUCTS, dbOwners);
    closeProductModal();
    renderProducts(currentFilter || "all");
    renderOwnerProductsTable();
}

// حذف المنتج
async function deleteProduct(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    if (confirm(`هل أنت متأكد من رغبتك في حذف المنتج "${product.title}" نهائياً من السحابة؟`)) {
        PRODUCTS = PRODUCTS.filter(p => p.id !== productId);
        showToast(`تم حذف "${product.title}" بنجاح.`);
        
        await saveCloudData(PRODUCTS, dbOwners);
        
        // إذا كان معروضاً حالياً في صفحة التفاصيل، نعود لصفحة المنتجات
        if (selectedProduct && selectedProduct.id === productId) {
            navigateTo("products");
        } else {
            renderProducts(currentFilter || "all");
            if (currentUser && currentUser.role === 'owner') {
                renderOwnerProductsTable();
            }
        }
    }
}

// تغيير كلمة مرور المسؤول الحالي
async function handleOwnerChangePassword(event) {
    event.preventDefault();
    const newPassInput = document.getElementById("owner-new-pass");
    const newPassword = newPassInput.value.trim();
    
    if (!currentUser || currentUser.role !== 'owner') return;
    
    // البحث عن الحساب الحالي في السلسلة السحابية وتعديله
    const ownerIdx = dbOwners.findIndex(o => o.phone === currentUser.phone);
    if (ownerIdx > -1) {
        dbOwners[ownerIdx].password = newPassword;
        const success = await saveCloudData(PRODUCTS, dbOwners);
        if (success) {
            showToast("تم تحديث كلمة المرور الخاصة بك بنجاح.");
            newPassInput.value = "";
        }
    }
}

// إضافة مسؤول جديد بالكامل
async function handleAddNewOwner(event) {
    event.preventDefault();
    const phoneInput = document.getElementById("new-owner-phone");
    const passInput = document.getElementById("new-owner-pass");
    
    const newPhone = phoneInput.value.trim().replace(/\s+/g, '');
    const newPassword = passInput.value.trim();
    
    if (!newPhone || !newPassword) {
        showToast("يرجى إدخال جميع الحقول المطلوبة.");
        return;
    }
    
    // التحقق من عدم وجوده مسبقاً
    const exists = dbOwners.some(o => o.phone === newPhone);
    if (exists) {
        showToast("خطأ: هذا الرقم مسجل بالفعل كمسؤول في المتجر.");
        return;
    }
    
    dbOwners.push({
        phone: newPhone,
        password: newPassword
    });
    
    const success = await saveCloudData(PRODUCTS, dbOwners);
    if (success) {
        showToast(`تم تسجيل المسؤول الجديد (${newPhone}) بنجاح.`);
        phoneInput.value = "";
        passInput.value = "";
    }
}

/* -------------------------------------------------------------
   إدارة وتطبيق الوضع الداكن (Dark Mode Management)
   ------------------------------------------------------------- */
function initDarkMode() {
    const savedTheme = localStorage.getItem("eelaf_theme");
    const icon = document.getElementById("theme-toggle-icon");
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        isDarkMode = true;
        if (icon) {
            icon.setAttribute("data-lucide", "sun");
        }
    } else {
        document.body.classList.remove("dark-mode");
        isDarkMode = false;
        if (icon) {
            icon.setAttribute("data-lucide", "moon");
        }
    }
    lucide.createIcons();
}

function toggleDarkMode() {
    const icon = document.getElementById("theme-toggle-icon");
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("eelaf_theme", "dark");
        showToast("تم تفعيل الوضع الداكن 🌙");
        if (icon) {
            icon.setAttribute("data-lucide", "sun");
        }
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("eelaf_theme", "light");
        showToast("تم تفعيل الوضع المضيء ☀️");
        if (icon) {
            icon.setAttribute("data-lucide", "moon");
        }
    }
    lucide.createIcons();
}

/* -------------------------------------------------------------
   مساعدات حالة الطلب والإرجاع (Orders Approval & Returns Helpers)
   ------------------------------------------------------------- */

// الحصول على نص حالة الطلب بالعربية
function getStatusText(status) {
    switch (status) {
        case 'pending': return 'بانتظار موافقة المشرف ⏳';
        case 'approved': return 'تم القبول والشحن 🚚';
        case 'rejected': return 'تم رفض الطلب ❌';
        case 'return_pending': return 'طلب إرجاع معلق ⏳';
        case 'returned': return 'تم إرجاع الطلب بنجاح ✅';
        case 'return_rejected': return 'تم رفض طلب الإرجاع ❌';
        default: return 'بانتظار تأكيد الدفع';
    }
}

// طلب إرجاع المنتجات من قبل العميل
async function handleReturnRequestClick() {
    if (!currentOrder) return;
    
    if (confirm(`هل أنت متأكد من رغبتك في تقديم طلب إرجاع للطلب #${currentOrder.orderId}؟`)) {
        currentOrder.status = 'return_pending';
        
        const idx = dbOrdersList.findIndex(o => o.orderId === currentOrder.orderId);
        if (idx > -1) {
            dbOrdersList[idx].status = 'return_pending';
            await saveCloudData(PRODUCTS, dbOwners, dbOrdersList);
            renderInvoice(currentOrder);
            showToast("تم إرسال طلب إرجاع المنتجات للمشرف بنجاح. ⏳");
        }
    }
}

// قبول أو رفض الطلبات (إجراءات المشرف)
async function approveOrder(orderId) {
    const idx = dbOrdersList.findIndex(o => o.orderId === orderId);
    if (idx > -1) {
        dbOrdersList[idx].status = 'approved';
        await saveCloudData(PRODUCTS, dbOwners, dbOrdersList);
        renderOwnerOrdersTable();
        updateOwnerNotificationCount();
        showToast(`تم قبول وشحن الطلب #${orderId} بنجاح! 🚚`);
    }
}

async function rejectOrder(orderId) {
    if (confirm(`هل أنت متأكد من رفض الطلب #${orderId}؟`)) {
        const idx = dbOrdersList.findIndex(o => o.orderId === orderId);
        if (idx > -1) {
            dbOrdersList[idx].status = 'rejected';
            await saveCloudData(PRODUCTS, dbOwners, dbOrdersList);
            renderOwnerOrdersTable();
            updateOwnerNotificationCount();
            showToast(`تم رفض الطلب #${orderId}.`);
        }
    }
}

// قبول أو رفض الإرجاع (إجراءات المشرف)
async function approveReturn(orderId) {
    const idx = dbOrdersList.findIndex(o => o.orderId === orderId);
    if (idx > -1) {
        dbOrdersList[idx].status = 'returned';
        await saveCloudData(PRODUCTS, dbOwners, dbOrdersList);
        renderOwnerOrdersTable();
        updateOwnerNotificationCount();
        showToast(`تم قبول إرجاع منتجات الطلب #${orderId} وإرجاع المبلغ. ✅`);
    }
}

async function rejectReturn(orderId) {
    if (confirm(`هل أنت متأكد من رفض طلب إرجاع الطلب #${orderId}؟`)) {
        const idx = dbOrdersList.findIndex(o => o.orderId === orderId);
        if (idx > -1) {
            dbOrdersList[idx].status = 'return_rejected';
            await saveCloudData(PRODUCTS, dbOwners, dbOrdersList);
            renderOwnerOrdersTable();
            updateOwnerNotificationCount();
            showToast(`تم رفض طلب إرجاع الطلب #${orderId}.`);
        }
    }
}

// رندرة جدول الطلبات للمسؤول
function renderOwnerOrdersTable() {
    const tbody = document.getElementById("owner-orders-tbody");
    const statusText = document.getElementById("owner-orders-status-text");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    if (dbOrdersList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">لا يوجد أي طلبات مسجلة حالياً.</td></tr>`;
        if (statusText) statusText.innerHTML = `<i data-lucide="info"></i> لا يوجد طلبات`;
        lucide.createIcons();
        return;
    }
    
    // ترتيب الطلبات بحيث تظهر الأحدث في البداية
    const sortedOrders = [...dbOrdersList].reverse();
    
    sortedOrders.forEach(order => {
        const tr = document.createElement("tr");
        
        // تجهيز المنتجات المطلوبة كنص
        let itemsHTML = "";
        order.items.forEach(item => {
            itemsHTML += `<div style="font-size:0.85rem; margin-bottom:4px;">• ${item.product.title} <span class="text-muted">(x${item.quantity})</span></div>`;
        });
        
        // تجهيز أزرار الإجراءات بناءً على حالة الطلب
        let actionButtons = "";
        if (order.status === 'pending') {
            actionButtons = `
                <button class="btn btn-action-edit" onclick="approveOrder('${order.orderId}')" style="background-color:rgba(23, 76, 52, 0.1); color:var(--primary-color); border-color:rgba(23, 76, 52, 0.2);">
                    <i data-lucide="check" style="width:14px;height:14px;"></i> قبول وشحن
                </button>
                <button class="btn btn-action-delete" onclick="rejectOrder('${order.orderId}')">
                    <i data-lucide="x" style="width:14px;height:14px;"></i> رفض الطلب
                </button>
            `;
        } else if (order.status === 'return_pending') {
            actionButtons = `
                <button class="btn btn-action-edit" onclick="approveReturn('${order.orderId}')" style="background-color:rgba(37, 99, 235, 0.1); color:#2563eb; border-color:rgba(37, 99, 235, 0.2);">
                    <i data-lucide="refresh-cw" style="width:14px;height:14px;"></i> قبول الإرجاع
                </button>
                <button class="btn btn-action-delete" onclick="rejectReturn('${order.orderId}')">
                    <i data-lucide="x" style="width:14px;height:14px;"></i> رفض الإرجاع
                </button>
            `;
        } else {
            actionButtons = `<span class="text-muted" style="font-size:0.85rem;"><i data-lucide="check-square" style="width:14px;height:14px;vertical-align:middle;"></i> مكتمل</span>`;
        }
        
        tr.innerHTML = `
            <td><strong>#${order.orderId}</strong></td>
            <td style="font-size:0.85rem;">${order.date}</td>
            <td>
                <strong>${order.customerName}</strong>
                <div style="font-size:0.8rem; color:#6b7280; margin-top:2px;">هاتف: ${order.customerPhone}</div>
            </td>
            <td>
                <div>${order.city}</div>
                <div style="font-size:0.8rem; color:#6b7280; margin-top:2px;">العنوان: ${order.address}</div>
                ${order.notes ? `<div style="font-size:0.75rem; color:#d97706; margin-top:2px;">ملاحظة: ${order.notes}</div>` : ''}
            </td>
            <td>${itemsHTML}</td>
            <td><strong>${order.total.toFixed(2)} ج.م.</strong></td>
            <td><span class="invoice-status-badge ${order.status}">${getStatusText(order.status)}</span></td>
            <td><div class="actions-cell" style="flex-direction:column; gap:6px;">${actionButtons}</div></td>
        `;
        tbody.appendChild(tr);
    });
    
    if (statusText) {
        const pendingCount = dbOrdersList.filter(o => o.status === 'pending' || o.status === 'return_pending').length;
        statusText.innerHTML = `<i data-lucide="info"></i> إجمالي الطلبات: ${dbOrdersList.length} | معلق: ${pendingCount}`;
    }
    
    lucide.createIcons();
}

// تحديث شارة التنبيهات الحمراء للطلب لدى المسؤول
function updateOwnerNotificationCount() {
    const badge = document.getElementById("owner-orders-badge");
    if (!badge) return;
    
    const pendingCount = dbOrdersList.filter(o => o.status === 'pending' || o.status === 'return_pending').length;
    if (pendingCount > 0) {
        badge.textContent = pendingCount;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

/* -------------------------------------------------------------
   منطق المسؤول وإدارة قاعدة البيانات السحابية (Owner & Cloud DB Logic)
   ------------------------------------------------------------- */

// تهيئة الاتصال وحلب البيانات سحابياً
async function initCloudDatabase() {
    updateDbStatusBadge(true, "جاري الاتصال...");
    try {
        const response = await fetch(DB_BIN_URL);
        if (response.ok) {
            const data = await response.json();
            if (data && data.products && data.owners) {
                PRODUCTS = data.products;
                dbOwners = data.owners;
                updateDbStatusBadge(true, "متصل بالسحابة");
            } else {
                // تهيئة الحاوية السحابية الفارغة بالبيانات الافتراضية
                await saveCloudData(PRODUCTS, dbOwners);
                updateDbStatusBadge(true, "تم تهيئة السحابة");
            }
        } else {
            throw new Error("فشل في الحصول على بيانات صحيحة");
        }
    } catch (error) {
        console.error("خطأ في الاتصال بقاعدة البيانات السحابية:", error);
        updateDbStatusBadge(false, "يعمل محلياً (أوفلاين)");
        showToast("فشل الاتصال بالسحابة، يعرض المتجر البيانات المحلية المؤقتة.");
    }
    
    // رندرة المنتجات
    renderProducts(currentFilter || "all");
    if (currentUser && currentUser.role === 'owner') {
        renderOwnerProductsTable();
    }
}

// حفظ التغييرات سحابياً
async function saveCloudData(productsList, ownersList) {
    try {
        const response = await fetch(DB_BIN_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                products: productsList,
                owners: ownersList
            })
        });
        if (!response.ok) {
            throw new Error("فشل التحديث السحابي");
        }
        updateDbStatusBadge(true, "تم الحفظ سحابياً");
        return true;
    } catch (error) {
        console.error("خطأ أثناء المزامنة السحابية الصادرة:", error);
        updateDbStatusBadge(false, "خطأ في الحفظ");
        showToast("خطأ: لم يتم حفظ التعديلات سحابياً، يرجى التحقق من اتصالك.");
        return false;
    }
}

// المزامنة الدورية (Polling) كل 15 ثانية لجلب التعديلات من الأجهزة الأخرى
function startCloudSync() {
    setInterval(async () => {
        try {
            const response = await fetch(DB_BIN_URL);
            if (response.ok) {
                const data = await response.json();
                if (data && data.products && data.owners) {
                    const productsChanged = JSON.stringify(PRODUCTS) !== JSON.stringify(data.products);
                    const ownersChanged = JSON.stringify(dbOwners) !== JSON.stringify(data.owners);
                    
                    if (productsChanged || ownersChanged) {
                        PRODUCTS = data.products;
                        dbOwners = data.owners;
                        
                        // إعادة رندرة الأقسام
                        renderProducts(currentFilter || "all");
                        if (currentView === "product-detail" && selectedProduct) {
                            const updatedProduct = PRODUCTS.find(p => p.id === selectedProduct.id);
                            if (updatedProduct) {
                                selectedProduct = updatedProduct;
                                renderProductDetail(selectedProduct.id);
                            } else {
                                showToast("تنبيه: تم حذف هذا المنتج من قبل مسؤول آخر.");
                                navigateTo("products");
                            }
                        }
                        if (currentUser && currentUser.role === 'owner') {
                            renderOwnerProductsTable();
                        }
                        console.log("تمت مزامنة البيانات سحابياً تلقائياً.");
                    }
                    updateDbStatusBadge(true, "متصل بالسحابة");
                }
            }
        } catch (e) {
            console.warn("تعذر المزامنة التلقائية حالياً:", e);
            updateDbStatusBadge(false, "أوفلاين");
        }
    }, 15000);
}

// التحقق من كلمة مرور المسؤول وإتمام تسجيل الدخول
function handleVerifyOwnerPassword(event) {
    event.preventDefault();
    const passwordInput = document.getElementById("auth-password");
    const enteredPassword = passwordInput.value.trim();
    
    // البحث عن حساب المسؤول
    const matchedOwner = dbOwners.find(owner => owner.phone === tempOwnerPhone);
    
    if (matchedOwner && matchedOwner.password === enteredPassword) {
        currentUser = { phone: matchedOwner.phone, role: 'owner' };
        
        saveSession();
        updateUserButtonState(true);
        closeAuthModal();
        showToast("أهلاً بك! تم تسجيل الدخول كمسؤول بنجاح.");
        
        // مسح الحقل وإعادة التوجيه للوحة التحكم
        passwordInput.value = "";
        navigateTo("owner-panel");
    } else {
        showToast("كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.");
    }
}

// تبديل تبويبات لوحة التحكم
function switchOwnerTab(tabId) {
    // إخفاء كل التبويبات
    document.querySelectorAll(".owner-tab-content").forEach(c => c.classList.add("hidden"));
    document.querySelectorAll(".owner-tabs .tab-btn").forEach(b => b.classList.remove("active"));
    
    // إظهار التبويب المحدد وتفعيله
    if (tabId === 'products-mgmt') {
        document.getElementById("owner-products-mgmt").classList.remove("hidden");
        document.getElementById("tab-btn-products").classList.add("active");
        renderOwnerProductsTable();
    } else if (tabId === 'settings-mgmt') {
        document.getElementById("owner-settings-mgmt").classList.remove("hidden");
        document.getElementById("tab-btn-settings").classList.add("active");
    }
}

// رندرة جدول المنتجات للمسؤول
function renderOwnerProductsTable() {
    const tbody = document.getElementById("owner-products-tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    PRODUCTS.forEach(product => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${product.image}" alt="${product.title}" onerror="this.src='logo.png'"></td>
            <td><strong>${product.title}</strong></td>
            <td><span class="product-category">${getCategoryName(product.category)}</span></td>
            <td><strong>${product.price.toFixed(2)} ج.م.</strong></td>
            <td>
                <div class="actions-cell">
                    <button class="btn-action-edit" onclick="openProductModal('edit', ${product.id})">
                        <i data-lucide="edit-2" style="width:14px;height:14px;"></i> تعديل
                    </button>
                    <button class="btn-action-delete" onclick="deleteProduct(${product.id})">
                        <i data-lucide="trash-2" style="width:14px;height:14px;"></i> حذف
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
}

// فتح نافذة تعديل/إضافة المنتج
function openProductModal(mode, productId = null) {
    const modal = document.getElementById("product-modal");
    const title = document.getElementById("product-modal-title");
    const form = document.getElementById("product-form");
    
    form.reset();
    document.getElementById("edit-product-id").value = "";
    
    if (mode === "add") {
        title.textContent = "إضافة منتج جديد سحابياً";
    } else if (mode === "edit" && productId) {
        title.textContent = "تعديل بيانات المنتج";
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            document.getElementById("edit-product-id").value = product.id;
            document.getElementById("prod-title").value = product.title;
            document.getElementById("prod-price").value = product.price;
            document.getElementById("prod-category").value = product.category;
            document.getElementById("prod-badge").value = product.badge || "";
            document.getElementById("prod-desc").value = product.desc;
            document.getElementById("prod-image").value = product.image;
            document.getElementById("prod-images").value = (product.images || []).join(", ");
            document.getElementById("prod-benefits").value = (product.benefits || []).join("\n");
            document.getElementById("prod-usage").value = product.usage || "";
        }
    }
    
    modal.classList.remove("hidden");
    lucide.createIcons();
}

function closeProductModal() {
    document.getElementById("product-modal").classList.add("hidden");
}

function closeProductModalOnOverlay(event) {
    closeProductModal();
}

// حفظ أو إضافة المنتج
async function handleSaveProduct(event) {
    event.preventDefault();
    
    const idVal = document.getElementById("edit-product-id").value;
    const title = document.getElementById("prod-title").value.trim();
    const price = parseFloat(document.getElementById("prod-price").value);
    const category = document.getElementById("prod-category").value;
    const badge = document.getElementById("prod-badge").value.trim();
    const desc = document.getElementById("prod-desc").value.trim();
    const image = document.getElementById("prod-image").value.trim();
    
    // معالجة معرض الصور الإضافية
    const imagesVal = document.getElementById("prod-images").value.trim();
    let images = [image]; // الصورة الرئيسية دائماً الأولى
    if (imagesVal) {
        const extraImages = imagesVal.split(",").map(img => img.trim()).filter(img => img.length > 0);
        images = images.concat(extraImages);
    } else {
        images.push("logo.png"); // صورة احتياطية
    }
    
    // معالجة الفوائد
    const benefitsVal = document.getElementById("prod-benefits").value.trim();
    const benefits = benefitsVal.split("\n").map(b => b.trim()).filter(b => b.length > 0);
    
    const usage = document.getElementById("prod-usage").value.trim();
    
    if (idVal) {
        // وضع التعديل (Edit)
        const productId = parseInt(idVal);
        const idx = PRODUCTS.findIndex(p => p.id === productId);
        if (idx > -1) {
            PRODUCTS[idx] = {
                id: productId,
                title,
                price,
                category,
                badge: badge || undefined,
                desc,
                image,
                images,
                benefits,
                usage
            };
            showToast("تم تعديل المنتج بنجاح.");
        }
    } else {
        // وضع الإضافة (Add)
        // توليد معرف فريد جديد
        const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;
        const newProduct = {
            id: newId,
            title,
            price,
            category,
            badge: badge || undefined,
            desc,
            image,
            images,
            benefits,
            usage
        };
        PRODUCTS.push(newProduct);
        showToast("تم إضافة المنتج الجديد بنجاح.");
    }
    
    // حفظ التغييرات سحابياً وإعادة رندرة المعرض
    await saveCloudData(PRODUCTS, dbOwners);
    closeProductModal();
    renderProducts(currentFilter || "all");
    renderOwnerProductsTable();
}

// حذف المنتج
async function deleteProduct(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    if (confirm(`هل أنت متأكد من رغبتك في حذف المنتج "${product.title}" نهائياً من السحابة؟`)) {
        PRODUCTS = PRODUCTS.filter(p => p.id !== productId);
        showToast(`تم حذف "${product.title}" بنجاح.`);
        
        await saveCloudData(PRODUCTS, dbOwners);
        
        // إذا كان معروضاً حالياً في صفحة التفاصيل، نعود لصفحة المنتجات
        if (selectedProduct && selectedProduct.id === productId) {
            navigateTo("products");
        } else {
            renderProducts(currentFilter || "all");
            if (currentUser && currentUser.role === 'owner') {
                renderOwnerProductsTable();
            }
        }
    }
}

// تغيير كلمة مرور المسؤول الحالي
async function handleOwnerChangePassword(event) {
    event.preventDefault();
    const newPassInput = document.getElementById("owner-new-pass");
    const newPassword = newPassInput.value.trim();
    
    if (!currentUser || currentUser.role !== 'owner') return;
    
    // البحث عن الحساب الحالي في السلسلة السحابية وتعديله
    const ownerIdx = dbOwners.findIndex(o => o.phone === currentUser.phone);
    if (ownerIdx > -1) {
        dbOwners[ownerIdx].password = newPassword;
        const success = await saveCloudData(PRODUCTS, dbOwners);
        if (success) {
            showToast("تم تحديث كلمة المرور الخاصة بك بنجاح.");
            newPassInput.value = "";
        }
    }
}

// إضافة مسؤول جديد بالكامل
async function handleAddNewOwner(event) {
    event.preventDefault();
    const phoneInput = document.getElementById("new-owner-phone");
    const passInput = document.getElementById("new-owner-pass");
    
    const newPhone = phoneInput.value.trim().replace(/\s+/g, '');
    const newPassword = passInput.value.trim();
    
    if (!newPhone || !newPassword) {
        showToast("يرجى إدخال جميع الحقول المطلوبة.");
        return;
    }
    
    // التحقق من عدم وجوده مسبقاً
    const exists = dbOwners.some(o => o.phone === newPhone);
    if (exists) {
        showToast("خطأ: هذا الرقم مسجل بالفعل كمسؤول في المتجر.");
        return;
    }
    
    dbOwners.push({
        phone: newPhone,
        password: newPassword
    });
    
    const success = await saveCloudData(PRODUCTS, dbOwners);
    if (success) {
        showToast(`تم تسجيل المسؤول الجديد (${newPhone}) بنجاح.`);
        phoneInput.value = "";
        passInput.value = "";
    }
}
