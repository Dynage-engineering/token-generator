import { SortOrder } from "../../util/SortOrder";

export type TokenOrderByInput = {
  chain?: SortOrder;
  createdAt?: SortOrder;
  created_by?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  initialPrice?: SortOrder;
  quantity?: SortOrder;
  socials?: SortOrder;
  symbolField?: SortOrder;
  token_name?: SortOrder;
  updatedAt?: SortOrder;
  walletAddress?: SortOrder;
};
