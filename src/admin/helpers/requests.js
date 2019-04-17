import axios from "axios";

const token = localStorage.getItem('loftToken');

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
axios.defaults.headers['Authorization'] = `Bearer ${token}`;


axios.interceptors.response.use(
  function(response) {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      return axios.post("/refreshToken").then(response => {
        const token = response.data.token;
        localStorage.setItem("loftToken", token);

        let seconds = Math.round(new Date()/1000) + response.data.ttl;
        localStorage.setItem('loftExpiredToken', seconds);

        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        originalRequest.headers["Authorization"] = `Bearer ${token}`;
        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default axios
