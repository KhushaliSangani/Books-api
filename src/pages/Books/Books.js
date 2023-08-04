import BooksList from '../../components/BooksList/BooksList';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Books.module.css';
const Books=()=>{
   return (
    <div>
        <div className={styles['books-filter-container']}>
            <div className={styles['filter-component']}>
                <Sidebar/>
            </div>
            <div className={styles['books-list']}>
                <BooksList/>
            </div>
        </div>
    </div>
   ) 
}

export default Books;