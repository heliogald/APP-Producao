import { useMediaQuery, Theme, Stack  } from "@mui/material";
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
} from "react-admin";

const listFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Void" source="title" defaultValue="Void" />,
];


export const ClienteList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={listFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nomeCliente}         
        />
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

