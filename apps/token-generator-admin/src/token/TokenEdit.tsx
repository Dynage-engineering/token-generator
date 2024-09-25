import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="chain" source="chain" />
        <ReferenceInput
          source="createdBy.id"
          reference="User"
          label="created_by"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="initial price" source="initialPrice" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <SelectInput
          source="socials"
          label="socials"
          choices={[
            { label: "twitter", value: "Twitter" },
            { label: "telegram", value: "Telegram" },
            { label: "website", value: "Website" },
            { label: "discord", value: "Discord" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="symbol" source="symbolField" />
        <TextInput label="name" source="token_name" />
        <TextInput label="wallet address" source="walletAddress" />
      </SimpleForm>
    </Edit>
  );
};
