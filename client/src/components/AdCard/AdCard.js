import { Link } from "react-router-dom";
import styles from "../AdCard/AdCard.module.css";

function AdCard({ ad }) {
  return (
    <div className={styles.card}>
      <img src={ad.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzV-jBO9I9f-Ao1fXrW_mQq0LApckziDiLUmorHCU_KKPicgSwY5ZAwrveHhT5GSX7RRg&usqp=CAU"} alt={ad.make} />
      <h3>
        {ad.brand} {ad.model}
      </h3>
      <p className={styles.price}>${ad.price}</p>
      <Link to={`/details/${ad._id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default AdCard;
