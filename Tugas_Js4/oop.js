// Buat Class Pelanggan dengan properti nama, nomorTelepon, dan kendaraanDisewa
class Pelanggan{
    constructor(nama, nomorTelepon, kendaraanDisewa=null){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    };

    // Tambahkan metode untuk mencatat transaksi penyewaan kendaraan oleh pelanggan
    sewaKendaraan(nama){
        if(this.kendaraanDisewa){
            console.log(`${this.nama} sudah menyewa ${this.kendaraanDisewa}.` );
        } else{
            this.kendaraanDisewa = nama;
            console.log(`${this.nama} berhasil menyewa ${nama}.`);
        };
    };

};

// Buat sistem yang menampilkan daftar pelanggan yang sedang menyewa kendaraan

class Sistem {
    constructor(){
        this.daftarPelanggan = [];
    };

    // Tambah pelanggan
    tambahPelanggan(pelanggan){
        this.daftarPelanggan.push(pelanggan);
    };

    // Tampilkan semua yang sedang menyewa
    tampilkanPelanggan(){
        console.log("Daftar pelanggan yang sedang menyewa:");
        this.daftarPelanggan.forEach(p => {
            if(p.kendaraanDisewa){
                console.log(`- ${p.nama} (${p.nomorTelepon}) menyewa ${p.kendaraanDisewa}`);
            };
        });
    };

};

// Impelementasi class
// sistem
let sistem = new Sistem();

// Pelanggan
let pelanggan1 = new Pelanggan("Alif", "0812345678");
let pelanggan2 = new Pelanggan("Sadiyah", "083153410795");
let pelanggan3 = new Pelanggan("Anton", "0857675642");

// masukkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// Sewa kendaraan
pelanggan1.sewaKendaraan("Mobil Avanza");
pelanggan2.sewaKendaraan("Bus");
pelanggan3.sewaKendaraan("Mobil Kijang");

// Tampilkan daftar pelanggan
sistem.tampilkanPelanggan();


