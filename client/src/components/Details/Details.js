import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCar, getCarById } from "../../services/carsService";
import styles from "../Details/Details.module.css";
import defaultCarImg from "../../common/images/defaultCarImg.png";
import { confirmAlert } from "react-confirm-alert";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

function Details() {
  const { productId } = useParams();
  const { user, userLogout } = useContext(AuthContext);
  const [carData, setCarData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCarById(productId)
      .then((data) => {
        setCarData(data);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.status === 403) {
          userLogout();
        }
      });
  }, [userLogout, productId]);
  function onEditHandler() {
    navigate(`/edit/${productId}`);
  }

  async function onDeleteHandler() {
    async function onConfirm() {
      try {
        await deleteCar(productId);
        navigate("/my-ads", { replace: true });
      } catch (error) {
        console.log(error);
      }
    }

    confirmAlert({
      customUI: ({ onClose }) => {
        return <ConfirmModal onClose={onClose} onConfirm={onConfirm} />;
      },
    });
  }
  
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
          {user && user._id !== carData._ownerId && (
            <li>
              <span>Seller's contact: </span>
              {carData.ownerContact}
            </li>
          )}
          {!user && (
            <>
              <li className={styles.contact}>
                <span>Login to see the seller's contact!</span>
              </li>
              <Link to={"/login"} className={styles.loginBtn}>
                Log In
              </Link>
            </>
          )}
          <li className={styles.price}>
            <span>Price: </span>€{carData.price}
          </li>
        </ul>

        {user && carData && user._id === carData._ownerId && (
          <>
            <button onClick={onEditHandler} className={styles.editBtn}>
              Edit
            </button>
            <button onClick={onDeleteHandler} className={styles.deleteBtn}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Details;
