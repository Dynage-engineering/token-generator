import { InputJsonValue } from "../../types";
import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tokens?: TokenWhereUniqueInput | null;
  username: string;
};
