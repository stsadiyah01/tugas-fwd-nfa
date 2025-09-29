import { Link } from "react-router-dom";

export default function ProductList(){
    return(
        <>
             <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Produk Terlaris</h1>
              <p className="lead text-body-secondary">
                Pilihan favorit pembaca sepanjang tahun ini, ayo nikmati keseruan membaca buku terfavorit, jangan sampai kamu kehabisan!
              </p>
              <p>
                <Link to="/" className="btn btn-primary my-2 m-2">
                  Beli Sekarang
                </Link>
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
        </>
    )
}
