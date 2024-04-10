/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async <T = any>(
  url: string,
  config?: { query?: T; token?: string },
): Promise<T> => {
  const { token, query } = config || {};

  return axiosInstance.get(url, {
    ...config,
    headers: { ...(token ? { authorization: token } : {}) },
    params: query,
  });
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
