export class UserView {
    constructor() {
        this.tbody = document.getElementById("tampilkan");
        this.btnTambah = document.getElementById("btnTambah");
        this.btnHapus = document.getElementById("btnHapus");
        this.form = document.getElementById("formUser");
        this.nama = document.getElementById("nama");
        this.umur = document.getElementById("umur");
        this.alamat = document.getElementById("alamat");
        this.email = document.getElementById("email");
    }

    // Menampilkan  menggunakan map
    tampilkanData(users, controller) {
        if (!this.tbody) return;

        this.tbody.innerHTML = users.map((user, index) => `
            <tr>
                <td>${user.nama}</td>
                <td>${user.umur}</td>
                <td>${user.alamat}</td>
                <td>${user.email}</td>
                <td><button class="hapusBtn" data-index="${index}">Hapus</button></td>
            </tr>
        ` ).join("");

        // hapus yang mau dihapus
        this.tbody.querySelectorAll(".hapusBtn").forEach((btn)=> {
            btn.addEventListener("click",() => {
                const index = parseInt(btn.getAttribute("data-index"));
                if(confirm("Yakin mau hapus data ini?")){
                    controller.hapusData(index);
                }
            });
        });
    }
       

    // Tambah 2 data otomatis
    bindTambah(controller) {
        if (this.btnTambah) {
            this.btnTambah.addEventListener("click", () => {
                controller.tambahOtomatis();
            });
        }
    }

    // Hapus semua data
    bindHapusSemua(controller) {
        if (this.btnHapus) {
            this.btnHapus.addEventListener("click", () => {
                if(confirm("Yakin mau hapus semua?")){
                    controller.hapusSemua();
                }
            });
        }
    }

    // Tambah data
    bindForm(controller) {
        if (this.form) {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                const user = {
                    nama: this.nama.value,
                    umur: this.umur.value,
                    alamat: this.alamat.value,
                    email: this.email.value,
                };
                controller.tambahData(user);
                this.form.reset();
            });
        }
    }
}
