function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4 fw-bold">Bookstore</span>
          </a>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2">Book</a></li>
            <li><a href="#" className="nav-link px-2">Team</a></li>
            <li><a href="#" className="nav-link px-2">Contact</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero */}
        <div className="container my-3">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h3 className="display-4 fw-bold lh-1 text-body-emphasis">
                Bookstore: Beli Buku Jadi Lebih Mudah dengan Sekali Klik
              </h3>
              <p className="lead">
                Nikmati pengalaman belanja buku yang cepat, aman dan nyaman. Tak perlu repot, semua tersedia hanya dalam satu klik. 
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                  Beli Sekarang
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Selengkapnya
                </button>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg m-2 rounded-3 mb-4 ">
              <img
                className="rounded-lg-3"
                src="https://i.pinimg.com/736x/e9/b8/b6/e9b8b641d3f3709a75803b153c3ad4b5.jpg"
                alt="Hero"
                width="600"
                height="350"
              />
            </div>
          </div>

          {/* Product List */}
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Produk Terlaris</h1>
              <p className="lead text-body-secondary">
                Pilihan favorit pembaca sepanjang tahun ini, ayo nikmati keseruan membaca buku terfavorit, jangan sampai kamu kehabisan!
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">
                  Beli Sekarang
                </a>
              </p>
            </div>
          </div>

          <div className="album py-0 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                
                {/* Produk 1 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/1200x/74/9c/73/749c735cbdd17cdd2c48585d85fc30e2.jpg"
                      alt="Filosopi Teras"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Filosopi Teras</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 2 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/736x/84/31/63/84316317e7f2919b153679e534eaffc5.jpg"
                      alt="Atomic Habits"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Atomic Habits</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 3 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/1200x/71/87/80/71878060235ea3652fc0ee630324470b.jpg"
                      alt="Bicara Itu Ada Seninya"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Bicara Itu Ada Seninya</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 4 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/736x/5e/08/a5/5e08a5cde8b842a44da2c3ca64d023e7.jpg"
                      alt="Sabtu bersama Bapak"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Sabtu Bersama Bapak</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 5 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/736x/e7/f1/df/e7f1df60791d2be391ce064d4065c812.jpg"
                      alt="Manusia dan badainya"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Manusia dan Badainya</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 6 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/736x/06/1c/92/061c929370956bc5d8736978f039e161.jpg"
                      alt="Cantik Itu Luka"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Cantik Itu Luka</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 7 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/736x/19/16/99/19169996121ff9b59d7bed81ebaf891f.jpg"
                      alt="Negri di ujung tanduk"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Negri di Ujung Tanduk</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 8 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src="https://i.pinimg.com/736x/35/7f/4d/357f4df85834d2d6f437bdc4a32f26c0.jpg"
                      alt="Sang Pemimpi"
                      height="225"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold text-start">Sang Pemimpi</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">Lihat</button>
                          <button className="btn btn-sm btn-outline-secondary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Team */}
      <section className="py-3 text-center container">
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

      {/* Contact */}
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
                <a href="https://instagram.com/bookstore.id" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <i className="fab fa-instagram fa-lg me-2 text-danger"></i> @bookstore.id
                </a>
              </li>
              <li>
                <a href="https://facebook.com/bookstore" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <i className="fab fa-facebook fa-lg me-2 text-primary"></i> fb.com/bookstore
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bookstore_id" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <i className="fab fa-twitter fa-lg me-2 text-info"></i> @bookstore_id
                </a>
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




        {/* Footer */}

       <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Book</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 NF Academy creates By Siti Sa'diyah</p>
        </footer>
      </div>
      </div>     
      </div>
          </>
        );
      }

export default App;