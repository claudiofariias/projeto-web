import './App.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="container">
          <div className="nav-inner glass">
            <div className="brand">
              <div className="brand-mark" aria-hidden />
              <div className="brand-name">Roxo</div>
            </div>
            <nav className="nav-links" aria-label="Navegação principal">
              <a href="#inicio">Início</a>
              <a href="#recursos">Recursos</a>
              <a href="#contato">Contato</a>
            </nav>
            <div className="nav-cta">
              <button className="btn btn-outline">Entrar</button>
              <button className="btn btn-primary">Começar</button>
            </div>
          </div>
        </div>
      </header>

      <main className="hero">
        <div className="container">
          <span className="badge">Novo • Tema Roxo Claro</span>
          <h1>
            Um design limpo e moderno com
            {' '}<span className="gradient-text">toque roxo</span>
          </h1>
          <p className="subtitle">
            Interface responsiva, tipografia clara e componentes elegantes. Pronto para personalizar e escalar.
          </p>
          <div className="actions">
            <button className="btn btn-primary">Explorar agora</button>
            <button className="btn btn-outline">Ver documentação</button>
          </div>

          <section className="hero-card glass shadow-brand">
            <div className="features" id="recursos">
              <div className="feature">
                <div className="feature-title">Pronto para usar</div>
                <div className="feature-desc">Estrutura inicial com estilos globais e componentes básicos.</div>
              </div>
              <div className="feature">
                <div className="feature-title">Responsivo</div>
                <div className="feature-desc">Layout fluido e tipografia adaptativa para qualquer tela.</div>
              </div>
              <div className="feature">
                <div className="feature-title">Acessível</div>
                <div className="feature-desc">Semântica e contraste pensados para leitura e navegação.</div>
              </div>
            </div>
            <div className="preview">
              Área de preview • adicione seu conteúdo aqui
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <span className="made">Feito com</span> <span className="love">React + Roxo</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
