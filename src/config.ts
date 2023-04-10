import axios from "axios";
export const baseUrl = "https://api.hatimaltairestaurant.com/api";

export const api = axios.create({
  baseURL: "https://api.hatimaltairestaurant.com/api",
});

export const getAllCategoryFn = async () => {
  const response = await api.get(`/category`);
  return response.data;
};

export const getAllFoodFn = async (id: any) => {
  const response = await api.get(`/food?category=${id}`);
  return response.data;
};

export const getOneFoodFn = async (id: any) => {
  const response = await api.get(`/food/${id}`);
  return response.data;
};

export const getAllFoodWoFFn = async () => {
  const response = await api.get(`/food`);
  return response.data;
};

export const getAllAdditionalFn = async () => {
  const response = await api.get(`/additional`);
  return response.data;
};

export const getAllOneFoodFn = async (id: string) => {
  const response = await api.get(`/food/${id}`);
  return response.data;
};
export const getAllOneAdditionalFn = async (id: any) => {
  const response = await api.get(`/additional/${id}`);
  return response.data;
};
export const getAllOrderFn = async () => {
  const response = await api.get(`/order`);
  return response.data;
};
export const getAllIndoorOrderFn = async () => {
  const response = await api.get(`/order/indoor`);
  return response.data;
};
export const getCategoryFn = async (id: any) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};
export const getToppingFn = async (name: any) => {
  const response = await api.get(`topping/${name}`);
  return response.data;
};

export const deleteCategoryFn = async (Id: string) => {
  const response = await api.delete<any>(`/category/${Id}`);
  return response.data;
};
export const deleteFoodFn = async (Id: string) => {
  const response = await api.delete<any>(`/food/${Id}`);
  return response.data;
};
export const deleteToppingFn = async (Id: string) => {
  const response = await api.delete<any>(`/topping/${Id}`);
  return response.data;
};
export const deleteAdditionalFn = async (Id: string) => {
  const response = await api.delete<any>(`/additional/${Id}`);
  return response.data;
};
export const GetDeliveryFee = async () => {
  const response = await api.get(`/delivery`);
  return response.data;
};
export const GetTime = async () => {
  const response = await api.get(`/timeWork`);
  return response.data;
};
