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
  useRecordContext,
  SimpleShowLayout,
  EditButton,
  ReferenceInput,
} from "react-admin";

const listFilters = [
  // eslint-disable-next-line react/jsx-key
  <SearchInput source="q" alwaysOn />,
  // eslint-disable-next-line react/jsx-key
  <TextInput label="equipamentoModelo" source="title" defaultValue="equipamentoModelo" />,
];

export const equipamentoList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={listFilters}>
      {isSmall ? (
        <SimpleList primaryText={(record) => record.equipamentoModelo} />
      ) : (
        <Datagrid rowClick="edit">
          {/* <TextField source="id" disabled/> */}
          <TextField source="equipamentoModelo" />          
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const equipamentoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="equipamentoModelo" label="Equipamento" />     
    </SimpleForm>
  </Create>
);

const PageTitles = () => {
  const record = useRecordContext();
  return <>Edit `{record?.equipamentoModelo}`</>;
};

export const equipamentoEdit = () => (
  <Edit title={<PageTitles />}>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <ReferenceInput source="equipamentoModelo" reference="equipamento">
        <SelectInput
          optionText="equipamentoModelo"
          optionValue="equipamentoModelo" // Define o valor nomeCliente como o valor selecionado
        />
      </ReferenceInput>      
    </SimpleForm>
  </Edit>
);

export const equipamentoShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="equipamentoModelo" />      
    </SimpleShowLayout>
  </Show>
);
