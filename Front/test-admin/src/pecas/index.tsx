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
  Edit,
  Show,
  SimpleList,
  DateField,
  useRecordContext,
  SimpleShowLayout,
  EditButton,
  ReferenceInput,
} from "react-admin";

const listFilters = [
  // eslint-disable-next-line react/jsx-key
  <SearchInput source="q" alwaysOn />,
  // eslint-disable-next-line react/jsx-key
  <TextInput label="codigo" source="title" defaultValue="codigo" />,
];

export const pecaList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={listFilters}>
      {isSmall ? (
        <SimpleList primaryText={(record) => record.descricao} />
      ) : (
        <Datagrid rowClick="edit">
          {/* <TextField source="id" disabled/> */}
          <TextField source="codigo" />
          <TextField source="descricao" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const pecaCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="codigo" label="Código" />
      <TextInput source="descricao" label="Descricao" />
    </SimpleForm>
  </Create>
);

const PageTitles = () => {
  const record = useRecordContext();
  return <>Edit `{record?.descricao}`</>;
};

export const pecaEdit = () => (
  <Edit title={<PageTitles />}>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <ReferenceInput source="descricao" reference="peca">
        <SelectInput
          optionText="descricao"
          optionValue="descricao" // Define o valor nomeCliente como o valor selecionado
        />
      </ReferenceInput>
      <TextInput source="codigo" />
    </SimpleForm>
  </Edit>
);

export const pecaShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="codigo" />
      <TextField source="descricao" />
    </SimpleShowLayout>
  </Show>
);
