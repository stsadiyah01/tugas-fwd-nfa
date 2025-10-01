import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../../../utils/books";
import styles from "../../../styles/Books.module.css";

export default function ProductList() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);

  const handleView = (book) => {
    setSelectedBook(selectedBook?.id === book.id ? null : book);
  };

  const handleBuy = (book) => {
    setCart([...cart, book]);
  };

  return (
    <section className={styles.produkContainer}>
      <h1 className={styles.title}>Produk Terlaris</h1>
      <p className="lead text-body-secondary text-center mx-auto mb-3">
        Pilihan favorit pembaca sepanjang tahun ini, ayo nikmati keseruan
        membaca buku terfavorit, jangan sampai kamu kehabisan!
      </p>
      <div className="text-center mb-3">
        <p className="mb-1">Jumlah buku di keranjang: {cart.length}</p>
        <Link to="/login" className={styles.addButton}>
          Beli Sekarang
        </Link>
      </div>

      <div className={styles.cardContainer}>
        {books.map((book) => (
          <div className={styles.card} key={book.id}>
            <img src={book.image} alt={book.judul} />
            <h3>{book.judul}</h3>
            <p><strong>Penulis:</strong> {book.penulis}</p>
            <p><strong>Tahun:</strong> {book.tahun}</p>

            {selectedBook?.id === book.id && (
              <p className={styles.deskripsi}>{book.deskripsi}</p>
            )}

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="btn-group">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleView(book)}
                >
                  {selectedBook?.id === book.id ? "Sembunyikan" : "Deskripsi"}
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleBuy(book)}
                >
                  + Keranjang
                </button>
              </div>
              <small className="text-body-secondary">Terlaris</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
