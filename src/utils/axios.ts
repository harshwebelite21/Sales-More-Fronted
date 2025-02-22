/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import appConfig from "../config/appConfig";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: appConfig.baseUrl,
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

export const post = async <T = any>(
  url: string,
  data: any,
  config?: { query?: T; token?: string },
): Promise<T> => {
  const { token, query } = config || {};

  return axiosInstance.post(url, data, {
    ...config,
    headers: { ...(token ? { authorization: token } : {}) },
    params: query,
  });
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
