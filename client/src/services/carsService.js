const baseUrl = "http://localhost:3030/data/cars";

export async function getAllCars() {
  try {
    const request = await fetch(baseUrl);

    const result = await request.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function login(email, password) {
  try {
    const res = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
