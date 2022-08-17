import { get, post, put, del } from "./api.js";
const baseUrl = "/data/cars";

export async function getAllCars() {
  const request = await get(baseUrl);

  return request;
}

export async function getCarById(id) {
  const request = await get(baseUrl + `/${id}`);

  return request;
}

export async function deleteCar(id) {
  const request = await del(baseUrl + `/${id}`);

  return request;
}

export async function editCar(id, data) {
  const request = await put(baseUrl + `/${id}`, data);

  return request;
}

export async function createCar(data) {
  const request = await post(baseUrl, data);

  return request;
}

export async function getUserCars(userId) {
  try {
    const request = await get(
      baseUrl + `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    );

    const result = await request.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
