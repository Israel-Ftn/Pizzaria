import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./src/pages/PaginaPrincipal/PaginaPrincipal";
import Header from "./src/components/Cabecario/Header";
import HOME from "./src/pages/Home/hOME.JSX";
import FormPagamento from "./src/pages/Formulario/FormPagamento";
import Footer from "./src/components/Footer/Footer";
function Routesapp() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<HOME/>}/>
    <Route path="/Pizzas" element={<PaginaPrincipal/>}/>
    <Route path="/Formulario" element={<FormPagamento/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default Routesapp;
