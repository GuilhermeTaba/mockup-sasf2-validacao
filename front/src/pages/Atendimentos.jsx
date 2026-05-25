import { useState } from 'react';
import Layout from '../components/Layout';
import './Atendimentos.css';

const ATENDIMENTOS = [
  { id: 'AT-2026-0187', familia: 'Família Oliveira', tecnico: 'Ana Silva',     tipo: 'Visita domiciliar',  data: '12/06/2026', status: 'concluido' },
  { id: 'AT-2026-0186', familia: 'Família Lima',     tecnico: 'Ana Silva',     tipo: 'Acompanhamento',     data: '12/06/2026', status: 'andamento' },
  { id: 'AT-2026-0185', familia: 'Família Souza',    tecnico: 'Carlos Mendes', tipo: 'Entrevista social',  data: '11/06/2026', status: 'concluido' },
  { id: 'AT-2026-0184', familia: 'Família Costa',    tecnico: 'Carlos Mendes', tipo: 'Encaminhamento',     data: '11/06/2026', status: 'pendente'  },
  { id: 'AT-2026-0183', familia: 'Família Pereira',  tecnico: 'Beatriz Rocha', tipo: 'Visita domiciliar',  data: '10/06/2026', status: 'concluido' },
  { id: 'AT-2026-0182', familia: 'Família Almeida',  tecnico: 'Elisa Tavares', tipo: 'Acompanhamento',     data: '10/06/2026', status: 'pendente'  },
  { id: 'AT-2026-0181', familia: 'Família Ribeiro',  tecnico: 'Ana Silva',     tipo: 'Entrevista social',  data: '09/06/2026', status: 'concluido' },
  { id: 'AT-2026-0180', familia: 'Família Mendes',   tecnico: 'Beatriz Rocha', tipo: 'Encaminhamento',     data: '09/06/2026', status: 'andamento' },
];

const STATUS = {
  concluido: { label: 'Concluído',   bg: '#dcfce7', color: '#166534' },
  andamento:  { label: 'Em andamento',bg: '#dbeafe', color: '#1d4ed8' },
  pendente:   { label: 'Pendente',   bg: '#fef3c7', color: '#92400e' },
};

const Atendimentos = () => {
  const [filtro, setFiltro] = useState('todos');

  const lista = filtro === 'todos' ? ATENDIMENTOS : ATENDIMENTOS.filter(a => a.status === filtro);

  return (
    <Layout>
      <div className="at-header">
        <div>
          <h1 className="page-title">Atendimentos</h1>
          <p className="at-sub">Registro de atendimentos da unidade Chico Mendes — 2026</p>
        </div>
        <button className="btn-primary">+ Novo atendimento</button>
      </div>

      {/* MINI STATS */}
      <div className="at-stats">
        {[
          { label: 'Total no mês', value: 187, accent: '#1d4ed8' },
          { label: 'Concluídos',   value: 142, accent: '#22c55e' },
          { label: 'Em andamento', value: 31,  accent: '#3b82f6' },
          { label: 'Pendentes',    value: 14,  accent: '#f59e0b' },
        ].map(s => (
          <div key={s.label} className="at-stat" style={{ borderLeftColor: s.accent }}>
            <span className="at-stat-label">{s.label}</span>
            <span className="at-stat-value" style={{ color: s.accent }}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* FILTROS */}
      <div className="at-filters">
        {['todos','concluido','andamento','pendente'].map(f => (
          <button
            key={f}
            className={`at-filter-btn${filtro === f ? ' active' : ''}`}
            onClick={() => setFiltro(f)}
          >
            {{ todos: 'Todos', concluido: 'Concluídos', andamento: 'Em andamento', pendente: 'Pendentes' }[f]}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="table-card">
        <table className="at-table">
          <thead>
            <tr>
              <th>Nº atendimento</th>
              <th>Família</th>
              <th>Técnico</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {lista.map(a => (
              <tr key={a.id} className="data-row">
                <td><span className="at-id">{a.id}</span></td>
                <td><span className="at-familia">{a.familia}</span></td>
                <td><span className="tecnico-badge">{a.tecnico}</span></td>
                <td className="muted">{a.tipo}</td>
                <td className="muted">{a.data}</td>
                <td>
                  <span
                    className="status-chip"
                    style={{ background: STATUS[a.status].bg, color: STATUS[a.status].color }}
                  >
                    {STATUS[a.status].label}
                  </span>
                </td>
                <td>
                  <button className="action-edit">Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Atendimentos;
