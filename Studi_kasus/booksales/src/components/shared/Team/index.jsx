import { Link } from "react-router-dom";

export default function Team(){
    return(
        <>
            <section className="py-0 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-bold">Our Team</h1>
                <p className="lead text-body-secondary">
                  Kami akan memberikan layanan yang terbaik dari yang terbaik.
                </p>
              </div>
            </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://i.pinimg.com/1200x/ab/9c/d9/ab9cd9c61c4637c33eb4a9d5044f622b.jpg" className="card-img-top" alt="Sadiyah" style={{height: "350px"}} />
            <div className="card-body">
              <h5 className="card-title">Siti Sa'diyah - Founder & Marketing</h5>
              <p className="card-text">Merancang strategi pemasaran digital, mengelola brand toko buku, serta memastikan produk sampai ke pembaca dengan baik.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://i.pinimg.com/736x/93/19/46/9319465086c0948607ea93e638db631d.jpg" className="card-img-top" alt="Alif Surya Pratama" style={{height:"350px"}}/>
            <div className="card-body">
              <h5 className="card-title">Alif Surya Pratama - Finance & Admin</h5>
              <p className="card-text">Mengatur keuangan toko, mencatat transaksi serta mengelola administrasi agar operasional berjalan dengan lancar.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://i.pinimg.com/1200x/72/dd/67/72dd67cf886529e4129ddd4e04408d4d.jpg" className="card-img-top" alt="Amelia Rahmawati" style={{height:"350px"}}/>
            <div className="card-body">
              <h5 className="card-title">Amelia Rahmawati - Content & Curation</h5>
              <p className="card-text">Bertugas memilih dan mengkurasi buku-buku terbaik, serta membuat deskripsi produk yang menarik untuk pembaca.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
        </>
    )
}