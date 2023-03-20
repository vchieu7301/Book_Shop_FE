import axios from "axios";
import axiosClient from "../network/Network";

export const login = (email, password) => {
  return axios.post("http://test.localhost/login",
      { email, password },
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      JSON.stringify(localStorage.setItem("accessToken", response.data.access_token));
      JSON.stringify(localStorage.setItem("refreshToken", response.data.refresh_token));
      return JSON.stringify(response.data);
    })
    .catch((error) => {
      throw error;
    });
};

export const logout = () => {
  return axiosClient
    .post("/logout")
    .then((response) => {
      // handle successful logout
      return response.data;
    })
    .catch((error) => {
      // handle failed logout
      throw error;
    });
};
