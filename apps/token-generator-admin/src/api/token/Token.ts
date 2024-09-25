import { User } from "../user/User";

export type Token = {
  chain: string;
  createdAt: Date;
  createdBy?: User | null;
  description: string | null;
  id: string;
  initialPrice: number;
  quantity: number;
  socials?: "Twitter" | "Telegram" | "Website" | "Discord" | null;
  symbolField: string;
  token_name: string;
  updatedAt: Date;
  walletAddress: string;
};
