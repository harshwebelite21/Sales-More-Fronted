/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL || "", // Fetch base URL from a configuration file (optional)
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (
  url: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  return axiosInstance.get(url, config);
};

export const post = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<any> => {
  return axiosInstance.post(url, data, config);
};

export const put = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<any> => {
  return axiosInstance.put(url, data, config);
};

export const remove = async (
  url: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  return axiosInstance.delete(url, config);
};
