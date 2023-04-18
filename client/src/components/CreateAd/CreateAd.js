import styles from "../../common/css/Forms.module.css";
import { carBrands, fuelOptions } from "../../data/optionsData";
import { useContext, useState } from "react";
import inputValidator from "./inputValidator";
import { createCar } from "../../services/carsService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function CreateAd() {
  const { user } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  async function onSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const [
      brand,
      model,
      fuel,
      year,
      price,
      kilometers,
      power,
      engine,
      description,
      image,
    ] = formData.values();

    const newAd = {
      brand,
      model: model.trim(),
      fuel,
      year,
      price,
      kilometers,
      power,
      engine,
      description: description.trim(),
      image: image.trim(),
      ownerContact: user.email,
    };

    try {
      const errObj = inputValidator(newAd);

      if (Object.keys(errObj).length === 0) {
        // setErrors(inputValidator(newAd));
        await createCar(newAd);
        e.target.reset();
        navigate("/my-ads");
      } else {
      }
      setErrors(errObj);
    } catch (error) {
      console.log(error);
    }
  }

  function inputChangeHandler(e) {
    const inputName = e.target.name;
    const updatedErrors = { ...errors };
    delete updatedErrors[inputName];
    setErrors(updatedErrors);
  }

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h1>Create New Ad</h1>

        <label>
          Brand *
          <select name="brand" id="brand" onChange={inputChangeHandler}>
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
          />
        </label>
        {errors.model && <p className={styles.error}>{errors.model}</p>}

        <label>
          Fuel *
          <select name="fuel" id="fuel" onChange={inputChangeHandler}>
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
            defaultValue={2022}
            max={2022}
            min={1884}
            id="year"
            name="year"
            onChange={inputChangeHandler}
          />
        </label>
        {errors.year && <p className={styles.error}>{errors.year}</p>}

        <label>
          Price *
          <input
            type="number"
            defaultValue={0}
            max={1000000000}
            min={0}
            id="price"
            name="price"
            onChange={inputChangeHandler}
          />
          <span>€</span>
        </label>
        {errors.price && <p className={styles.error}>{errors.price}</p>}

        <label>
          Kilometers *
          <input
            type="number"
            defaultValue={0}
            max={1000000000}
            min={0}
            id="kilometers"
            name="kilometers"
            onChange={inputChangeHandler}
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
            defaultValue={0}
            max={1000}
            min={0}
            id="power"
            name="power"
            onChange={inputChangeHandler}
          />
          <span className={styles.xsSpan}>hp</span>
        </label>
        {errors.power && <p className={styles.error}>{errors.power}</p>}

        <label>
          Engine *
          <input
            type="number"
            defaultValue={0}
            max={1000000}
            min={0}
            id="engine"
            name="engine"
            onChange={inputChangeHandler}
          />
          <span className={styles.xsSpan}>cm³</span>
        </label>
        {errors.engine && <p className={styles.error}>{errors.engine}</p>}

        <label>
          Description
          <textarea placeholder="Write a description here" name="description" />
        </label>

        <label>
          Image
          <input
            type="text"
            placeholder="Place image Url here"
            id="image"
            name="image"
          />
        </label>
        <p>All fields marked with an asterisk (*) are required!</p>
        <button>Create Ad</button>
      </form>
    </div>
  );
}

export default CreateAd;
