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
  'Técnica':    '#dbeafe',
  'Técnico':    '#dbeafe',
  'Admin':      '#fef3c7',
  'Orientador': '#dcfce7',
};
const TIPO_TEXT = {
  'Técnica':    '#1d4ed8',
  'Técnico':    '#1d4ed8',
  'Admin':      '#92400e',
  'Orientador': '#166534',
};

const TABS = ['Usuários','Permissões','Unidades','Logs de acesso','Configurações'];

const PainelAdmin = () => {
  const [tab, setTab] = useState('Usuários');

  return (
    <Layout>
      <div className="pa-header">
        <div>
          <h1 className="page-title">Painel de admin</h1>
          <p className="page-sub">Gerencie usuários, permissões e acessos do sistema</p>
        </div>
        <button className="btn-primary">+ Novo usuário</button>
      </div>

      {/* TABS */}
      <div className="pa-tabs">
        {TABS.map(t => (
          <button
            key={t}
            className={`pa-tab${tab === t ? ' pa-tab--active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* MINI STATS */}
      <div className="pa-stats">
        {[
          { label: 'Total de usuários', value: 18, accent: '#3b82f6' },
          { label: 'Administradores',   value: 2,  accent: '#f59e0b' },
          { label: 'Técnicos',          value: 12, accent: '#3b82f6' },
          { label: 'Orientadores',      value: 4,  accent: '#3b82f6' },
          { label: 'Ativos hoje',       value: 11, accent: '#3b82f6' },
        ].map(s => (
          <div key={s.label} className="pa-stat">
            <span className="pa-stat-label">{s.label}</span>
            <span className="pa-stat-value" style={{ color: s.accent }}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="table-card">
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
            {USUARIOS.map(u => (
              <tr key={u.id} className="data-row">
                <td>
                  <div className="pa-user-cell">
                    <div className="pa-avatar" style={{ background: u.color }}>
                      {u.inicial}
                    </div>
                    <div className="pa-user-info">
                      <span className="pa-user-name">{u.nome}</span>
                      <span className="pa-user-id muted">{u.id}</span>
                    </div>
                  </div>
                </td>
                <td className="muted">{u.email}</td>
                <td>
                  <span
                    className="tipo-badge"
                    style={{ background: TIPO_COLOR[u.tipo], color: TIPO_TEXT[u.tipo] }}
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
      </div>
    </Layout>
  );
};

export default PainelAdmin;
