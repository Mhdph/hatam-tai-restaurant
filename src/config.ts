import axios from "axios";
export const baseUrl = "http://localhost:5000/api";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllCategoryFn = async () => {
  const response = await api.get(`/category`);
  return response.data;
};

export const getAllFoodFn = async (id: any) => {
  const response = await api.get(`/food?category/${id}`);
  return response.data;
};

export const getAllFoodWoFFn = async () => {
  const response = await api.get(`/food`);
  return response.data;
};

export const getAllOneFoodFn = async (id: string) => {
  const response = await api.get(`/food/${id}`);
  return response.data;
};
export const getAllOrderFn = async () => {
  const response = await api.get(`/order`);
  return response.data;
};