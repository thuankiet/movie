import "./App.css";

import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import RoutesConfig from "./config/RoutesConfig";

import Home from "./pages/Home";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
    <Route render={props => (
        <RoutesConfig/>
    )}/>
</BrowserRouter>
  );
}

export default App;
