import axios, { AxiosRequestConfig } from "axios";
import { requestConfig } from "../../api/interface";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:3001",
  withCredentials: true,
  requestOptions: {
    isLoading: false,
  },
};
export const RequestHttp = axios.create(config);
console.log(RequestHttp);

export function get<T, a = unknown>(
  url: string,
  params?: object,
  object: requestConfig = {},
): Promise<a> {
  return RequestHttp.get(url, {
    params,
    requestOptions: { ...config.requestOptions, ...object },
  });
}

export function post(url: string, params?: object, object: requestConfig = {}) {
  return RequestHttp.post(url, params, {
    requestOptions: { ...config.requestOptions, ...object },
  });
}

export function del(url: string, params?: object, object: requestConfig = {}) {
  return RequestHttp.delete(url, {
    params,
    requestOptions: { ...config.requestOptions, ...object },
  });
}
