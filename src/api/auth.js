import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export const login = async (credential) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/api/v1/login`, credential, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // returns { access_token: "..." }
  } catch (error) {
    console.error("Login error:", error);
    throw error.response?.data || { message: "Login failed" };
  }
};
