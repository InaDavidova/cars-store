import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getAllCars } from "../../services/carsService";
import AdCard from "../AdCard/AdCard";
import styles from "../Catalog/Catalog.module.css";

function Catalog() {
  const [ads, setAds] = useState([]);
  const { userLogout } = useContext(AuthContext);

  useEffect(() => {
    getAllCars()
      .then((data) => {
        setAds(data);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.status === 403) {
          userLogout();
        }
      });
  }, [userLogout]);

  return (
    <>
      <div>
        <h1 className={styles.catalogHeader}>
          Catalog
        </h1>
      </div>
      <div className={styles.adsContainer}>
        {ads.map((el) => (
          <AdCard key={el._id} ad={el} />
        ))}
      </div> 
    </>
  );
}

export default Catalog;
