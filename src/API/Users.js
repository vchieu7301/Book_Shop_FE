import axiosClient from "../network/Network";

export const getUsers = () => {
  return axiosClient.get('/users')
  .then((response) => {
    // handle successful request
    return response.data;
  })
  .catch((error) => {
    // handle failed request
     Promise.reject(error);
  });
};

export const getUserById = (id) => {
  return axiosClient.get(`/users/${id}`)
    .then((response) => {
      // handle successful request
      return response.data;
    })
    .catch((error) => {
      // handle failed request
      throw error;
    });
};

export const createUser = (userData) => {
  return axiosClient
    .post("/users", userData)
    .then((response) => {
      // handle successful request
      return response.data;
    })
    .catch((error) => {
      // handle failed request
      throw error;
    });
};

export const updateUser = (id, userData) => {
  return axiosClient
    .put(`/users/${id}`, userData)
    .then((response) => {
      // handle successful request
      return response.data;
    })
    .catch((error) => {
      // handle failed request
      throw error;
    });
};

export const deleteUser = (id) => {
  return axiosClient
    .delete(`/users/${id}`)
    .then((response) => {
      // handle successful request
      return response.data;
    })
    .catch((error) => {
      // handle failed request
      throw error;
    });
};
