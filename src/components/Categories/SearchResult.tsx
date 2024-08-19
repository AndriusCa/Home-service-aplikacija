import ServiceIconList from "../Homepage/ServiceIcon/ServiceIconList";
import BusinessCardList from "../Homepage/BusinessCard/BusinessCardList";
import styles from "./SearchResult.module.scss";
import { useLocation } from "react-router-dom";

function SearchResult(): React.ReactElement {
  const location = useLocation();

  console.log(location.pathname.includes("Electric"));

  const service = location.pathname.split("/").pop() || "";
  return (
    <>
      <div className={styles.title}>Categories</div>
      <div className={styles.container}>
        <div className={styles.service}>
          <ServiceIconList />
        </div>
        <div className={styles.businessCards}>
          <BusinessCardList service={service} />
        </div>
      </div>
    </>
  );
}

export default SearchResult;
