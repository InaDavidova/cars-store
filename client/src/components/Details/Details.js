import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { getCarById } from "../../services/carsService";
import styles from "../Details/Details.module.css";
import defaultCarImg from "../common/images/defaultCarImg.png";

function Details() {
  const { productId } = useParams();
  const { user, userLogout } = useContext(AuthContext);
  const [carData, serCarData] = useState({});

  useEffect(() => {
    getCarById(productId)
      .then((data) => {
        serCarData(data);
        console.log(data);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.status === 403) {
          userLogout();
        }
      });
  }, [userLogout, productId]);

  return (
    <div className={styles.main}>
      <img src={carData.image || defaultCarImg} alt="car" />
      <div className={styles.details}>
        <h1>Details</h1>
        <ul>
          <li>
            <span>Brand: </span>
            {carData.brand}
          </li>
          <li>
            <span>Model: </span>
            {carData.model}
          </li>
          <li>
            <span>Fuel: </span>
            {carData.fuel}
          </li>
          <li>
            <span>Kilometers: </span>
            {carData.engine}
          </li>
          <li>
            <span>Year of manufacture: </span>
            {carData.year}
          </li>
          <li>
            <span>Engine: </span>
            {carData.engine}cm³
          </li>
          <li>
            <span>Power: </span>
            {carData.power}hp
          </li>
          <li>
            <span>Description: </span>
            {carData.description || "-"}
          </li>
          <li className={styles.price}>
            <span>Price: </span>€{carData.price}
          </li>
        </ul>
        
        {user && carData && user._id === carData._ownerId && (
          <>
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.deleteBtn}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Details;
