import users from "./data.js";

export class UserController{
    constructor(view){
        this.users = [...users];
        this.view = view;
    }

    // Melihat data atau menampilkan data
    getUsers(){
        return this.users;
    }

    // Menambah data otomatis menggunakan push
    tambahOtomatis(){
    this.users.push(
        {nama:"Amanda Fiqih Hauli", umur: 22, alamat: "Jl. Cibinong Raya", email: "amanda@gmail.com"},
        {nama:"Ahmad Nasrulloh", umur: 20, alamat: "Jl. Depok Raya",email:"anas@gmail.com"}
    );
    this.view.tampilkanData(this.users,this);
    }

    // Menambah data melalui form
    tambahData(user){
        this.users.push(user);
        this.view.tampilkanData(this.users,this);
    }

    // Hapus semua data
    hapusSemua(){
        this.users = [];
        this.view.tampilkanData(this.users,this);
    }

    // Hapus data yang mau dihapus
    hapusData(index){
        this.users.splice(index,1);
        this.view.tampilkanData(this.users,this);
    }
}

