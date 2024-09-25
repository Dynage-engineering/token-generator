import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TokenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="wallet address" source="walletAddress" />
      </SimpleShowLayout>
    </Show>
  );
};
