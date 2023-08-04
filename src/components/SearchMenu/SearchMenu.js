import { useState } from "react";
import styles from "./SearchMenu.module.css";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
const SearchMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const booksState = useSelector((state)=>state.books);
  const fetchBooks=()=>{
    const books = booksState.books;
    const filteredData = books.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
      console.log(filteredData);
  }
  const submitHandler =(e)=>{
    e.preventDefault();
    fetchBooks();
  }
  return (
    <div className={styles["search-container"]}>
      <form onSubmit={submitHandler}>
        <input
          type="search"
          placeholder="Search..."
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <FaSearch></FaSearch>
        </button>
      </form>
    </div>
  );
};

export default SearchMenu;
