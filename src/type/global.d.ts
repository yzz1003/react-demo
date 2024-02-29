import "axios";
declare module "axios" {
  interface AxiosRequestConfig extends AxiosRequestConfig {
    requestOptions?: import("../api/interface").requestConfig;
  }
}
