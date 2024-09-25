import { JsonValue } from "type-fest";
import { Token } from "../token/Token";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tokens?: Token | null;
  updatedAt: Date;
  username: string;
};
