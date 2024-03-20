import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Estamos desarollando una mejor version..." />
    </>
  );
}

export default App;
