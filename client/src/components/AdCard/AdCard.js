import { Link } from "react-router-dom";
import styles from "../AdCard/AdCard.module.css";

function AdCard({ ad }) {
  return (
    <div className={styles.card}>
      <img src={ad.img} alt={ad.make} />
      <h3>
        {ad.make} {ad.model}
      </h3>
      <p className={styles.price}>${ad.price}</p>
      <Link to={`/details/${ad._id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default AdCard;
