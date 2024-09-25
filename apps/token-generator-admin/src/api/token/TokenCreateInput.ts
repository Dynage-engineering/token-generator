import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenCreateInput = {
  chain: string;
  createdBy?: UserWhereUniqueInput | null;
  description?: string | null;
  initialPrice: number;
  quantity: number;
  socials?: "Twitter" | "Telegram" | "Website" | "Discord" | null;
  symbolField: string;
  token_name: string;
  walletAddress: string;
};
