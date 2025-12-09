import axios from "axios";

const API_BASE = "http://localhost:5000"; // replace with your deployed backend URL
//const API_BASE = "https://investorsbackend-a3cwakhwcrh7beem.southindia-01.azurewebsites.net"


export const sendOTP = (email) => {
  return axios.post(`${API_BASE}/auth/send-otp`, { email });
};

export const verifyOTP = (email, otp) => {
  return axios.post(`${API_BASE}/auth/verify-otp`, { email, otp });
};

/* export const setPassword = (email, password) => {
  return axios.post(`${API_BASE}/auth/set-password`, { email, password });
}; */

export const login = (email, password) => {
  return axios.post(`${API_BASE}/auth/login`, { email, password });
};

export const getContent = (token) => {
  return axios.get(`${API_BASE}/content`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

/* export const checkPassword = (email) => {
  return axios.get(`${API_BASE}/auth/check-password`, { params: { email } });
}; */

export const getProfile = async (token) => {
  return axios.get(`${API_BASE}/investor`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getPrivateFileURL = async (token, fileName) => {
  const res = await axios.get(`${API_BASE}/content/file`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { fileName },
  });
  return res.data.url;
};