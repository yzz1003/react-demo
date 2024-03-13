import { del, get, post } from "../../reqeust/utils/useInterceptors";

export const userList = (params: { page: number; take: number }) =>
  get<unknown>("api/users/list", params);
export const createUser = (params) => post(`api/users/add`, params);
export const delUser = (id: number) => del(`api/users/${id}`);
export const userInfo = (id: number) => get<unknown>(`api/users/${id}`);
