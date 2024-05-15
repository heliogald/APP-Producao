import { useMediaQuery, Theme} from "@mui/material";
import {
  Datagrid,
  SearchInput,
  List,
  TextField,
  Create,
  SimpleForm,
  TextInput,  
  Edit,
  Show,
  SimpleList,  
  useRecordContext,
  SimpleShowLayout,
  EditButton,
} from "react-admin";

const listFilters = [
  // eslint-disable-next-line react/jsx-key
  <SearchInput source="q" alwaysOn />,
  // eslint-disable-next-line react/jsx-key
  <TextInput label="Void" source="title" defaultValue="Void" />,
];

export const ClienteList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={listFilters}>
      {isSmall ? (
        <SimpleList primaryText={(record) => record.nomeCliente} />
      ) : (
        <Datagrid rowClick="edit">
          {/* <TextField source="id" disabled/> */}
          <TextField source="nomeCliente" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const ClienteCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="nomeCliente" />
    </SimpleForm>
  </Create>
);

const PageTitles = () => {
  const record = useRecordContext();
  return <>Edit "{record?.nomeCliente}"</>;
};

export const ClienteEdit = () => (
  <Edit title={<PageTitles />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="nomeCliente" />
    </SimpleForm>
  </Edit>
);

export const ClienteShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="nomeCliente" />
    </SimpleShowLayout>
  </Show>
);
