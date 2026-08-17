export function Navbar({ pagina, mudarPagina }) {
  return (
    <nav className="navbar">

      <div className="links">
        <button
          className={pagina === 'home' ? 'link ativo' : 'link'}
          onClick={() => mudarPagina('home')}
        >
          Início
        </button>

        <button
          className={pagina === 'sobre' ? 'link ativo' : 'link'}
          onClick={() => mudarPagina('sobre')}
        >
          Sobre
        </button>

        <button
          className={pagina === 'portfolio' ? 'link ativo' : 'link'}
          onClick={() => mudarPagina('portfolio')}
        >
          Portfólio
        </button>
      </div>
    </nav>
  )
}