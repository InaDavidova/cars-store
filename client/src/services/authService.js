import { post } from "./api";

const baseUrl = "http://localhost:3030";

export async function login(email, password) {

  const request = post(`/users/login`, {email,password});

  return request;
  // try {
  //   const res = await fetch(`${baseUrl}/users/login`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   console.log(res, "reponse");
  //   const result = await res.json();
  //   return result;
  // } catch (error) {
  //   throw error;
  // }
}

export async function register(email, password) {
  const request = post(`/users/register`, {email,password});

  return request;
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