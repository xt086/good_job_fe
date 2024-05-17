import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Tạo Axios instance
const client: AxiosInstance = axios.create({});

// Thời gian chờ tối đa của 1 request: để 10 phút
client.defaults.timeout = 1000 * 60 * 10;

// Cho phép gửi cookie cùng với mỗi request
client.defaults.withCredentials = true;

// Interceptor cho request
client.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Bạn có thể thêm logic tùy chỉnh cho request ở đây nếu cần
    return config;
  },
  (error: any): Promise<never> => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Bạn có thể thêm logic tùy chỉnh cho response ở đây nếu cần
    return response;
  },
  (error: any): Promise<never> => {
    return Promise.reject(error);
  }
);

export default client;
