let filterAktif = "semua";

function formatRupiah(angka) {
  return "Rp " + Number(angka || 0).toLocaleString("id-ID");
}

function ambilRiwayat() {
  return JSON.parse(localStorage.getItem("riwayatPesananWarung") || "[]");
}

function simpanRiwayat(data) {
  localStorage.setItem("riwayatPesananWarung", JSON.stringify(data));
}

function setFilter(mode) {
  filterAktif = mode;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("aktif", btn.dataset.filter === mode);
  });
  renderKasir();
}

function tandaiSelesai(index) {
  const data = ambilRiwayat();
  if (!data[index]) return;
  data[index].status = "Selesai / Sudah Dibayar";
  simpanRiwayat(data);
  renderKasir();
}

function hapusSatuOrder(index) {
  const data = ambilRiwayat();
  if (!data[index]) return;
  data.splice(index, 1);
  simpanRiwayat(data);
  renderKasir();
}

function bersihkanRiwayat() {
  if (confirm("Hapus semua riwayat pesanan yang tersimpan di browser ini?")) {
    localStorage.removeItem("riwayatPesananWarung");
    renderKasir();
  }
}

function renderKasir() {
  const data = ambilRiwayat();
  const wadah = document.getElementById("daftarOrderKasir");

  let omzet = 0;
  data.forEach(item => {
    omzet += Number(item.total || 0);
  });

  document.getElementById("statJumlahOrder").textContent = data.length;
  document.getElementById("statTotalOmzet").textContent = formatRupiah(omzet);

  const tersaring = data
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => {
      const sudahSelesai = String(item.status || "").toLowerCase().includes("selesai");
      if (filterAktif === "aktif") return !sudahSelesai;
      if (filterAktif === "selesai") return sudahSelesai;
      return true;
    });

  if (tersaring.length === 0) {
    wadah.innerHTML = `
      <div class="kotak-info-bayar" style="margin-top: 14px;">
        <strong>Belum ada pesanan pada tab ini</strong>
        <p class="catatan-kecil">Pesanan yang dikonfirmasi di halaman pembayaran akan muncul otomatis di sini.</p>
      </div>
    `;
    return;
  }

  wadah.innerHTML = tersaring.map(({ item, idx }) => {
    const sudahSelesai = String(item.status || "").toLowerCase().includes("selesai");
    return `
      <div class="order-card ${sudahSelesai ? "order-selesai" : ""}">
        <div class="order-card-top">
          <div>
            <span class="order-antrean">${item.antrean || "-"}</span>
            <strong class="order-nama">${item.nama || "-"}</strong>
          </div>
          <span class="order-metode">${item.metode || "-"}</span>
        </div>

        <div class="order-waktu">${item.waktu || ""} • Status: <strong>${item.status || "-"}</strong></div>

        <pre class="order-rincian">${item.rincian || ""}</pre>

        <div class="order-card-bottom">
          <strong class="order-total">${formatRupiah(item.total)}</strong>
          <div class="order-btns">
            ${!sudahSelesai ? `<button type="button" class="btn-selesai-mini" onclick="tandaiSelesai(${idx})">Tandai Selesai</button>` : ""}
            <button type="button" class="btn-hapus-mini" onclick="hapusSatuOrder(${idx})">Hapus</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Auto-refresh jika ada tab lain yang mengubah riwayat
window.addEventListener("storage", renderKasir);

renderKasir();