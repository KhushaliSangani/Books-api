import { useNavigate} from "react-router-dom";
import styles from "./AddBook.module.css";
import {addNewBooks} from '../../Redux/Books/actions';
import { useDispatch} from "react-redux";
import { useState } from "react";
const AddBook = () => {
  const [author,setAuthor]= useState("");
  const [title,setTitle]= useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  
  const handleSubmit =()=>{
    let newData={
        author,
        title
    }
    dispatch(addNewBooks(newData));
    alert("Added");
    navigate('/');
    console.log(author,title);
  }
  return (
    <div className={styles.EditDiv}>
      <h1>Add New Book</h1>
      <div className={styles.EditBox}>
        <label>
          <b>Author:-</b>
        </label>
        <input
          type="text"
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
      <button className={styles.EditBtn} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddBook;
