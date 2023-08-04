import { useSearchParams } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  useEffect(() => {
    const params = {};
    order && (params.order = order);
    setSearchParams(params);
  }, [order]);
  return (
    <div>
      {/* <div className={styles.FilterByCss}>
        <h3>Filter By</h3>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Novel"
            // onChange={handleFilter}
            // checked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Motivational"
            // onChange={handleFilter}
            // checked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Thriller"
            // onChange={handleFilter}
            // checked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Science_Fiction"
            // onChange={handleFilter}
            // checked={category.includes("Science_Fiction")}
          />
          <label>Science Fiction</label>
        </div>
      </div> */}
      <div className={styles.SortByCss}>
        <h3>Sort By Order</h3>
        <div className={styles.SortByDiv}>
          <input
            type="radio"
            name="sort_by"
            value={"asc"}
            onChange={handleSort}
            defaultChecked={order === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div className={styles.SortByDiv}>
          <input
            type="radio"
            name="sort_by"
            value={"desc"}
            onChange={handleSort}
            defaultChecked={order === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
