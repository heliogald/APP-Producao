import { useMediaQuery, Theme, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/MailOutline";
import CategoryIcon from "@mui/icons-material/LocalOffer";
import {
  Datagrid,
  SearchInput,
  List,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  Edit,
  Show,
  SimpleList,
  DateField,
  useRecordContext,
  SimpleShowLayout,
  EditButton,
  PasswordInput,
} from "react-admin";

const listFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="nome" source="title" defaultValue="nome" />,
];

export const UsuariosList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={listFilters}>
      {isSmall ? (
        <SimpleList primaryText={(record) => record.nome} />
      ) : (
        <Datagrid rowClick="edit">
          {/* <TextField source="id" disabled/> */}
          <TextField source="nome" />
          <TextField source="email" />
          <TextField source="usuario" />
          <TextField source="senha" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const UsuariosCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="nome" />
      <TextInput source="email" />
      <TextInput source="usuario" />
      <PasswordInput source="senha" />
    </SimpleForm>
  </Create>
);

const PageTitles = () => {
  const record = useRecordContext();
  return <>Edit "{record?.nome}"</>;
};

export const UsuariosEdit = () => (
  <Edit title={<PageTitles />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="nome" />
      <TextInput source="email" />
      <TextInput source="usuario" />
      <PasswordInput source="senha" />
    </SimpleForm>
  </Edit>
);

export const UsuariosShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextInput source="nome" />
      <TextInput source="email" />
      <TextInput source="usuario" />
      <TextInput source="senha" />
    </SimpleShowLayout>
  </Show>
);
