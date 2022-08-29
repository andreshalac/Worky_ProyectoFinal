import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Inicio_sesion } from "./pages/inicio-sesion";
import { Single } from "./pages/single";
import { Homeconregistro } from "./pages/home-con-registro";
import { Registro } from "./pages/registro";
import { RegistroEmpresas } from "./pages/registroEmpresas";

import { Crear_oferta } from "./pages/crear-oferta";
import { Ofertas_empleo } from "./pages/ofertas-empleo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Inicio_sesion />} path="/inicio-sesion" />
            <Route element={<Homeconregistro />} path="/home-con-registro" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<RegistroEmpresas />} path="/registroEmpresas" />
            <Route element={<Crear_oferta />} path="/crear-oferta" />
            <Route element={<Ofertas_empleo />} path="/ofertas-empleo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
