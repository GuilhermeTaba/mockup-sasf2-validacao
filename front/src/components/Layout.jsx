import { Link, useLocation, useNavigate } from 'react-router';
import './Layout.css';

const navItems = [
  { label: 'Dashboard',      path: '/dashboard' },
  { label: 'Famílias',       path: '/familias' },
  { label: 'Novo cadastro',  path: '/novo-cadastro' },
  { label: 'Atendimentos',   path: '/atendimentos' },
  { label: 'Painel de admin',path: '/painel-admin' },
  { label: 'Configurações',  path: '/configuracoes' },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="app-layout">
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">S</div>
          <div className="brand-text">
            <span className="brand-name">SASF</span>
            <span className="brand-unit">Chico Mendes</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link${active ? ' nav-link--active' : ''}`}
              >
                <span className={`nav-dot${active ? ' nav-dot--active' : ''}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sf-user">
            <div className="sf-avatar">AS</div>
            <div className="sf-info">
              <span className="sf-name">Ana Silva</span>
              <span className="sf-role">Assistente social</span>
            </div>
          </div>
          <button className="sair-btn" onClick={() => navigate('/')}>Sair →</button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="main-wrapper">
        <header className="topbar">
          <div className="search-wrap">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="#9ca3af" strokeWidth="1.6"/>
              <path d="M13 13l3.5 3.5" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <input className="search-input" type="text" placeholder="Pesquisar..." />
          </div>
          <div className="topbar-right">
            <button className="tb-icon-btn" title="Configurações">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="#6b7280" strokeWidth="1.6"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#6b7280" strokeWidth="1.6"/>
              </svg>
            </button>
            <button className="tb-icon-btn" title="Notificações">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#6b7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="tb-avatar">AS</div>
          </div>
        </header>

        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
