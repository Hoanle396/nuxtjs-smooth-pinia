import { BaseEntity } from "~/types/types";

export interface IUser extends BaseEntity {
  name: string;
  email: string;
  verified: boolean;
  wallet: number;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
export interface ILoginRespone {
  token: string;
  [x: string]: any;
}
