import { useState } from 'react';
import Layout from '../components/Layout';
import './PainelAdmin.css';

const USUARIOS = [
  { id: '#1000', nome: 'Ana Silva',       email: 'ana.silva@sasf.org.br',       tipo: 'Técnica',    acesso: 'hoje, 09:12',  inicial: 'A', color: '#1d4ed8' },
  { id: '#1001', nome: 'Carlos Mendes',   email: 'carlos.mendes@sasf.org.br',   tipo: 'Admin',      acesso: 'hoje, 07:40',  inicial: 'C', color: '#f59e0b' },
  { id: '#1002', nome: 'Beatriz Rocha',   email: 'beatriz.rocha@sasf.org.br',   tipo: 'Técnica',    acesso: 'ontem, 17:55', inicial: 'B', color: '#3b82f6' },
  { id: '#1003', nome: 'Diego Farias',    email: 'diego.farias@sasf.org.br',    tipo: 'Orientador', acesso: 'ontem, 18:10', inicial: 'D', color: '#8b5cf6' },
  { id: '#1004', nome: 'Elisa Tavares',   email: 'elisa.tavares@sasf.org.br',   tipo: 'Técnica',    acesso: '10/06, 09:22', inicial: 'E', color: '#06b6d4' },
  { id: '#1005', nome: 'Fábio Nunes',     email: 'fabio.nunes@sasf.org.br',     tipo: 'Técnico',    acesso: '02/06, 14:00', inicial: 'F', color: '#22c55e' },
  { id: '#1006', nome: 'Gabriela Lopes',  email: 'gabriela.lopes@sasf.org.br',  tipo: 'Orientador', acesso: '09/06, 11:30', inicial: 'G', color: '#f97316' },
  { id: '#1007', nome: 'Hugo Almeida',    email: 'hugo.almeida@sasf.org.br',    tipo: 'Admin',      acesso: '11/06, 18:45', inicial: 'H', color: '#ef4444' },
];

const TIPO_COLOR = {
  'Técnica':    { bg: '#dbeafe', color: '#1d4ed8' },
  'Técnico':    { bg: '#dbeafe', color: '#1d4ed8' },
  'Admin':      { bg: '#fef3c7', color: '#92400e' },
  'Orientador': { bg: '#dcfce7', color: '#166534' },
};

const TABS = ['Usuários', 'Permissões', 'Unidades', 'Logs de acesso'];

const statCards = [
  { label: 'Total de usuários', value: 18, accent: '#3b82f6', iconBg: '#dbeafe', iconColor: '#2563eb',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { label: 'Administradores',   value: 2,  accent: '#f59e0b', iconBg: '#fef3c7', iconColor: '#d97706',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: 'Técnicos',          value: 12, accent: '#3b82f6', iconBg: '#dbeafe', iconColor: '#2563eb',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { label: 'Orientadores',      value: 4,  accent: '#22c55e', iconBg: '#dcfce7', iconColor: '#16a34a',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
  { label: 'Ativos hoje',       value: 11, accent: '#1d4ed8', iconBg: '#dbeafe', iconColor: '#2563eb',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
];

const PainelAdmin = () => {
  const [tab, setTab] = useState('Usuários');
  const [search, setSearch] = useState('');

  const lista = USUARIOS.filter(u =>
    !search ||
    u.nome.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.tipo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      {/* ── HEADER ── */}
      <div className="page-header">
        <div>
          <p className="page-section">Administração</p>
          <h1 className="page-title">Painel de admin</h1>
          <p className="page-sub">Gerencie usuários, permissões e acessos do sistema</p>
        </div>
        <button className="btn-primary">+ Novo usuário</button>
      </div>

      {/* ── STAT CARDS ── */}
      <div className="pa-stats-row">
        {statCards.map(s => (
          <div key={s.label} className="pa-stat-card" style={{ borderTopColor: s.accent }}>
            <div className="stat-card-top">
              <span className="pa-stat-label">{s.label}</span>
              <div className="stat-icon" style={{ background: s.iconBg, color: s.iconColor }}>{s.icon}</div>
            </div>
            <span className="pa-stat-value" style={{ color: s.accent }}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* ── TABS ── */}
      <div className="tabs">
        {TABS.map(t => (
          <button
            key={t}
            className={`tab${tab === t ? ' tab--active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── TABLE ── */}
      <div className="table-card">
        <div className="table-toolbar">
          <div className="toolbar-search">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="#9ca3af" strokeWidth="1.6"/>
              <path d="M13 13l3.5 3.5" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar usuário..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="toolbar-spacer" />
          <button className="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Exportar
          </button>
        </div>

        <table className="pa-table">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>E-mail / login</th>
              <th>Tipo</th>
              <th>Último acesso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {lista.map(u => (
              <tr key={u.id} className="data-row">
                <td>
                  <div className="pa-user-cell">
                    <div className="pa-avatar" style={{ background: u.color }}>{u.inicial}</div>
                    <div className="pa-user-info">
                      <span className="pa-user-name">{u.nome}</span>
                      <span className="pa-user-id">{u.id}</span>
                    </div>
                  </div>
                </td>
                <td className="muted">{u.email}</td>
                <td>
                  <span
                    className="status-chip"
                    style={{ background: TIPO_COLOR[u.tipo].bg, color: TIPO_COLOR[u.tipo].color }}
                  >
                    {u.tipo}
                  </span>
                </td>
                <td className="muted">{u.acesso}</td>
                <td>
                  <div className="actions-cell">
                    <button className="action-edit">Editar</button>
                    <button className="action-remove">Remover</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span className="pagination-info">Exibindo {lista.length} de 18 usuários</span>
          <div className="pagination-btns">
            <button className="page-btn disabled">‹</button>
            <button className="page-btn page-btn--active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">›</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PainelAdmin;
