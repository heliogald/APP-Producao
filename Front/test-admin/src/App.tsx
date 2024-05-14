import { Admin, Resource } from "react-admin";

import produtoIcon from "@mui/icons-material/Book";

import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";

import { produtoList, produtoCreate, produtoEdit, produtoShow } from "./produtos/index";
import {
  ClienteList,
  ClienteCreate,
  ClienteEdit,
  ClienteShow,
} from "./clientes/index";
import {
  UsuariosList,
  UsuariosCreate,
  UsuariosEdit,
  UsuariosShow,
} from "./usuarios/index";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="produto"
      list={produtoList}
      create={produtoCreate}
      edit={produtoEdit}
      show={produtoShow}
      recordRepresentation="name"
      icon={produtoIcon}
    />
    <Resource
      name="cliente"
      list={ClienteList}
      create={ClienteCreate}
      edit={ClienteEdit}
      show={ClienteShow}
      recordRepresentation="name"
      icon={produtoIcon}
    />
    <Resource
      name="usuario"
      list={UsuariosList}
      create={UsuariosCreate}
      edit={UsuariosEdit}
      show={UsuariosShow}
      recordRepresentation="name"
      icon={produtoIcon}
    />
  </Admin>
);
