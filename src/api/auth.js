import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

export const login = async (userData) =>{
    try {
        const response = await axios.post(`${BASE_URL}api/v1/auth/login`, userData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.data; // This will contain the access_token
      } catch (error) {
        console.error("Login error:", error);
        throw error.response?.data || { message: "Login failed" };
      }
};