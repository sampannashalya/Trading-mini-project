import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const fetchStockPrice = (symbol) => axios.get(`${API_URL}/stocks/price?symbol=${symbol}`);
export const buyStock = (data, token) =>
  axios.post(`${API_URL}/stocks/buy`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getPortfolio = (token) =>
  axios.get(`${API_URL}/stocks/portfolio`, { headers: { Authorization: `Bearer ${token}` } });
