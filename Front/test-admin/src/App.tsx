import { Admin, Resource } from "react-admin";

import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/LocalOffer";

import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import { MyLoginPage } from "./MyLoginPage";

import {
  produtoList,
  produtoCreate,
  produtoEdit,
  produtoShow,
} from "./produtos/index";
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
import { pecaList, pecaCreate, pecaEdit, pecaShow } from "./pecas/index";
import {
  equipamentoList,
  equipamentoCreate,
  equipamentoEdit,
  equipamentoShow,
} from "./equipamentos/index";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={MyLoginPage}>
    <Resource
      name="produto"
      list={produtoList}
      create={produtoCreate}
      edit={produtoEdit}
      show={produtoShow}
      recordRepresentation="name"
      icon={DashboardIcon}
    />
    <Resource
      name="cliente"
      list={ClienteList}
      create={ClienteCreate}
      edit={ClienteEdit}
      show={ClienteShow}
      recordRepresentation="name"
      icon={PeopleIcon}
    />
    <Resource
      name="usuario"
      list={UsuariosList}
      create={UsuariosCreate}
      edit={UsuariosEdit}
      show={UsuariosShow}
      recordRepresentation="name"
      icon={PeopleIcon}
    />
    <Resource
      name="peca"
      list={pecaList}
      create={pecaCreate}
      edit={pecaEdit}
      show={pecaShow}
      recordRepresentation="name"
      icon={CategoryIcon}
    />
    <Resource
      name="equipamento"
      list={equipamentoList}
      create={equipamentoCreate}
      edit={equipamentoEdit}
      show={equipamentoShow}
      recordRepresentation="name"
      icon={CategoryIcon}
    />
  </Admin>
);
