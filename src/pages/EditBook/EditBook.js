import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditBook.module.css";
import {editBook, fetchBooks} from '../../Redux/Books/actions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const EditBook = () => {
  const { id } = useParams();
  const [author,setAuthor]= useState("");
  const [title,setTitle]= useState("");
  const booksState = useSelector((state) => state.BookReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(()=>{
    const bookData = booksState.books.find(book=>book.id===+id);
    if(bookData){
        setAuthor(bookData.author);
        setTitle(bookData.title);
    }
  },[])
  const handleEdit =()=>{
    let newData={
        author,
        title
    }
    // console.log(newData);
    dispatch(editBook(id,newData));
    alert("updated");
    // console.log(booksState.books);
    navigate('/');
    console.log(author,title);
  }
  return (
    <div className={styles.EditDiv}>
      <h1>Edit Book Id: {id}</h1>
      <div className={styles.EditBox}>
        <label>
          <b>Author:-</b>
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className={styles.EditBox}>
        <label>
          <b>Title:-</b>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className={styles.EditBtn} onClick={handleEdit}>
        Submit
      </button>
    </div>
  );
};

export default EditBook;
