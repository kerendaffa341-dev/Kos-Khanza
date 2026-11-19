const dataPesanan = JSON.parse(localStorage.getItem("pesananWarung"));
let metodeDipilih = "qris";

function formatRupiah(angka) {
  return "Rp " + Number(angka || 0).toLocaleString("id-ID");
}

function muatRingkasan() {
  if (!dataPesanan || !dataPesanan.total || dataPesanan.total <= 0) {
    document.getElementById("teksRincian").textContent = "Belum ada pesanan aktif. Silakan pilih menu terlebih dahulu.";
    document.getElementById("btnKonfirmasiWeb").disabled = true;
    document.getElementById("btnKonfirmasiWeb").style.opacity = "0.5";
    return;
  }

  document.getElementById("labelPemesan").textContent = dataPesanan.nama;
  document.getElementById("teksRincian").textContent = dataPesanan.rincian.trim();
  document.getElementById("totalAkhir").textContent = formatRupiah(dataPesanan.total);
  document.getElementById("nominalQris").textContent = formatRupiah(dataPesanan.total);
  document.getElementById("nominalTunai").textContent = formatRupiah(dataPesanan.total);
}

function pilihMetode(metode) {
  metodeDipilih = metode;

  const kartuQris = document.getElementById("kartuQris");
  const kartuTunai = document.getElementById("kartuTunai");
  const panelQris = document.getElementById("panelQris");
  const panelTunai = document.getElementById("panelTunai");
  const tombol = document.getElementById("btnKonfirmasiWeb");

  if (metode === "qris") {
    kartuQris.classList.add("aktif");
    kartuTunai.classList.remove("aktif");
    panelQris.style.display = "block";
    panelTunai.style.display = "none";
    tombol.textContent = "Konfirmasi Pembayaran QRIS";
  } else {
    kartuTunai.classList.add("aktif");
    kartuQris.classList.remove("aktif");
    panelTunai.style.display = "block";
    panelQris.style.display = "none";
    tombol.textContent = "Konfirmasi Pesanan Tunai";
  }
}

function buatNomorAntrean() {
  const sekarang = new Date();
  const jam = String(sekarang.getHours()).padStart(2, "0");
  const menit = String(sekarang.getMinutes()).padStart(2, "0");
  const acak = Math.floor(10 + Math.random() * 89);
  return `WB-${jam}${menit}-${acak}`;
}

function selesaikanPesananWeb() {
  if (!dataPesanan || !dataPesanan.total || dataPesanan.total <= 0) {
    alert("Tidak ada pesanan yang bisa diproses.");
    return;
  }

  const nomorAntrean = buatNomorAntrean();
  const waktuSekarang = new Date().toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const labelMetode = metodeDipilih === "qris" ? "QRIS" : "Tunai (Cash)";
  const statusBayar = metodeDipilih === "qris"
    ? "Menunggu Verifikasi QRIS di Kasir"
    : "Bayar Tunai di Kasir / Pelayan";

  // Simpan riwayat pesanan di localStorage browser
  const riwayatLama = JSON.parse(localStorage.getItem("riwayatPesananWarung") || "[]");
  riwayatLama.unshift({
    antrean: nomorAntrean,
    nama: dataPesanan.nama,
    metode: labelMetode,
    status: statusBayar,
    total: dataPesanan.total,
    rincian: dataPesanan.rincian.trim(),
    waktu: waktuSekarang
  });
  localStorage.setItem("riwayatPesananWarung", JSON.stringify(riwayatLama.slice(0, 30)));

  // Tampilkan struk langsung di web
  document.getElementById("areaPilihMetode").style.display = "none";
  document.getElementById("areaStruk").style.display = "block";

  document.getElementById("nomorAntrean").textContent = nomorAntrean;
  document.getElementById("strukNama").textContent = dataPesanan.nama;
  document.getElementById("strukMetode").textContent = labelMetode;
  document.getElementById("strukStatus").textContent = statusBayar;
  document.getElementById("strukWaktu").textContent = waktuSekarang;
  document.getElementById("strukRincian").textContent = dataPesanan.rincian.trim();
  document.getElementById("strukTotal").textContent = formatRupiah(dataPesanan.total);

  localStorage.removeItem("pesananWarung");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function pesanLagi() {
  window.location.href = "index.html";
}

muatRingkasan();