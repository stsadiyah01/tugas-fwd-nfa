import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <>
            <section className="py-3 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-bold">Contact Us</h1>
      <p className="lead text-body-secondary">
        Hubungi Bookstore melalui sosial media, alamat, atau kirimkan pertanyaan dan saran Anda lewat form berikut.
      </p>
    </div>
  </div>

  <div className="container">
    <div className="row">
      
      {/* Kolom Kiri: Sosmed + Alamat */}
      <div className="col-md-4">
        
        {/* Card 1: Sosial Media */}
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 bg-light">
            <h4 className="my-0 fw-normal">Sosial Media</h4>
          </div>
          <div className="card-body text-start">
            <p className="card-text">Ikuti Bookstore di platform berikut:</p>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="https://instagram.com/bookstore.id" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <i className="fab fa-instagram fa-lg me-2 text-danger"></i> @bookstore.id
                </Link>
              </li>
              <li>
                <Link to="https://facebook.com/bookstore" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <i className="fab fa-facebook fa-lg me-2 text-primary"></i> fb.com/bookstore
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/bookstore_id" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <i className="fab fa-twitter fa-lg me-2 text-info"></i> @bookstore_id
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Alamat & Kontak */}
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 bg-light">
            <h4 className="my-0 fw-normal">Alamat & Kontak</h4>
          </div>
          <div className="card-body text-start">
            <p className="card-text mb-2">
              <i className="fas fa-map-marker-alt me-2 text-danger"></i>Jl. Mawar No. 12, Jakarta, Indonesia
            </p>
            <p className="card-text mb-2">
              <i className="fas fa-envelope me-2 text-primary"></i>support@bookstore.com
            </p>
            <p className="card-text">
              <i className="fas fa-phone me-2 text-success"></i>+62 812-3456-7890
            </p>
          </div>
        </div>

      </div>

      {/* Kolom Kanan: Form Saran */}
      <div className="col-md-8">
        <div className="card mb-4 rounded-3 shadow-sm h-100">
          <div className="card-header py-3 bg-light">
            <h4 className="my-0 fw-normal">Saran & Pertanyaan</h4>
          </div>
          <div className="card-body text-start">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Masukkan email Anda" />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" rows="3" placeholder="Tulis pesan Anda di sini"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
        </>
    )
}