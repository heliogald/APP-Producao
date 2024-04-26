import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  jsonServerRestClient,
} from "react-admin";

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { ItemList, ItemCreate, ItemEdit, ItemShow} from "./itens/index";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="item"
      list={ItemList}
      create={ItemCreate}
      edit={ItemEdit}
      show={ItemShow}      
      recordRepresentation="name"      
    />
  </Admin>
);
