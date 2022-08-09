
const baseUrl = "http://localhost:3030";

export async function login(email, password) {
  try {
    const res = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function register(email, password) {
  try {
    const res = await fetch(`${baseUrl}/users/register`, {
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

export async function logout(accessToken) {

  try {
    const res = await fetch(`${baseUrl}/users/logout`, {
      headers: {
        "X-Authorization": accessToken,
      }
    });

    return res;

  } catch (error) {
    console.log(error);
  }
}