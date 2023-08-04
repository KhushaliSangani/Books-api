import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <div className={styles.card}>
      <div className={styles.bookCard}>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Country: {book.country}</p>
        <p>Year: {book.year}</p>
        <Link to={`/books/edit/${book.id}`}>
          <button className={styles.bookCardButton}>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
