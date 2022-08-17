import { useParams } from "react-router-dom";
import styles from "../common/css/Forms.module.css";
import { carBrands, fuelOptions } from "../../data/optionsData";
import { useEffect, useState } from "react";
import inputValidator from "./inputValidator";
import { editCar, getCarById } from "../../services/carsService";
import { useNavigate } from "react-router-dom";

function EditAd() {
  const { productId } = useParams();
  const [errors, setErrors] = useState({});
  const [adData, setAdData] = useState({
    brand: "",
    model: "",
    fuel: "",
    year: "",
    price: "",
    kilometers: "",
    power: "",
    engine: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getCarById(productId)
      .then((data) => {
        setAdData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [productId]);

  async function onSubmitHandler(e) {
    e.preventDefault();

    try {
      const errObj = inputValidator(adData);

      if (Object.keys(errObj).length === 0) {
        await editCar(productId, adData);
        e.target.reset();
        navigate(`/details/${productId}`);
      }
      setErrors(errObj);
    } catch (error) {
      console.log(error);
    }
  }

  function inputChangeHandler(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newData = { ...adData };
    newData[inputName] = inputValue;
    setAdData(newData);
    const updatedErrors = { ...errors };
    delete updatedErrors[inputName];
    setErrors(updatedErrors);
  }
  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h1>Edit Ad</h1>

        <label>
          Brand *
          <select
            name="brand"
            id="brand"
            onChange={inputChangeHandler}
            value={adData.brand}
          >
            <option>-- select an option --</option>
            {carBrands.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
        </label>
        {errors.brand && <p className={styles.error}>{errors.brand}</p>}

        <label>
          Model *
          <input
            type="text"
            placeholder="Model"
            id="model"
            name="model"
            onChange={inputChangeHandler}
            value={adData.model}
          />
        </label>
        {errors.model && <p className={styles.error}>{errors.model}</p>}

        <label>
          Fuel *
          <select
            name="fuel"
            id="fuel"
            onChange={inputChangeHandler}
            value={adData.fuel}
          >
            <option>-- select an option --</option>
            {fuelOptions.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
        </label>
        {errors.fuel && <p className={styles.error}>{errors.fuel}</p>}

        <label>
          Year *
          <input
            type="number"
            // defaultValue={2022}
            max={2022}
            min={1884}
            id="year"
            name="year"
            onChange={inputChangeHandler}
            value={adData.year}
          />
        </label>
        {errors.year && <p className={styles.error}>{errors.year}</p>}

        <label>
          Price *
          <input
            type="number"
            // defaultValue={0}
            max={1000000000}
            min={0}
            id="price"
            name="price"
            onChange={inputChangeHandler}
            value={adData.price}
          />
          <span>€</span>
        </label>
        {errors.price && <p className={styles.error}>{errors.price}</p>}

        <label>
          Kilometers *
          <input
            type="number"
            max={1000000000}
            min={0}
            id="kilometers"
            name="kilometers"
            onChange={inputChangeHandler}
            value={adData.kilometers}
          />
          <span className={styles.xsSpan}>km</span>
        </label>
        {errors.kilometers && (
          <p className={styles.error}>{errors.kilometers}</p>
        )}

        <label>
          Power *
          <input
            type="number"
            max={1000}
            min={0}
            id="power"
            name="power"
            onChange={inputChangeHandler}
            value={adData.power}
          />
          <span className={styles.xsSpan}>hp</span>
        </label>
        {errors.power && <p className={styles.error}>{errors.power}</p>}

        <label>
          Engine *
          <input
            type="number"
            max={1000000}
            min={0}
            id="engine"
            name="engine"
            onChange={inputChangeHandler}
            value={adData.engine}
          />
          <span className={styles.xsSpan}>cm³</span>
        </label>
        {errors.engine && <p className={styles.error}>{errors.engine}</p>}

        <label>
          Description
          <textarea
            placeholder="Write a description here"
            name="description"
            onChange={inputChangeHandler}
            value={adData.description}
          />
        </label>

        <label>
          Image
          <input
            type="text"
            placeholder="Place image Url here"
            id="image"
            name="image"
            onChange={inputChangeHandler}
            value={adData.image}
          />
        </label>
        <p>All fields marked with an asterisk (*) are required!</p>
        <button>Edit Ad</button>
      </form>
    </div>
  );
}

export default EditAd;
