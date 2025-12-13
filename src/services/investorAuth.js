import axios from "axios";

const API = "http://192.168.1.50:8000";

// Send OTP
export const sendOTP = async (email) => {
  return axios.post(`${API}/investorDesk/sending_mail`, { email });
};

// Verify OTP
export const verifyOTP = async (email, otp, sessionToken) => {
  return axios.post(`${API}/investorDesk/verifying_mail`, { email, otp , sessionToken});
};

export const getContent = async (loginToken) => {
  return axios.post(`${API}/investorDesk/content`, { loginToken });
};

// // Private file access (example)
// export const getPrivateFile = async (fileName, token) => {
//   return axios.post(`${API}/private-file/${fileName}?token=${token}`);
// };


