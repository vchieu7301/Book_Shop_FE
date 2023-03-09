import axiosClient from "../network/Network";

export const login = (email, password) => {
  return axiosClient.post('/login', { email, password },{headers: { withCredentials: true}})
    .then(response => {
      // handle successful login
      return JSON.stringify(response.data);
    })
    .catch(error => {
      // handle failed login
      throw error;
    });
};

export const logout = () => {
  return axiosClient.post('/logout')
    .then(response => {
      // handle successful logout
      return response.data;
    })
    .catch(error => {
      // handle failed logout
      throw error;
    });
};
