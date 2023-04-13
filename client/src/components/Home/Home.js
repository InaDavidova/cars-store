import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getAllCars } from "../../services/carsService";
import AdCard from "../AdCard/AdCard";
import styles from "../Home/Home.module.css";

function Home() {
  const [ads, setAds] = useState([]);
  const { userLogout } = useContext(AuthContext);

  useEffect(() => {
    getAllCars()
      .then((data) => {
        setAds(data
          .sort((a, b) => b._createdOn - a._createdOn)
          .slice(0, 4));
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
      <div className={styles.landingView}>
        <h1>
          Welcome to the Moto world! Here you can find your dream car or find a
          new owner for the one that you no longer need.
        </h1>
      </div>
      <h2 className={styles.latesttAdsHeader}>Latest additions</h2>
      <div className={styles.latestAdsContainer}>
        {ads.map((el) => (
          <AdCard key={el._id} ad={el} />
        ))}
      </div>
    </>
  );
}

export default Home;
