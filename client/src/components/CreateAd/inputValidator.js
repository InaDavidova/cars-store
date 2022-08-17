export default function inputValidator(userInput) {
  const errorsData = {};

  if (userInput.brand === "-- select an option --") {
    errorsData.brand = "Please select a the brand of the car!";
  }

  if (!userInput.model) {
    errorsData.model = "Plese write the model of the car!";
  }

  if (userInput.fuel === "-- select an option --") {
    errorsData.fuel = "Please select the fuel of the car!";
  }

  if (userInput.year < 1884) {
    errorsData.year = "Please write the year of manufacture!";
  }

  if (userInput.price < 0) {
    errorsData.price =
      "Please enter a price for the car! It has to be a positive number.";
  }

  if (userInput.kilometers < 0) {
    errorsData.kilometers = "Please enter the mileage of the car!";
  }

  if (userInput.power <= 0 || userInput.power > 1000) {
    errorsData.power = "Please enter the power of the car!";
  }

  if (userInput.engine <= 0) {
    errorsData.engine = "Please enter the engine capacity of the car!";
  }

  return errorsData;
}
