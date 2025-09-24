// Data Produk
let produkList = [
    { id: 1, nama: "Buku", harga: 5000 },
    { id: 2, nama: "Pensil", harga: 2000 },
    { id: 3, nama: "Pulpen", harga: 3000 },
    { id: 4, nama: "Penghapus", harga: 2000 },
    { id: 5, nama: "Penggaris", harga: 3000}
];

// Fungsi tampilkan produk 
function tampilkan() {
    let tbody = document.getElementById("tampilkan");
    tbody.innerHTML = "";
    produkList.forEach(({ id, nama, harga }) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${id}</td>
            <td>${nama}</td>
            <td>Rp ${harga}</td>
            <td><button class="hapusBtn" onclick="hapus(${id})">Hapus</button></td> `;
        tbody.appendChild(tr);
    });
};

// Fungsi tambahkan produk
function tambahkan(id, nama, harga) {
    let produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru];
    alert(`${nama} berhasil ditambahkan!`);
    tampilkan();
};

// Fungsi hapus produk
function hapus(...idProduk) {
    produkList = produkList.filter(p => !idProduk.includes(p.id));
    alert(`Yakin ingin menghapus produk  ini?`);
    tampilkan();
};

// Event Listener tombol tambah
document.getElementById("btnTambah").addEventListener("click", () => {
    let id = produkList.length + 1;
    let nama = prompt("Masukkan nama produk:");
    let harga = prompt("Masukkan harga produk:");
    if (nama && harga) {
        tambahkan(id, nama, parseInt(harga));
    }
});

// Event Listener tombol hapus semua
document.getElementById("btnHapus").addEventListener("click", () => {
    if (confirm("Yakin mau hapus semua produk?")) {
        produkList = [];
        tampilkan();
    }
});

// Tampilkan produk
tampilkan();
