import './App.css';
import './index.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <main className="hero">
      <div className="container">
        <span className="badge">Novo • Tema Roxo Claro</span>
        <h1>
          Um design limpo e moderno com{' '}
          <span className="gradient-text">toque roxo</span>
        </h1>
        <p className="subtitle">
          Interface responsiva, tipografia clara e componentes elegantes. Pronto para personalizar e escalar.
        </p>
        <div className="actions">
          <Link to="/alunos" className="btn btn-primary">Gerenciar alunos</Link>
          <Link to="/disciplinas" className="btn btn-outline">Gerenciar disciplinas</Link>
        </div>

        <section className="hero-card glass shadow-brand">
          <div className="features" id="recursos">
            <div className="feature">
              <div className="feature-title">CRUD simples</div>
              <div className="feature-desc">Cadastre, edite e remova alunos e disciplinas.</div>
            </div>
            <div className="feature">
              <div className="feature-title">Layout consistente</div>
              <div className="feature-desc">Mesma linguagem visual em todas as páginas.</div>
            </div>
            <div className="feature">
              <div className="feature-title">Responsivo e acessível</div>
              <div className="feature-desc">Controles com bom contraste e feedbacks visuais.</div>
            </div>
          </div>
          <div className="preview">
            Área de preview • adicione seu conteúdo aqui
          </div>
        </section>
      </div>
    </main>
  );
}

function PageLayout({ children }) {
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
              <NavLink to="/" end>Início</NavLink>
              <NavLink to="/alunos">Alunos</NavLink>
              <NavLink to="/disciplinas">Disciplinas</NavLink>
            </nav>
            <div className="nav-cta">
              <button className="btn btn-outline">Entrar</button>
              <button className="btn btn-primary">Começar</button>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container">
          <span className="made">Feito com</span> <span className="love">React + Roxo</span>
        </div>
      </footer>
    </div>
  );
}

function PageScaffold({ title, subtitle, toolbar, children }) {
  return (
    <main className="hero">
      <div className="container">
        <span className="badge">Cadastro</span>
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {toolbar && <div className="actions">{toolbar}</div>}
        <section className="hero-card glass shadow-brand">
          {children}
        </section>
      </div>
    </main>
  );
}

function AlunosPage() {
  return (
    <PageScaffold
      title={<><span className="gradient-text">Alunos</span></>}
      subtitle="Gerencie o cadastro de alunos"
      toolbar={<>
        <button className="btn btn-primary">Novo aluno</button>
        <button className="btn btn-outline">Exportar</button>
      </>}
    >
      <div className="grid gap">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="form-item">
              <label>Nome completo</label>
              <input type="text" placeholder="Ex.: Ana Silva" />
            </div>
            <div className="form-item">
              <label>Matrícula</label>
              <input type="text" placeholder="Ex.: 2024-0001" />
            </div>
            <div className="form-item">
              <label>E-mail</label>
              <input type="email" placeholder="Ex.: ana@exemplo.com" />
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">Salvar</button>
            <button className="btn btn-outline" type="reset">Limpar</button>
          </div>
        </form>

        <div className="table-card">
          <div className="table-head">
            <input className="search" placeholder="Buscar alunos..." />
          </div>
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Matrícula</th>
                  <th>E-mail</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ana Silva</td>
                  <td>2024-0001</td>
                  <td>ana@example.com</td>
                  <td>
                    <button className="btn btn-outline">Editar</button>
                    <button className="btn btn-outline">Remover</button>
                  </td>
                </tr>
                <tr>
                  <td>Bruno Costa</td>
                  <td>2024-0002</td>
                  <td>bruno@example.com</td>
                  <td>
                    <button className="btn btn-outline">Editar</button>
                    <button className="btn btn-outline">Remover</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageScaffold>
  );
}

function DisciplinasPage() {
  return (
    <PageScaffold
      title={<><span className="gradient-text">Disciplinas</span></>}
      subtitle="Gerencie o cadastro de disciplinas"
      toolbar={<>
        <button className="btn btn-primary">Nova disciplina</button>
        <button className="btn btn-outline">Exportar</button>
      </>}
    >
      <div className="grid gap">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="form-item">
              <label>Nome da disciplina</label>
              <input type="text" placeholder="Ex.: Cálculo I" />
            </div>
            <div className="form-item">
              <label>Código</label>
              <input type="text" placeholder="Ex.: MAT101" />
            </div>
            <div className="form-item">
              <label>Carga horária</label>
              <input type="number" placeholder="Ex.: 60" />
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">Salvar</button>
            <button className="btn btn-outline" type="reset">Limpar</button>
          </div>
        </form>

        <div className="table-card">
          <div className="table-head">
            <input className="search" placeholder="Buscar disciplinas..." />
          </div>
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Código</th>
                  <th>Carga horária</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cálculo I</td>
                  <td>MAT101</td>
                  <td>60</td>
                  <td>
                    <button className="btn btn-outline">Editar</button>
                    <button className="btn btn-outline">Remover</button>
                  </td>
                </tr>
                <tr>
                  <td>Estruturas de Dados</td>
                  <td>INF205</td>
                  <td>80</td>
                  <td>
                    <button className="btn btn-outline">Editar</button>
                    <button className="btn btn-outline">Remover</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageScaffold>
  );
}

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alunos" element={<AlunosPage />} />
        <Route path="/disciplinas" element={<DisciplinasPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
