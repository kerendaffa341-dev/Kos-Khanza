// 1. Ambil data pesanan yang dititipkan dari halaman index.html
const dataMentah = localStorage.getItem("pesananWarung");

// Jika halaman ini dibuka langsung tanpa memilih menu dulu, kembalikan ke index.html
if (dataMentah === null) {
  window.location.href = "index.html";
}

const pesanan = JSON.parse(dataMentah);

// 2. Tampilkan data pesanan ke layar
document.getElementById("tampilNama").textContent = pesanan.nama;
document.getElementById("tampilRincian").textContent = pesanan.rincian;
document.getElementById("tampilTotal").textContent = "Rp " + pesanan.total.toLocaleString("id-ID");

// 3. Pengaturan pilihan metode bayar (QRIS vs Panggil Pelayan)
const tombolQris = document.getElementById("pilihQris");
const tombolPelayan = document.getElementById("pilihPelayan");
const kotakQris = document.getElementById("kotakQris");
const kotakPelayan = document.getElementById("kotakPelayan");

let metodeDipilih = "QRIS";

tombolQris.addEventListener("click", function() {
  metodeDipilih = "QRIS";
  tombolQris.classList.add("aktif");
  tombolPelayan.classList.remove("aktif");
  kotakQris.style.display = "block";
  kotakPelayan.style.display = "none";
});

tombolPelayan.addEventListener("click", function() {
  metodeDipilih = "Panggil Pelayan (Bayar Tunai)";
  tombolPelayan.classList.add("aktif");
  tombolQris.classList.remove("aktif");
  kotakPelayan.style.display = "block";
  kotakQris.style.display = "none";
});

// 4. Kirim pesanan final beserta metode pembayarannya ke WhatsApp
const btnKonfirmasi = document.getElementById("btnKonfirmasiWa");

btnKonfirmasi.addEventListener("click", function() {
  const pesan = "Halo Warung Makan Berkah, saya mau konfirmasi pesanan:\n\n" +
                pesanan.rincian +
                "\nTotal: Rp " + pesanan.total.toLocaleString("id-ID") +
                "\nAtas Nama / Meja: " + pesanan.nama +
                "\nMetode Pembayaran: *" + metodeDipilih + "*";

  const nomorWa = "6281235157176";
  const linkWa = "https://wa.me/" + nomorWa + "?text=" + encodeURIComponent(pesan);
  window.open(linkWa, "_blank");
});