import logo from "./logo.svg";
import "./App.css";
import Preloader from "./components/Common/Preloader";
import Header from "./components/Common/Header";
import Router from "./router/Router";
import Footer from "./components/Common/Footer";
import * as ReactRouter from "react-router-dom";
const { BrowserRouter, Routes, Route } = ReactRouter;
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
