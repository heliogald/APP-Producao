import { useMediaQuery, Theme } from "@mui/material";
import {
  Datagrid,
  SearchInput,
  SelectInput,
  List,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  Edit,
  Show,
  SimpleList,  
  useRecordContext,
  SimpleShowLayout,
  EditButton,
  ReferenceInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const listFilters = [
  // eslint-disable-next-line react/jsx-key
  <SearchInput source="q" alwaysOn />,
  // eslint-disable-next-line react/jsx-key
  <TextInput
    label="Data de Liberação"
    source="title"
    defaultValue="Data de Liberacao"
  />,
];

export const produtoList = () => {
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

export const produtoCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="nomeCliente" reference="cliente">
        <SelectInput optionText="nomeCliente" optionValue="nomeCliente" />
      </ReferenceInput>
      <ReferenceInput source="equipamentoModelo" reference="equipamento">
        <SelectInput
          optionText="equipamentoModelo"
          optionValue="equipamentoModelo"
        />
      </ReferenceInput>
      <TextInput source="numeroDeSerie" label="Número de Série" />

      <DateInput source="dataDeLiberacao" label="Data de Liberação" />

      <ArrayInput source="pecas" label="Pecas">
        <SimpleFormIterator>
          <ReferenceInput source="codigo" reference="peca">
            <SelectInput optionText="codigo" optionValue="codigo" />
          </ReferenceInput>
          <ReferenceInput source="descricao" reference="peca">
            <SelectInput optionText="descricao" optionValue="descricao" />
          </ReferenceInput>
          <TextInput source="quantidade" label="Quantidade" />
          <TextInput source="void" label="Void" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

const PageTitles = () => {
  const record = useRecordContext();
  return <>Edit `{record?.nomeCliente}`</>;
};

export const produtoEdit = () => (
  <Edit title={<PageTitles />}>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <ReferenceInput source="nomeCliente" reference="cliente">
        <SelectInput
          optionText="nomeCliente"
          optionValue="nomeCliente" // Define o valor nomeCliente como o valor selecionado
        />
      </ReferenceInput>
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

export const produtoShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="nomeCliente" />
      <TextField source="equipamentoModelo" />
      <TextField source="numeroDeSerie" />
      <TextField source="dataDeLiberacao" />
      <TextField source="codigo" />
      <TextField source="descricao" />
      <TextField source="quantidade" />
      <TextField source="void" />
    </SimpleShowLayout>
  </Show>
);
