import { RequestHttp } from "./utils/useInterceptors";
import NProgress from "./utils/nprogress";

export default function Request() {
  // Add a request interceptor
  RequestHttp.interceptors.request.use(
    function (config) {
      NProgress.start();
      console.log(config)
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  RequestHttp.interceptors.response.use(
    function (response) {
      console.log(response)
      NProgress.done();
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
}
