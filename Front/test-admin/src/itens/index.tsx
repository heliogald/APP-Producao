import { useMediaQuery, Theme, Card, CardContent,Chip } from "@mui/material";
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';
import {
  Datagrid,
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
  EditButton  
} from "react-admin";

export const ItemList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={postFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nomeCliente}
          secondaryText={(record) => record.equipamentoModelo}
          tertiaryText={(record) => record.descricao}
        />
      ) : (
        <Datagrid rowClick="edit">
          {/* <ReferenceField source="Void" reference="nomeCliente" /> */}
          <TextField source="id" desabled/>             
          <TextField source="nomeCliente" />
          <TextField source="equipamentoModelo" />
          <TextField source="numeroDeSerie" />
          <TextField source="dataDeLiberacao" />
          <TextField source="codigo" />
          <TextField source="descricao" />
          <TextField source="quantidade" />
          <TextField source="void" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const ItemCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="nomeCliente" />
      <TextInput source="equipamentoModelo" />
      <TextInput source="numeroDeSerie" />
      <DateInput source="dataDeLiberacao" />
      <TextInput source="codigo" />
      <TextInput source="descricao" />
      <TextInput source="quantidade" />
      <TextInput source="void" />
    </SimpleForm>
  </Create>
);

const PageTitles = () => {
  const record = useRecordContext();
  return <>Edit "{record?.nomeCliente}"</>;
};

export const ItemEdit = () => (
  <Edit title={<PageTitles />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="nomeCliente" />
      <TextInput source="equipamentoModelo" />
      <TextInput source="numeroDeSerie" />
      <DateInput source="dataDeLiberacao" required />
      <TextInput source="codigo" />
      <TextInput source="descricao" />
      <TextInput source="quantidade" />
      <TextInput source="void" />
    </SimpleForm>
  </Edit>
);

export const ItemShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="nomeCliente" />
      <TextField source="equipamentoModelo" />
      <TextField source="numeroDeSerie" />
      <TextField source="dataDeLiberacao" />
      <DateField source="codigo" />
      <TextField source="descricao" />
      <TextField source="quantidade" />
      <TextField source="void" />
    </SimpleShowLayout>
  </Show>
);



const postFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="void" source="title" defaultValue="0" />,
 ];