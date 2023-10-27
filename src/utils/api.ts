import axios from 'axios';
const api = (multipart?: boolean) => {
  const instance = axios.create({
    headers: {
      'Content-Type': `${
        multipart ? 'multipart/form-data' : 'application/json'
      }`,
    },
    baseURL: 'http://localhost:3002/api/v1',
    timeout: 60000,
  });

  instance.interceptors.request.use(
    async function (config: any) {
      if (localStorage.getItem('token')) {
        config.headers!.Authorization = `Bearer ${localStorage.getItem(
          'token'
        )}`;
      }
      return { ...config };
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    function (response: any) {
      return response;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default api;
