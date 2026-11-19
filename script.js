const daftarMenu = [
  { id: "qty1", nama: "Nasi Goreng", harga: 15000 },
  { id: "qty2", nama: "Mie Goreng", harga: 10000 },
  { id: "qty3", nama: "Indomie Goreng + Telur", harga: 10000 },
  { id: "qty4", nama: "Nasi Teriyaki", harga: 10000 },
  { id: "qty5", nama: "Nasi Ayam Crispy", harga: 15000 },
  { id: "qty6", nama: "Kentang Goreng Keju", harga: 15000 },
  { id: "qty7", nama: "Pisang Goreng", harga: 10000 },
  { id: "qty8", nama: "Roti Bakar", harga: 10000 },
  { id: "qty9", nama: "Singkong", harga: 10000 },
  { id: "qty10", nama: "Gethuk Goreng", harga: 15000 },
  { id: "qty11", nama: "Mix Plate", harga: 20000 },
  { id: "qty12", nama: "Es Teh Manis [Cold]", harga: 4000 },
  { id: "qty13", nama: "Thai Tea Original [Cold]", harga: 12000 },
  { id: "qty14", nama: "Thai Tea Creamy Cheese [Cold]", harga: 15000 },
  { id: "qty15", nama: "Chocolate Avocado [Cold]", harga: 12000 },
  { id: "qty16", nama: "Coffee Mocafrio [Cold]", harga: 10000 },
  { id: "qty17", nama: "Moccacino [Cold]", harga: 12000 },
  { id: "qty18", nama: "Coffee Bali Arabica [Cold]", harga: 12500 },
  { id: "qty19", nama: "Butter Scotch [Cold]", harga: 12500 },
  { id: "qty20", nama: "Hazzelnut Macchiato [Cold]", harga: 12500 },
  { id: "qty21", nama: "Chocolate [Cold]", harga: 12000 },
  { id: "qty22", nama: "Matcha [Cold]", harga: 12000 },
  { id: "qty23", nama: "Mango Cheese [Cold]", harga: 12000 },
  { id: "qty24", nama: "Taro [Cold]", harga: 12000 },
  { id: "qty25", nama: "Mojito [Cold]", harga: 12000 },
  { id: "qty26", nama: "Mineral Water [Cold]", harga: 5000 },
  { id: "qty27", nama: "Teh Hangat [Hot]", harga: 3000 },
  { id: "qty28", nama: "Kopi Hitam Panas [Hot]", harga: 10000 },
  { id: "qty29", nama: "Kopi Gula Aren [Hot]", harga: 10000 }
];

const layarTotal = document.getElementById("totalBayar");
const inputNama = document.getElementById("namaPemesan");
const tombolLanjut = document.getElementById("btnLanjutBayar");

// 1. Hitung total harga otomatis saat angka diubah
function hitungTotal() {
  let total = 0;

  for (let i = 0; i < daftarMenu.length; i++) {
    const kotak = document.getElementById(daftarMenu[i].id);
    const jumlah = Number(kotak.value);
    total += jumlah * daftarMenu[i].harga;
  }

  layarTotal.textContent = "Rp " + total.toLocaleString("id-ID");
  return total;
}

// Pasang sensor input ke semua 29 kotak sekaligus
for (let i = 0; i < daftarMenu.length; i++) {
  const kotak = document.getElementById(daftarMenu[i].id);
  kotak.addEventListener("input", hitungTotal);
}

// 2. Simpan pesanan ke localStorage lalu pindah ke halaman pembayaran
tombolLanjut.addEventListener("click", function() {
  const total = hitungTotal();
  const nama = inputNama.value;

  if (total <= 0) {
    alert("Pilih minimal 1 menu makanan atau minuman dulu ya!");
    return;
  }

  if (nama === "") {
    alert("Isi nama pemesan / nomor meja dulu ya!");
    return;
  }

  let rincian = "";
  for (let i = 0; i < daftarMenu.length; i++) {
    const kotak = document.getElementById(daftarMenu[i].id);
    const jumlah = Number(kotak.value);
    if (jumlah > 0) {
      rincian += "- " + daftarMenu[i].nama + " (" + jumlah + "x)\n";
    }
  }

  // Bungkus data pesanan menjadi satu paket Object
  const paketPesanan = {
    nama: nama,
    rincian: rincian,
    total: total
  };

  // Simpan ke brankas browser lalu pindah ke pembayaran.html
  localStorage.setItem("pesananWarung", JSON.stringify(paketPesanan));
  window.location.href = "pembayaran.html";
});