import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { getUsersCars } from "../../services/carsService";
import AdCard from "../AdCard/AdCard";
import styles from "../MyAds/MyAds.module.css";

function MyAds() {
  const [ads, setAds] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getUsersCars(user._id)
      .then((data) => {
        setAds(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user]);

  return (
    <>
      <h1 className={styles.myAdsHeader}>My Ads</h1>
      <button className={styles.createAdBtn}>
        <Link to={"/create"}>Create New Ad</Link>
      </button>
      <div className={styles.adsContainer}>
        {ads.map((ad) => (
          <AdCard key={ad._id} ad={ad} />
        ))}
      </div>
    </>
  );
}

export default MyAds;
