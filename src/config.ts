import axios from "axios";
export const baseUrl = "http://api.hammtimm.ir/api";

export const api = axios.create({
  baseURL: "http://api.hammtimm.ir/api",
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

export const getAllOneFoodFn = async (id: string) => {
  const response = await api.get(`/food/${id}`);
  return response.data;
};
export const getAllOrderFn = async () => {
  const response = await api.get(`/order`);
  return response.data;
};
export const getCategoryFn = async (id: any) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};
export const getToppingFn = async (name: any) => {
  const response = await api.get(`topping?category=${name}`);
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
