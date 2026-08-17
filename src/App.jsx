import { useState } from "react";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Portfolio } from "./pages/portfolio";
import { Navbar } from "./navbar";
import "./index.css";

export function App() {
  const [pagina, setPagina] = useState('home') // pode ser 'home', 'sobre' ou 'portfolio'

  return (
    <div>
      {/* a Navbar recebe a página atual e uma função pra trocar de página */}
      <Navbar pagina={pagina} mudarPagina={setPagina} />

      <div className="container">
        {pagina === 'home' && <Home />}
        {pagina === 'sobre' && <Sobre />}
        {pagina === 'portfolio' && <Portfolio />}
      </div>
    </div>
  )
}
