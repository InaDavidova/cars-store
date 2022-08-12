import { get, post, put, del } from './api.js';
const baseUrl = "/data/cars";

export async function getAllCars() {
    const request = await get(baseUrl);

    return request;
 
}

export async function getCarById(id) {
    try {
      const request = await get(baseUrl + `/${id}`);
  
      const result = await request.json();
      return result;
    } catch (error) {
      console.log(error);
    }
}

export async function deleteCar(id){
    try {
      const request = await del(baseUrl + `/${id}`);
  
      const result = await request.json();
      return result;
    } catch (error) {
      console.log(error);
    }
}

export async function editCar(id, data){
    try {
      const request = await put(baseUrl + `/${id}`, data);
  
      const result = await request.json();
      return result;
    } catch (error) {
      console.log(error);
    }
}

export async function creatCar(data){
    try {
      const request = await post(baseUrl, data);
  
      const result = await request.json();
      return result;
    } catch (error) {
      console.log(error);
    }
}

export async function getUserCars(userId){
    try {
      const request = await get(baseUrl + `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
  
      const result = await request.json();
      return result;
    } catch (error) {
      console.log(error);
    }
}
