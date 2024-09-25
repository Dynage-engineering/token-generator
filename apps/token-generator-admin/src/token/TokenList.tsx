import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TokenList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Tokens"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="chain" source="chain" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="created_by" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="initial price" source="initialPrice" />
        <TextField label="quantity" source="quantity" />
        <TextField label="socials" source="socials" />
        <TextField label="symbol" source="symbolField" />
        <TextField label="name" source="token_name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wallet address" source="walletAddress" />{" "}
      </Datagrid>
    </List>
  );
};
