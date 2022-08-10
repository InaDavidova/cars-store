import { useEffect, useState } from "react";
import { getAllCars } from "../../services/carsService";
import AdCard from "../AdCard/AdCard";
import styles from "../Home/Home.module.css";

function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getAllCars().then((data) => {
      setAds(data);
    });
  }, []);

  return (
    <>
      <div className={styles.landingView}>
        <h1>
          Welcome to the Moto world! Here you can find your dream car or find a
          new owner for the one that you no longer need.
        </h1>
      </div>
      <div>
        <h2>Latest additions</h2>
        {ads.map((el) => (
          <AdCard key={el._id} ad={el} />
        ))}
      </div>
    </>
  );
}

export default Home;
