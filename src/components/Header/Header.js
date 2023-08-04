import { Link } from "react-router-dom";
import SearchMenu from "../SearchMenu/SearchMenu";
import styles from "./Header.module.css";

const Header = ({data}) => {

  return (
    <header className={styles["navbar_container"]}>
      <h1>Book Management</h1>
      <Link to={'/books/add'}>
        <button className={styles['add-btn']}>Add Book</button>
      </Link>
      <SearchMenu data ={data}/>
    </header>
  );
};

export default Header;
