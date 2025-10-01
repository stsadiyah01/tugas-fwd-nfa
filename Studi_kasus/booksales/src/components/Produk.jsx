// import React, { useRef } from "react";
// import booksData from "../../../utils/books"; 
// import styles from "../../../styles/Books.module.css";

// function Books() {
//   let booksList = [...booksData]; // Salin data awal
//   const booksContainerRef = useRef(null); // Ref untuk container

//   const handleClick = () => {
//     const newBook = {
//       id: booksList.length + 1,
//       title: "Belok Kanan Tetap Jalan",
//       year: 2024,
//       price: "Rp. 150.000",
//       cover: "https://i.pinimg.com/736x/2f/ae/0d/2fae0d699e00f570b25e97c4153f48d0.jpg"
//     };

//     booksList.push(newBook);

//     if (booksContainerRef.current) {
//       const newBookElement = document.createElement("div");
//       newBookElement.className = styles.card;
//       newBookElement.innerHTML = `
//         <img src="${newBook.cover}" alt="${newBook.title}" />
//         <h3>${newBook.title}</h3>
//         <p>Tahun: ${newBook.year}</p>
//         <p>Harga: ${newBook.price}</p>
//       `;
//       booksContainerRef.current.appendChild(newBookElement);
//     }

//     console.log("Buku terbaru:", booksList);
//     alert("Buku baru berhasil ditambahkan!");
//   };

//   return (
//     <div className={styles.booksContainer}>
//       <h1 className={styles.title}>Daftar Buku</h1>
//       <div className={styles.cardContainer} ref={booksContainerRef}>
//         {booksList.map((book) => (
//           <div key={book.id} className={styles.card}>
//             <img src={book.cover} alt={book.title} />
//             <h3>{book.title}</h3>
//             <p>Tahun: {book.year}</p>
//             <p>Harga: {book.price}</p>
//           </div>
//         ))}
//       </div>

//       <button onClick={handleClick} className={styles.addButton}>
//         Tambah Buku Baru
//       </button>
//     </div>
//   );
// }

// export default Books;
