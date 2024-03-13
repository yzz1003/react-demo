/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PageMetaDto {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PageDto {
  data: any[][];
  meta: PageMetaDto;
}

export interface UserInfoDto {
  id: number;
  name: string;
  email: string;
  sex: string;
  remark: string;
}

export interface UserDto {
  name: string;
  email: string;
  sex: string;
  remark: string;
}

export interface GetListParams {
  page: number;
  take: number;
}
