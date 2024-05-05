import { useMediaQuery, Theme, Stack  } from "@mui/material";
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
} from "react-admin";

const listFilters = [
  <SearchInput source="q" alwaysOn />,  
  <TextInput label="Data de Liberação" source="title" defaultValue="Data de Liberacao" />,
];


export const ItemList = () => {  
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={listFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nomeCliente}
          secondaryText={(record) => record.equipamentoModelo}
          tertiaryText={(record) => record.descricao}
        />
      ) : (
        <Datagrid rowClick="edit">          
          {/* <TextField source="id" disabled/> */}
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

