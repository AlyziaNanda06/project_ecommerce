"use strict";

// ==========================================
// SEMBAKOKU - DATA PRODUK
// ==========================================

const products = [
  // 1. Bahan Pokok Utama
  { id: 1, name: "Beras Setra Ramos 5 kg", category: "Bahan Pokok Utama", brand: "Setra Ramos", price: 75000, stock: 20, emoji: "🌾", description: "Beras pulen untuk kebutuhan sehari-hari.", discountPercent: 10 },
  { id: 2, name: "Minyak Goreng 1 Liter", category: "Bahan Pokok Utama", brand: "Minyak Kita", price: 18000, stock: 30, emoji: "🫗", description: "Minyak goreng kemasan pouch 1 liter.", discountPercent: 10 },
  { id: 3, name: "Gula Pasir 1 kg", category: "Bahan Pokok Utama", brand: "Gula Pilihan", price: 17500, stock: 25, emoji: "🍚", description: "Gula pasir untuk minuman dan masakan.", discountPercent: 5 },
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
let appliedVoucher = null;
let voucherInputValue = "";

// Ongkir dan voucher untuk simulasi frontend.
const SHIPPING_COST = 10000;
const MINIMUM_VOUCHER = 50000;

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
}

function openProductDetail(productId) {
  window.location.href = `detail-produk.html?id=${productId}`;
}

function getDiscountedPrice(product) {
  const discount = product.discountPercent || 0;
  return Math.round(product.price * (1 - discount / 100));
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? getDiscountedPrice(product) * item.quantity : 0);
  }, 0);
}

function getVoucherBenefits(subtotal) {
  let productDiscount = 0;
  let shippingDiscount = 0;

  if (appliedVoucher && subtotal >= MINIMUM_VOUCHER) {
    if (appliedVoucher === "HEMAT10") {
      productDiscount = Math.min(Math.round(subtotal * 0.10), 20000);
    }

    if (appliedVoucher === "GRATISONGKIR") {
      shippingDiscount = Math.min(SHIPPING_COST, 10000);
    }
  }

  return { productDiscount, shippingDiscount };
}

function getOrderTotals() {
  const subtotal = getCartSubtotal();
  const benefits = getVoucherBenefits(subtotal);
  const shipping = subtotal > 0 ? SHIPPING_COST : 0;

  return {
    subtotal,
    productDiscount: benefits.productDiscount,
    shipping,
    shippingDiscount: benefits.shippingDiscount,
    total: Math.max(
      0,
      subtotal - benefits.productDiscount + shipping - benefits.shippingDiscount
    )
  };
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
    const effectivePrice = getDiscountedPrice(product);
    const matchPrice =
      effectivePrice >= minPrice &&
      effectivePrice <= maxPrice;

    return matchCategory && matchSearch && matchPrice;
  });

  const sort =
    document.getElementById("sortProducts")?.value || "default";

  if (sort === "cheap") {
    filtered.sort((a, b) => getDiscountedPrice(a) - getDiscountedPrice(b));
  } else if (sort === "expensive") {
    filtered.sort((a, b) => getDiscountedPrice(b) - getDiscountedPrice(a));
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

  container.innerHTML = filtered.map(product => {
    const discountedPrice = getDiscountedPrice(product);
    const hasDiscount = (product.discountPercent || 0) > 0;

    return `
      <article class="product-card">
        <div class="product-image">
          <span>${product.emoji}</span>
          ${hasDiscount ? `
            <span class="discount-badge">
              Diskon ${product.discountPercent}%
            </span>` : ""}
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
            <div class="product-price">
              ${hasDiscount ? `
                <span style="text-decoration: line-through; color: #888; font-size: 13px;">
                  ${formatRupiah(product.price)}
                </span>
                <br>
                <strong style="color: #dc3545;">
                  ${formatRupiah(discountedPrice)}
                </strong>
                <span style="color: #dc3545; font-size: 12px;">
                  Diskon ${product.discountPercent}%
                </span>
              ` : `
                <strong>${formatRupiah(product.price)}</strong>
              `}
            </div>

            <button class="btn-add"
              onclick="addToCart(${product.id})"
              ${product.stock <= 0 ? "disabled" : ""}>
              ${product.stock > 0 ? "+ Keranjang" : "Habis"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
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

  if (cart.length === 0) {
    appliedVoucher = null;
    voucherInputValue = "";
  }

  renderCart();
  showMessage("Produk dihapus dari keranjang.");
}

// ==========================================
// VOUCHER
// ==========================================

function applyVoucher() {
  const input = document.getElementById("voucherInput");
  const code = (input ? input.value : voucherInputValue)
    .trim()
    .toUpperCase();

  voucherInputValue = code;

  if (cart.length === 0) {
    showMessage("Tambahkan produk sebelum menggunakan voucher.");
    return;
  }

  if (getCartSubtotal() < MINIMUM_VOUCHER) {
    showMessage("Voucher berlaku untuk belanja minimal Rp50.000.");
    return;
  }

  if (code !== "HEMAT10" && code !== "GRATISONGKIR") {
    appliedVoucher = null;
    renderCart();
    showMessage("Kode voucher tidak valid.");
    return;
  }

  appliedVoucher = code;
  renderCart();

  showMessage(
    code === "HEMAT10"
      ? "Voucher HEMAT10 berhasil digunakan!"
      : "Voucher GRATISONGKIR berhasil digunakan!"
  );
}

function removeVoucher() {
  appliedVoucher = null;
  voucherInputValue = "";
  renderCart();
  showMessage("Voucher berhasil dilepas.");
}

// ==========================================
// TAMPILAN RINGKASAN KERANJANG
// ==========================================

function renderCart() {
  localStorage.setItem("segarBersahabatCart", JSON.stringify(cart));

  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");
  const summaryCount = document.getElementById("summaryCount");

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const totals = getOrderTotals();

  if (cartCount) cartCount.textContent = totalQuantity;
  if (cartTotal) cartTotal.textContent = formatRupiah(totals.total);

  if (summaryCount) {
    summaryCount.textContent = `${totalQuantity} barang`;
  }

  if (!cartItems) return;

  const voucherPanel = `
    <section class="voucher-panel"
      style="margin: 16px 0; padding: 16px; border: 1px solid #dce8df; border-radius: 12px;">
      <h3 style="margin: 0 0 8px;">🎟️ Voucher Belanja</h3>
      <p style="font-size: 13px; margin: 0 0 10px;">
        HEMAT10: diskon 10%, maksimal Rp20.000.
        GRATISONGKIR: potongan ongkir maksimal Rp10.000.
        Minimal belanja Rp50.000.
      </p>

      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        <input
          id="voucherInput"
          type="text"
          placeholder="Masukkan kode voucher"
          value="${escapeHTML(voucherInputValue)}"
          style="flex: 1; min-width: 150px; padding: 10px; border: 1px solid #ccc; border-radius: 8px;"
          ${cart.length === 0 ? "disabled" : ""}
        >

        <button type="button"
          onclick="applyVoucher()"
          style="padding: 10px 14px; border: none; border-radius: 8px; cursor: pointer;"
          ${cart.length === 0 ? "disabled" : ""}>
          Pakai Voucher
        </button>
      </div>

      ${appliedVoucher ? `
        <p style="margin: 10px 0 0; color: #218838;">
          Voucher aktif: <strong>${escapeHTML(appliedVoucher)}</strong>
          <button type="button" onclick="removeVoucher()"
            style="margin-left: 8px; cursor: pointer;">
            Hapus
          </button>
        </p>
      ` : ""}
    </section>
  `;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">Keranjang masih kosong.</p>
      ${voucherPanel}
    `;
    return;
  }

  const cartList = cart.map(item => {
    const product = getProduct(item.id);
    if (!product) return "";

    const unitPrice = getDiscountedPrice(product);
    const hasDiscount = (product.discountPercent || 0) > 0;

    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${escapeHTML(product.name)}</strong>

          <span>
            ${hasDiscount
              ? `<span style="text-decoration: line-through; color: #888;">${formatRupiah(product.price)}</span> `
              : ""}
            ${formatRupiah(unitPrice)} × ${item.quantity}
          </span>

          <strong>${formatRupiah(unitPrice * item.quantity)}</strong>
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
  }).join("");

  cartItems.innerHTML = `
    ${voucherPanel}

    <div class="cart-list">
      ${cartList}
    </div>

    <div class="cart-calculation"
      style="margin-top: 16px; padding: 16px; border: 1px solid #dce8df; border-radius: 12px;">

      <h3 style="margin-top: 0;">Ringkasan Belanja</h3>

      <div style="display: flex; justify-content: space-between; gap: 12px; margin: 8px 0;">
        <span>Subtotal setelah diskon produk</span>
        <strong>${formatRupiah(totals.subtotal)}</strong>
      </div>

      ${totals.productDiscount > 0 ? `
        <div style="display: flex; justify-content: space-between; gap: 12px; margin: 8px 0; color: #218838;">
          <span>Diskon voucher HEMAT10</span>
          <strong>−${formatRupiah(totals.productDiscount)}</strong>
        </div>
      ` : ""}

      <div style="display: flex; justify-content: space-between; gap: 12px; margin: 8px 0;">
        <span>Ongkos kirim</span>
        <strong>${formatRupiah(totals.shipping)}</strong>
      </div>

      ${totals.shippingDiscount > 0 ? `
        <div style="display: flex; justify-content: space-between; gap: 12px; margin: 8px 0; color: #218838;">
          <span>Potongan ongkir</span>
          <strong>−${formatRupiah(totals.shippingDiscount)}</strong>
        </div>
      ` : ""}

      <hr style="border: 0; border-top: 1px solid #ddd; margin: 12px 0;">

      <div style="display: flex; justify-content: space-between; gap: 12px; font-size: 18px;">
        <strong>Total Pembayaran</strong>
        <strong>${formatRupiah(totals.total)}</strong>
      </div>
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

  // Pastikan seluruh barang masih tersedia.
  for (const item of cart) {
    const product = getProduct(item.id);

    if (!product || item.quantity > product.stock) {
      showMessage("Ada produk yang stoknya tidak mencukupi.");
      return;
    }
  }

  const totals = getOrderTotals();

  const summary = cart.map(item => {
    const product = getProduct(item.id);
    if (!product) return "";

    const price = getDiscountedPrice(product);

    return `- ${product.name} (${item.quantity} × ${formatRupiah(price)})`;
  }).filter(Boolean).join("\n");

  const voucherSummary = appliedVoucher
    ? `Voucher: ${appliedVoucher}\n`
    : "";

  const confirmed = window.confirm(
    `RINGKASAN PESANAN SEMBAKOKU\n\n` +
    `${summary}\n\n` +
    `${voucherSummary}` +
    `Subtotal: ${formatRupiah(totals.subtotal)}\n` +
    `Diskon voucher: ${formatRupiah(totals.productDiscount)}\n` +
    `Ongkos kirim: ${formatRupiah(totals.shipping)}\n` +
    `Potongan ongkir: ${formatRupiah(totals.shippingDiscount)}\n\n` +
    `TOTAL: ${formatRupiah(totals.total)}\n\n` +
    `Lanjutkan checkout simulasi?`
  );

  if (!confirmed) return;

  // Checkout hanya simulasi browser.
  // Stok dan transaksi nyata harus dikelola oleh backend/database.
  cart.forEach(item => {
    const product = getProduct(item.id);

    if (product) {
      product.stock = Math.max(0, product.stock - item.quantity);
    }
  });

  cart = [];
  appliedVoucher = null;
  voucherInputValue = "";

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