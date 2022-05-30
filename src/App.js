import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";

import RoutesConfig from "./config/RoutesConfig";

import Home from "./pages/Home";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header />
            <RoutesConfig />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
