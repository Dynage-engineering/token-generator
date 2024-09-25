import { Token as TToken } from "../api/token/Token";

export const TOKEN_TITLE_FIELD = "token_name";

export const TokenTitle = (record: TToken): string => {
  return record.token_name?.toString() || String(record.id);
};
