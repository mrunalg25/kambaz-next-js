import axios from "axios";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const USERS_API = `${API_BASE}/api/users`;

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const findUserById = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};