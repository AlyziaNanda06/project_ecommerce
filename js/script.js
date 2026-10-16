
"use strict";

// ==========================================
// SEMBAKOKU - DATA PRODUK
// ==========================================

const products = [
  // 1. Bahan Pokok Utama
  { id: 1, name: "Beras Setra Ramos 5 kg", category: "Bahan Pokok Utama", brand: "Setra Ramos", price: 75000, stock: 20, emoji: "🌾", description: "Beras pulen untuk kebutuhan sehari-hari." },
  { id: 2, name: "Minyak Goreng 1 Liter", category: "Bahan Pokok Utama", brand: "Minyak Kita", price: 18000, stock: 30, emoji: "🫗", description: "Minyak goreng kemasan pouch 1 liter." },
  { id: 3, name: "Gula Pasir 1 kg", category: "Bahan Pokok Utama", brand: "Gula Pilihan", price: 17500, stock: 25, emoji: "🍚", description: "Gula pasir untuk minuman dan masakan." },
  { id: 4, name: "Tepung Terigu 1 kg", category: "Bahan Pokok Utama", brand: "Segitiga Biru", price: 14000, stock: 18, emoji: "🌾", description: "Tepung terigu serbaguna." },
  { id: 5, name: "Telur Ayam 1 kg", category: "Bahan Pokok Utama", brand: "Telur Segar", price: 30000, stock: 15, emoji: "🥚", description: "Telur ayam untuk kebutuhan dapur." },

  // 2. Bahan Masakan & Bumbu Dapur
  { id: 6, name: "Kecap Manis 135 ml", category: "Bahan Masakan & Bumbu Dapur", brand: "Bango", price: 8500, stock: 20, emoji: "🍶", description: "Kecap manis untuk melengkapi masakan." },
  { id: 7, name: "Saus Sambal Botol", category: "Bahan Masakan & Bumbu Dapur", brand: "Saus Pilihan", price: 9000, stock: 16, emoji: "🌶️", description: "Saus sambal untuk teman makan." },
  { id: 8, name: "Penyedap Rasa Ayam", category: "Bahan Masakan & Bumbu Dapur", brand: "Royco", price: 1000, stock: 50, emoji: "🧂", description: "Penyedap rasa ayam kemasan sachet." },
  { id: 9, name: "Margarin 200 g", category: "Bahan Masakan & Bumbu Dapur", brand: "Blue Band", price: 7500, stock: 20, emoji: "🧈", description: "Margarin untuk memasak dan membuat kue." },
  { id: 10, name: "Bumbu Nasi Goreng", category: "Bahan Masakan & Bumbu Dapur", brand: "Bumbu Praktis", price: 2500, stock: 35, emoji: "🍳", description: "Bumbu instan praktis." },

  // 3. Makanan Cepat Saji & Instan
  { id: 11, name: "Mi Instan Goreng", category: "Makanan Cepat Saji & Instan", brand: "Indomie", price: 3500, stock: 60, emoji: "🍜", description: "Mi instan rasa goreng." },
  { id: 12, name: "Mi Instan Ayam Bawang", category: "Makanan Cepat Saji & Instan", brand: "Indomie", price: 3500, stock: 50, emoji: "🍜", description: "Mi instan kuah rasa ayam bawang." },
  { id: 13, name: "Mi Instan Rasa Soto", category: "Makanan Cepat Saji & Instan", brand: "Mi Pilihan", price: 3500, stock: 40, emoji: "🍜", description: "Mi instan kuah rasa soto." },
  { id: 14, name: "Sarden Kaleng 155 g", category: "Makanan Cepat Saji & Instan", brand: "Sarden Pilihan", price: 12000, stock: 14, emoji: "🥫", description: "Sarden kaleng saus tomat." },
  { id: 15, name: "Kornet Sapi Kaleng", category: "Makanan Cepat Saji & Instan", brand: "Kornet Pilihan", price: 16000, stock: 12, emoji: "🥫", description: "Kornet sapi untuk pelengkap masakan." },

  // 4. Minuman & Bahan Minuman
  { id: 16, name: "Kopi Hitam Sachet", category: "Minuman & Bahan Minuman", brand: "Kopi Pilihan", price: 1500, stock: 50, emoji: "☕", description: "Kopi hitam kemasan sachet." },
  { id: 17, name: "Teh Celup 25 Kantong", category: "Minuman & Bahan Minuman", brand: "Teh Pilihan", price: 9000, stock: 20, emoji: "🫖", description: "Teh celup untuk diseduh." },
  { id: 18, name: "Susu UHT 1 Liter", category: "Minuman & Bahan Minuman", brand: "Susu Pilihan", price: 19000, stock: 15, emoji: "🥛", description: "Susu UHT kemasan 1 liter." },
  { id: 19, name: "Sirup 460 ml", category: "Minuman & Bahan Minuman", brand: "Marjan", price: 18000, stock: 12, emoji: "🧃", description: "Sirup untuk campuran minuman." },
  { id: 20, name: "Air Mineral 600 ml", category: "Minuman & Bahan Minuman", brand: "Air Mineral", price: 3500, stock: 48, emoji: "💧", description: "Air mineral kemasan botol." },

  // 5. Jajanan & Makanan Ringan
  { id: 21, name: "Biskuit Cokelat", category: "Jajanan & Makanan Ringan", brand: "Biskuit Pilihan", price: 8000, stock: 20, emoji: "🍪", description: "Biskuit rasa cokelat." },
  { id: 22, name: "Wafer Cokelat", category: "Jajanan & Makanan Ringan", brand: "Wafer Pilihan", price: 7000, stock: 18, emoji: "🍫", description: "Wafer renyah lapisan cokelat." },
  { id: 23, name: "Keripik Kentang", category: "Jajanan & Makanan Ringan", brand: "Snack Pilihan", price: 9000, stock: 16, emoji: "🥔", description: "Keripik kentang untuk camilan." },
  { id: 24, name: "Kerupuk Mentah 250 g", category: "Jajanan & Makanan Ringan", brand: "Kerupuk Pilihan", price: 10000, stock: 15, emoji: "🥠", description: "Kerupuk mentah untuk digoreng." },
  { id: 25, name: "Snack Jagung", category: "Jajanan & Makanan Ringan", brand: "Snack Jagung", price: 2000, stock: 40, emoji: "🍿", description: "Snack jagung untuk camilan." },

  // 6. Kebutuhan Rumah Tangga & Kebersihan
  { id: 26, name: "Deterjen Bubuk 800 g", category: "Kebutuhan Rumah Tangga & Kebersihan", brand: "Deterjen Pilihan", price: 18000, stock: 15, emoji: "🧺", description: "Deterjen bubuk untuk mencuci pakaian." },
  { id: 27, name: "Sabun Mandi Batang", category: "Kebutuhan Rumah Tangga & Kebersihan", brand: "Sabun Pilihan", price: 4000, stock: 30, emoji: "🧼", description: "Sabun mandi untuk sehari-hari." },
  { id: 28, name: "Sabun Cuci Piring 700 ml", category: "Kebutuhan Rumah Tangga & Kebersihan", brand: "Sabun Cuci", price: 14000, stock: 15, emoji: "🧽", description: "Sabun cair untuk mencuci peralatan makan." },
  { id: 29, name: "Pasta Gigi 120 g", category: "Kebutuhan Rumah Tangga & Kebersihan", brand: "Pasta Gigi", price: 12000, stock: 18, emoji: "🪥", description: "Pasta gigi untuk perawatan gigi." },
  { id: 30, name: "Tisu Wajah", category: "Kebutuhan Rumah Tangga & Kebersihan", brand: "Tisu Pilihan", price: 9000, stock: 20, emoji: "🧻", description: "Tisu wajah untuk rumah tangga." },

  // 7. Kebersihan Diri & Perlengkapan Bayi
  { id: 31, name: "Pembalut Wanita 8 pcs", category: "Kebersihan Diri & Perlengkapan Bayi", brand: "Pembalut Pilihan", price: 10000, stock: 20, emoji: "🛍️", description: "Pembalut kemasan." },
  { id: 32, name: "Popok Bayi Ukuran S", category: "Kebersihan Diri & Perlengkapan Bayi", brand: "Popok Pilihan", price: 22000, stock: 12, emoji: "👶", description: "Popok bayi sekali pakai ukuran S." },
  { id: 33, name: "Popok Bayi Ukuran M", category: "Kebersihan Diri & Perlengkapan Bayi", brand: "Popok Pilihan", price: 24000, stock: 12, emoji: "👶", description: "Popok bayi sekali pakai ukuran M." },
  { id: 34, name: "Shampoo Sachet", category: "Kebersihan Diri & Perlengkapan Bayi", brand: "Shampoo Pilihan", price: 1000, stock: 50, emoji: "🧴", description: "Shampoo sachet untuk sehari-hari." },
  { id: 35, name: "Sikat Gigi", category: "Kebersihan Diri & Perlengkapan Bayi", brand: "Sikat Gigi", price: 6000, stock: 15, emoji: "🪥", description: "Sikat gigi untuk perawatan mulut." }
];

// ==========================================
// STATE
// ==========================================

let cart = JSON.parse(localStorage.getItem("segarBersahabatCart")) || [];
let activeCategory = "Semua";
let currentSearch = "";
let noticeTimer;

// ==========================================
// FORMAT HARGA DAN UTILITAS
// ==========================================

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
function openProductDetail(productId) {
}
  window.location.href = `detail-produk.html?id=${productId}`;
}

function showMessage(message) {
  const notice = document.getElementById("siteNotice");
  if (!notice) {
    window.alert(message);
    return;
  }

  notice.textContent = message;
  notice.classList.add("show");

  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    notice.classList.remove("show");
  }, 2500);
}

// ==========================================
// FILTER, CARI, DAN URUTKAN
// ==========================================


function getFilteredProducts() {
  const query = currentSearch.trim().toLocaleLowerCase("id-ID");

  const minValue = document.getElementById("minPrice")?.value;
  const maxValue = document.getElementById("maxPrice")?.value;

  const minPrice = minValue ? Number(minValue) : 0;
  const maxPrice = maxValue ? Number(maxValue) : Infinity;

  let filtered = products.filter(product => {
    const matchCategory =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    const searchText = [
      product.name,
      product.category,
      product.brand,
      product.description
    ].join(" ").toLocaleLowerCase("id-ID");

    const matchSearch = searchText.includes(query);
    const matchPrice =
      product.price >= minPrice &&
      product.price <= maxPrice;

    return matchCategory && matchSearch && matchPrice;
  });

  const sort =
    document.getElementById("sortProducts")?.value || "default";

  if (sort === "cheap") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "expensive") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "id"));
  }

  return filtered;
}

function renderProducts() {
  const container = document.getElementById("productList");
  const resultInfo = document.getElementById("resultInfo");

  if (!container) return;

  const filtered = getFilteredProducts();

  if (resultInfo) {
    resultInfo.textContent = `${filtered.length} produk ditemukan`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>🔎 Produk tidak ditemukan.</p>
        <button class="btn" onclick="resetFilters()">
          Tampilkan Semua Produk
        </button>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <span>${product.emoji}</span>
      </div>

      <div class="product-info">
        <p class="product-category">
          ${escapeHTML(product.category)}
        </p>

        <h3>
  <a class="product-title-link"
     href="detail-produk.html?id=${product.id}">
    ${escapeHTML(product.name)}
  </a>
</h3>

        <p class="product-description">
          ${escapeHTML(product.description)}
        </p>

        <p class="product-stock">
          ${product.stock > 0
            ? `Stok tersedia: ${product.stock}`
            : "Stok habis"}
        </p>

        <div class="product-bottom">
          <strong class="product-price">
            ${formatRupiah(product.price)}
          </strong>

          <button class="btn-add"
            onclick="addToCart(${product.id})"
            ${product.stock <= 0 ? "disabled" : ""}>
            ${product.stock > 0 ? "+ Keranjang" : "Habis"}
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function searchProduct() {
  const input = document.getElementById("searchInput");
  currentSearch = input ? input.value : "";
  renderProducts();

  document.getElementById("produk")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function filterCategory(category) {
  activeCategory = category;
  currentSearch = "";

  const input = document.getElementById("searchInput");
  if (input) input.value = "";

  document.querySelectorAll(".category-card").forEach(button => {
    const isActive = button.getAttribute("onclick")
      ?.includes(`'${category}'`);
    button.classList.toggle("active", Boolean(isActive));
  });

  renderProducts();

  document.getElementById("produk")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function resetFilters() {
  activeCategory = "Semua";
  currentSearch = "";

  const input = document.getElementById("searchInput");
  if (input) input.value = "";

  filterCategory("Semua");
}


function applySidebarFilters() {
  const sidebarSearch = document.getElementById("categorySearch");
  const navbarSearch = document.getElementById("searchInput");

  currentSearch = sidebarSearch ? sidebarSearch.value : "";

  if (navbarSearch) {
    navbarSearch.value = currentSearch;
  }

  const minPrice = Number(
    document.getElementById("minPrice")?.value || 0
  );

  const maxInput = document.getElementById("maxPrice")?.value;
  const maxPrice = maxInput ? Number(maxInput) : Infinity;

  if (minPrice < 0 || maxPrice < 0 || minPrice > maxPrice) {
    showMessage("Periksa kembali rentang harga.");
    return;
  }

  renderProducts();
}

function clearSidebarFilters() {
  activeCategory = "Semua";
  currentSearch = "";

  [
    "categorySearch",
    "searchInput",
    "minPrice",
    "maxPrice"
  ].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.value = "";
  });

  renderProducts();
}


// ==========================================
// KERANJANG BELANJA
// ==========================================

function addToCart(productId) {
  const product = getProduct(productId);

  if (!product) {
    showMessage("Produk tidak ditemukan.");
    return;
  }

  const item = cart.find(entry => entry.id === product.id);
  const quantity = item ? item.quantity : 0;

  if (quantity >= product.stock) {
    showMessage("Jumlah sudah mencapai batas stok.");
    return;
  }

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  renderCart();
  showMessage(`${product.name} ditambahkan ke keranjang.`);
}

function changeCartQuantity(productId, change) {
  const item = cart.find(entry => entry.id === Number(productId));
  const product = getProduct(productId);

  if (!item || !product) return;

  const newQuantity = item.quantity + Number(change);

  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (newQuantity > product.stock) {
    showMessage("Jumlah melebihi stok yang tersedia.");
    return;
  }

  item.quantity = newQuantity;
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== Number(productId));
  renderCart();
  showMessage("Produk dihapus dari keranjang.");
}

function renderCart() {
  localStorage.setItem("segarBersahabatCart", JSON.stringify(cart));
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");
  const summaryCount = document.getElementById("summaryCount");

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const totalPrice = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  if (cartCount) cartCount.textContent = totalQuantity;
  if (cartTotal) cartTotal.textContent = formatRupiah(totalPrice);

  if (summaryCount) {
    summaryCount.textContent = `${totalQuantity} barang`;
  }

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">Keranjang masih kosong.</p>
    `;
    return;
  }

  cartItems.innerHTML = `
    <div class="cart-list">
      ${cart.map(item => {
        const product = getProduct(item.id);
        if (!product) return "";

        return `
          <div class="cart-item">
            <div class="cart-item-info">
              <strong>${escapeHTML(product.name)}</strong>
              <span>
                ${formatRupiah(product.price)} × ${item.quantity}
              </span>
              <strong>
                ${formatRupiah(product.price * item.quantity)}
              </strong>
            </div>

            <div class="cart-item-actions">
              <button type="button"
                aria-label="Kurangi jumlah"
                onclick="changeCartQuantity(${product.id}, -1)">
                −
              </button>

              <span>${item.quantity}</span>

              <button type="button"
                aria-label="Tambah jumlah"
                onclick="changeCartQuantity(${product.id}, 1)">
                +
              </button>

              <button type="button" class="remove-item"
                onclick="removeFromCart(${product.id})">
                Hapus
              </button>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function showCart() {
  const section = document.getElementById("keranjang");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// ==========================================
// CHECKOUT SIMULASI
// ==========================================

function checkout() {
  if (cart.length === 0) {
    showMessage("Keranjang masih kosong. Tambahkan produk dulu.");
    return;
  }

  const summary = cart.map(item => {
    const product = getProduct(item.id);

    return product
      ? `- ${product.name} (${item.quantity} × ${formatRupiah(product.price)})`
      : "";
  }).filter(Boolean).join("\n");

  const total = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const confirmed = window.confirm(
    `RINGKASAN PESANAN SEMBAKOKU\n\n` +
    `${summary}\n\n` +
    `Total: ${formatRupiah(total)}\n\n` +
    `Lanjutkan checkout simulasi?`
  );

  if (!confirmed) return;

  // Checkout ini hanya simulasi di browser.
  // Transaksi nyata memerlukan backend dan database.
  cart.forEach(item => {
    const product = getProduct(item.id);

    if (product) {
      product.stock = Math.max(0, product.stock - item.quantity);
    }
  });

  cart = [];
  renderCart();
  renderProducts();

  showMessage("Checkout simulasi berhasil!");
}

// ==========================================
// INISIALISASI
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  renderCart();

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const sortProducts = document.getElementById("sortProducts");

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      searchProduct();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearch = searchInput.value;
      renderProducts();
    });
  }

  if (sortProducts) {
    sortProducts.addEventListener("change", renderProducts);
  }
});
