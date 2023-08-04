import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../Redux/Books/actions";
import BookCard from "../BookCard/BookCard";
import styles from "./BooksList.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
const BooksList = () => {
  const booksState = useSelector((state) => state.BookReducers);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const order = searchParams.get("order");
    let paramObj = {
      params: {
        _sort: order && "id",
        _order: order,
      },
    };
    dispatch(fetchBooks(paramObj));
  }, [location.search]);

  return (
    <div className={styles["div-wrapper"]}>
      {booksState.books.length > 0 &&
        booksState.books.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
    </div>
  );
};

export default BooksList;
