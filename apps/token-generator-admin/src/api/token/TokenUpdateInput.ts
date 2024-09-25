import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenUpdateInput = {
  chain?: string;
  createdBy?: UserWhereUniqueInput | null;
  description?: string | null;
  initialPrice?: number;
  quantity?: number;
  socials?: "Twitter" | "Telegram" | "Website" | "Discord" | null;
  symbolField?: string;
  token_name?: string;
  walletAddress?: string;
};
