import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./src/pages/PaginaPrincipal/PaginaPrincipal";
import Header from "./src/components/Cabecario/Header";
import HOME from "./src/pages/Home/hOME.JSX";
function Routesapp() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<HOME/>}/>
    <Route path="/Pizzas" element={<PaginaPrincipal/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default Routesapp;
