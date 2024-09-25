import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";

export type TokenWhereInput = {
  chain?: StringFilter;
  createdBy?: UserWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  initialPrice?: FloatFilter;
  quantity?: IntFilter;
  socials?: "Twitter" | "Telegram" | "Website" | "Discord";
  symbolField?: StringFilter;
  token_name?: StringFilter;
  walletAddress?: StringFilter;
};
