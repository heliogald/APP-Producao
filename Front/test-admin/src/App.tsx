import {
  Admin,
  Resource,
} from "react-admin";

import ItemIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { dataProvider } from "./dataProvider";
import  authProvider  from "./authProvider";

import { ItemList, ItemCreate, ItemEdit, ItemShow} from "./itens/index";
import { ClienteList, ClienteCreate, ClienteEdit, ClienteShow} from "./clientes/index";
import { UsuariosList, UsuariosCreate, UsuariosEdit, UsuariosShow} from "./usuarios/index";



export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider }>
    <Resource
      name="item"
      list={ItemList}
      create={ItemCreate}
      edit={ItemEdit}
      show={ItemShow}      
      recordRepresentation="name"
      icon={ItemIcon}            
    />
    <Resource
      name="cliente"
      list={ClienteList}
      create={ClienteCreate}
      edit={ClienteEdit}
      show={ClienteShow}      
      recordRepresentation="name"
      icon={ItemIcon}            
    />
    <Resource
      name="usuario"
      list={UsuariosList}
      create={UsuariosCreate}
      edit={UsuariosEdit}
      show={UsuariosShow}      
      recordRepresentation="name"
      icon={ItemIcon}            
    />
  </Admin>
);
