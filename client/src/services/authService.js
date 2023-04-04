import { post } from "./api";

const baseUrl = "http://localhost:3030";

export async function login(email, password) {

  const request = post(`/users/login`, {email,password});

  return request;
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