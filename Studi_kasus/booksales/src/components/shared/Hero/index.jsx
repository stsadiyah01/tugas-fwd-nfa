import { Link } from "react-router-dom";

export default function Hero(){
    return (
        <>
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
        </>
    )
}
