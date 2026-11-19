const daftarMenu = [
  // Main Course
  { kategori: "main", nama: "Nasi Goreng", desc: "Nasi goreng bumbu gurih dengan telur dan acar segar.", laris: true, foto: "Image Menu/image/Main Course/Nasi Goreng/image.jpeg", labelWa: "Nasi Goreng", harga: 15000, qty: 0, catatan: "" },
  { kategori: "main", nama: "Mie Goreng", desc: "Mie goreng pedas manis dengan sayuran dan topping ayam.", laris: false, foto: "Image Menu/image/Main Course/Mie Goreng/image2.jpeg", labelWa: "Mie Goreng", harga: 10000, qty: 0, catatan: "" },
  { kategori: "main", nama: "Indomie Goreng + Telur", desc: "Indomie goreng spesial disajikan hangat dengan telur mata sapi.", laris: true, foto: "Image Menu/image/Main Course/Indomie Goreng + Telur/image1.jpeg", labelWa: "Indomie Goreng + Telur", harga: 10000, qty: 0, catatan: "" },
  { kategori: "main", nama: "Nasi Teriyaki", desc: "Nasi hangat dengan irisan daging bumbu saus teriyaki manis gurih.", laris: false, foto: "Image Menu/image/Main Course/Nasi Teriyaki/image.jpeg", labelWa: "Nasi Teriyaki", harga: 10000, qty: 0, catatan: "" },
  { kategori: "main", nama: "Nasi Ayam Crispy", desc: "Nasi putih hangat dengan ayam goreng tepung renyah.", laris: true, foto: "Image Menu/image/Main Course/Nasi Ayam Crispy/image.jpeg", labelWa: "Nasi Ayam Crispy", harga: 15000, qty: 0, catatan: "" },

  // Snack
  { kategori: "snack", nama: "Kentang Goreng Keju", desc: "Kentang goreng renyah berpadu saus keju gurih melimpah.", laris: true, foto: "Image Menu/image/Snack/Kentang Goreng Keju/image.jpeg", labelWa: "Kentang Goreng Keju", harga: 15000, qty: 0, catatan: "" },
  { kategori: "snack", nama: "Pisang Goreng", desc: "Pisang pilihan digoreng garing di luar dan lembut di dalam.", laris: false, foto: "Image Menu/image/Snack/Pisang Goreng/image.jpeg", labelWa: "Pisang Goreng", harga: 10000, qty: 0, catatan: "" },
  { kategori: "snack", nama: "Roti Bakar", desc: "Roti panggang mentega dengan pilihan topping manis favorit.", laris: false, foto: "Image Menu/image/Snack/Roti Bakar/image.jpeg", labelWa: "Roti Bakar", harga: 10000, qty: 0, catatan: "" },
  { kategori: "snack", nama: "Singkong", desc: "Singkong goreng empuk merekah dengan taburan bumbu gurih.", laris: false, foto: "Image Menu/image/Snack/Singkong/image.jpeg", labelWa: "Singkong", harga: 10000, qty: 0, catatan: "" },
  { kategori: "snack", nama: "Gethuk Goreng", desc: "Gethuk manis legit digoreng hangat, pas untuk teman minum kopi.", laris: false, foto: "Image Menu/image/Snack/Gethuk Goreng/image.jpeg", labelWa: "Gethuk Goreng", harga: 15000, qty: 0, catatan: "" },
  { kategori: "snack", nama: "Mix Plate", desc: "Paket camilan lengkap berisi aneka gorengan untuk sharing.", laris: true, foto: "Image Menu/image/Snack/Mix Plate/image.jpeg", labelWa: "Mix Plate", harga: 20000, qty: 0, catatan: "" },

  // Minuman Cold
  { kategori: "cold", nama: "Es Teh Manis", desc: "Teh melati seduh segar dengan es batu kristal.", laris: true, foto: "Image Menu/image/Minuman Cold/Es Teh Manis/image.jpeg", labelWa: "Es Teh Manis [Cold]", harga: 4000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Thai Tea Original", desc: "Teh tarik khas Thailand dingin dengan racikan susu creamy.", laris: true, foto: "Image Menu/image/Minuman Cold/Thai Tea Original/image.jpeg", labelWa: "Thai Tea Original [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Thai Tea Creamy Cheese", desc: "Thai tea dingin dengan lapisan krim keju lembut di atasnya.", laris: true, foto: "Image Menu/image/Minuman Cold/Thai Tea Creamy Cheese/image.jpeg", labelWa: "Thai Tea Creamy Cheese [Cold]", harga: 15000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Chocolate Avocado", desc: "Perpaduan cokelat pekat dan alpukat lembut yang menyegarkan.", laris: false, foto: "Image Menu/image/Minuman Cold/Chocolate Avocado/image.jpeg", labelWa: "Chocolate Avocado [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Coffee Mocafrio", desc: "Es kopi moka dingin dengan rasa ringan dan manis seimbang.", laris: false, foto: "Image Menu/image/Minuman Cold/Coffee Mocafrio/image.jpeg", labelWa: "Coffee Mocafrio [Cold]", harga: 10000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Moccacino", desc: "Espresso, cokelat, dan susu dingin dalam satu gelas.", laris: false, foto: "Image Menu/image/Minuman Cold/Moccacino/image.jpeg", labelWa: "Moccacino [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Coffee Bali Arabica", desc: "Kopi arabika Bali dingin dengan aroma wangi dan segar.", laris: false, foto: "Image Menu/image/Minuman Cold/Coffee Bali Arabica/image.jpeg", labelWa: "Coffee Bali Arabica [Cold]", harga: 12500, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Butter Scotch", desc: "Es kopi susu dengan sirup butterscotch karamel gurih.", laris: true, foto: "Image Menu/image/Minuman Cold/Butter Scotch/image.jpeg", labelWa: "Butter Scotch [Cold]", harga: 12500, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Hazzelnut Macchiato", desc: "Kopi susu dingin dengan aroma kacang hazelnut panggang.", laris: false, foto: "Image Menu/image/Minuman Cold/Hazelnut Macchiato/image.jpeg", labelWa: "Hazzelnut Macchiato [Cold]", harga: 12500, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Chocolate", desc: "Minuman cokelat dingin kental dan menyegarkan.", laris: false, foto: "Image Menu/image/Minuman Cold/Chocolate/image.jpeg", labelWa: "Chocolate [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Matcha", desc: "Teh hijau matcha Jepang dingin berpadu susu segar.", laris: false, foto: "Image Menu/image/Minuman Cold/Matcha/image.jpeg", labelWa: "Matcha [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Mango Cheese", desc: "Kesegaran mangga tropis dengan topping krim keju lembut.", laris: false, foto: "Image Menu/image/Minuman Cold/Mango Cheese/image.jpeg", labelWa: "Mango Cheese [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Taro", desc: "Minuman talas ungu dingin yang manis dan creamy.", laris: false, foto: "Image Menu/image/Minuman Cold/Taro/image.jpeg", labelWa: "Taro [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Mojito", desc: "Minuman soda dingin segar dengan perasan jeruk nipis dan mint.", laris: false, foto: "Image Menu/image/Minuman Cold/Mojito/image.jpeg", labelWa: "Mojito [Cold]", harga: 12000, qty: 0, catatan: "" },
  { kategori: "cold", nama: "Mineral Water", desc: "Air mineral kemasan dingin menyegarkan.", laris: false, foto: "Image Menu/image/Minuman Cold/Mineral Water/image.jpeg", labelWa: "Mineral Water [Cold]", harga: 5000, qty: 0, catatan: "" },

  // Minuman Hot
  { kategori: "hot", nama: "Teh Hangat", desc: "Teh melati seduh hangat menenangkan.", laris: false, foto: "Image Menu/image/Minuman Hot/Teh Hangat/image.jpeg", labelWa: "Teh Hangat [Hot]", harga: 3000, qty: 0, catatan: "" },
  { kategori: "hot", nama: "Kopi Hitam Panas", desc: "Seduhan kopi hitam murni panas dengan aroma mantap.", laris: false, foto: "Image Menu/image/Minuman Hot/Kopi Hitam Panas/image.jpeg", labelWa: "Kopi Hitam Panas [Hot]", harga: 10000, qty: 0, catatan: "" },
  { kategori: "hot", nama: "Kopi Gula Aren", desc: "Kopi susu panas dengan manis alami gula aren asli.", laris: true, foto: "Image Menu/image/Minuman Hot/Kopi Gula Aren/image.jpeg", labelWa: "Kopi Gula Aren [Hot]", harga: 10000, qty: 0, catatan: "" }
];

let kataKunci = "";

function renderMenu() {
  const wadah = {
    main: document.getElementById("list-main"),
    snack: document.getElementById("list-snack"),
    cold: document.getElementById("list-cold"),
    hot: document.getElementById("list-hot")
  };

  Object.values(wadah).forEach(el => el.innerHTML = "");

  let totalTampil = 0;

  daftarMenu.forEach((item, index) => {
    if (kataKunci && !item.nama.toLowerCase().includes(kataKunci)) {
      return;
    }

    totalTampil++;
    const card = document.createElement("div");
    card.className = "food-card";

    const badgeHtml = item.laris ? `<span class="badge-laris">🔥 Terlaris</span>` : "";

    const actionHtml = item.qty === 0
      ? `<button type="button" class="btn-add-pill" onclick="ubahQty(${index}, 1)">+ Tambah</button>`
      : `<div class="qty-pill">
           <button type="button" onclick="ubahQty(${index}, -1)">−</button>
           <span>${item.qty}</span>
           <button type="button" onclick="ubahQty(${index}, 1)">+</button>
         </div>`;

    const noteHtml = item.qty > 0
      ? `<input type="text" class="note-input-inline" placeholder="Catatan (opsional: pedas, tanpa es...)" value="${item.catatan}" oninput="ubahCatatan(${index}, this.value)">`
      : "";

    card.innerHTML = `
      <div class="food-info">
        <div>
          ${badgeHtml}
          <h3 class="food-name">${item.nama}</h3>
          <p class="food-desc">${item.desc}</p>
        </div>
        <div>
          <div class="food-price">Rp ${item.harga.toLocaleString("id-ID")}</div>
          ${noteHtml}
        </div>
      </div>
      <div class="food-media">
        <img src="${item.foto}" alt="${item.nama}" class="food-thumb">
        <div class="action-slot">${actionHtml}</div>
      </div>
    `;

    wadah[item.kategori].appendChild(card);
  });

  // Sembunyikan section kosong saat sedang mencari
  ["main", "snack", "cold", "hot"].forEach(kat => {
    const sec = document.getElementById("sec-" + kat);
    sec.style.display = wadah[kat].children.length === 0 ? "none" : "block";
  });

  document.getElementById("emptySearch").style.display = totalTampil === 0 ? "block" : "none";
}

function ubahQty(index, delta) {
  daftarMenu[index].qty = Math.max(0, daftarMenu[index].qty + delta);
  if (daftarMenu[index].qty === 0) {
    daftarMenu[index].catatan = "";
  }
  renderMenu();
  updateKeranjang();
}

function ubahCatatan(index, teks) {
  daftarMenu[index].catatan = teks;
}

function updateKeranjang() {
  let totalItem = 0;
  let totalHarga = 0;

  daftarMenu.forEach(item => {
    totalItem += item.qty;
    totalHarga += item.qty * item.harga;
  });

  const bar = document.getElementById("floatingCart");
  if (totalItem > 0) {
    bar.style.display = "block";
    document.getElementById("badgeJumlahItem").textContent = totalItem;
    document.getElementById("cartLabelItem").textContent = totalItem + " Item di keranjang";
    document.getElementById("cartTotalHarga").textContent = "Rp " + totalHarga.toLocaleString("id-ID");
  } else {
    bar.style.display = "none";
    tutupDrawer();
  }

  return totalHarga;
}

// Pencarian langsung
document.getElementById("inputCari").addEventListener("input", function(e) {
  kataKunci = e.target.value.trim().toLowerCase();
  renderMenu();
});

// Buka & Tutup Bottom Sheet Rincian Pesanan
function bukaDrawer() {
  const listSheet = document.getElementById("daftarKeranjangSheet");
  listSheet.innerHTML = "";
  let total = 0;

  daftarMenu.forEach(item => {
    if (item.qty > 0) {
      const subtotal = item.qty * item.harga;
      total += subtotal;
      const row = document.createElement("div");
      row.className = "sheet-item-row";
      row.innerHTML = `
        <div>
          <strong>${item.qty}x ${item.nama}</strong>
          ${item.catatan ? `<span class="sheet-item-note">Catatan: ${item.catatan}</span>` : ""}
        </div>
        <strong>Rp ${subtotal.toLocaleString("id-ID")}</strong>
      `;
      listSheet.appendChild(row);
    }
  });

  document.getElementById("sheetTotalBayar").textContent = "Rp " + total.toLocaleString("id-ID");
  document.getElementById("sheetBackdrop").style.display = "block";
  document.getElementById("orderSheet").classList.add("open");
}

function tutupDrawer() {
  document.getElementById("sheetBackdrop").style.display = "none";
  document.getElementById("orderSheet").classList.remove("open");
}

document.getElementById("btnBukaDrawer").addEventListener("click", bukaDrawer);
document.getElementById("btnTutupDrawer").addEventListener("click", tutupDrawer);
document.getElementById("sheetBackdrop").addEventListener("click", tutupDrawer);

// Highlight tab kategori aktif saat diklik
document.querySelectorAll(".tab-pill").forEach(tab => {
  tab.addEventListener("click", function() {
    document.querySelectorAll(".tab-pill").forEach(t => t.classList.remove("active"));
    this.classList.add("active");
  });
});

// Lanjut ke halaman pembayaran.html
document.getElementById("btnLanjutBayar").addEventListener("click", function() {
  const total = updateKeranjang();
  const nama = document.getElementById("namaPemesan").value.trim();

  if (nama === "") {
    alert("Isi nama pemesan / nomor meja dulu ya!");
    document.getElementById("namaPemesan").focus();
    return;
  }

  let rincian = "";
  daftarMenu.forEach(item => {
    if (item.qty > 0) {
      const ket = item.catatan.trim() ? ` [${item.catatan.trim()}]` : "";
      rincian += `- ${item.labelWa} (${item.qty}x)${ket}\n`;
    }
  });

  const paketPesanan = {
    nama: nama,
    rincian: rincian,
    total: total
  };

  localStorage.setItem("pesananWarung", JSON.stringify(paketPesanan));
  window.location.href = "pembayaran.html";
});

// Jalankan pertama kali
renderMenu();