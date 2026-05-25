import { useState } from 'react';
import Layout from '../components/Layout';
import './Familias.css';

const FAMILIAS = [
  // Orientador: Ana Silva
  { id: 1,  nome: 'Família Oliveira', tecnico: 'Ana Silva',     regiao: 'Jd. Chico Mendes', membros: 5, tel: '(92) 99878-1234', status: 'inativa' },
  { id: 2,  nome: 'Família Lima',     tecnico: 'Ana Silva',     regiao: 'Vila São José',     membros: 6, tel: '(92) 98012-7799', status: 'ativa' },
  { id: 3,  nome: 'Família Ribeiro',  tecnico: 'Ana Silva',     regiao: 'Vila São José',     membros: 2, tel: '(92) 99387-0099', status: 'ativa' },
  // Técnico: Carlos Mendes
  { id: 4,  nome: 'Família Souza',    tecnico: 'Carlos Mendes', regiao: 'Jd. Chico Mendes', membros: 4, tel: '(92) 99129-4456', status: 'inativa' },
  { id: 5,  nome: 'Família Costa',    tecnico: 'Carlos Mendes', regiao: 'Vila Esperança',    membros: 5, tel: '(92) 99001-3844', status: 'acomp' },
  // Técnico: Beatriz Rocha
  { id: 6,  nome: 'Família Pereira',  tecnico: 'Beatriz Rocha', regiao: 'Centro',            membros: 3, tel: '(92) 99445-2210', status: 'ativa' },
  { id: 7,  nome: 'Família Mendes',   tecnico: 'Beatriz Rocha', regiao: 'Centro',            membros: 4, tel: '(92) 99332-7711', status: 'ativa' },
  // Técnico: Elisa Tavares
  { id: 8,  nome: 'Família Almeida',  tecnico: 'Elisa Tavares', regiao: 'Jd. Chico Mendes', membros: 7, tel: '(92) 98785-1100', status: 'inativa' },
];

const STATUS_MAP = {
  ativa:   { label: 'Ativa',             color: '#22c55e' },
  inativa: { label: 'Inativa',           color: '#ef4444' },
  acomp:   { label: 'Em acompanhamento', color: '#f59e0b' },
};

const TABS = [
  { key: 'todas', label: 'Todas',              count: 248 },
  { key: 'ativas', label: 'Ativas',            count: 212 },
  { key: 'acomp',  label: 'Em acompanhamento', count: 84  },
  { key: 'inativas',label: 'Inativas',         count: 36  },
];

const groupByTecnico = (list) => {
  const map = {};
  list.forEach(f => {
    if (!map[f.tecnico]) map[f.tecnico] = [];
    map[f.tecnico].push(f);
  });
  return map;
};

const COLORS = ['#1d4ed8','#ef4444','#22c55e','#f59e0b','#8b5cf6','#ec4899','#0ea5e9','#f97316'];

const Familias = () => {
  const [tab, setTab] = useState('todas');

  const filtered = tab === 'todas'
    ? FAMILIAS
    : FAMILIAS.filter(f => f.status === tab || (tab === 'ativas' && f.status === 'ativa'));

  const groups = groupByTecnico(filtered);

  return (
    <Layout>
      <div className="fam-header">
        <h1 className="page-title">Famílias</h1>
        <button className="btn-primary">+ Cadastrar família</button>
      </div>

      {/* TABS */}
      <div className="fam-tabs">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`fam-tab${tab === t.key ? ' fam-tab--active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label} <span className="tab-count">({t.count})</span>
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="table-card">
        <table className="fam-table">
          <thead>
            <tr>
              <th>Família</th>
              <th>Técnico responsável</th>
              <th>Região</th>
              <th>Membros</th>
              <th>Telefone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groups).map(([tecnico, lista], gi) => (
              <>
                <tr key={`group-${tecnico}`} className="group-row">
                  <td colSpan={6}>Orientador: {tecnico}</td>
                </tr>
                {lista.map((f, fi) => (
                  <tr key={f.id} className="data-row">
                    <td>
                      <div className="fam-name-cell">
                        <div
                          className="fam-avatar"
                          style={{ background: COLORS[(gi * 3 + fi) % COLORS.length] }}
                        />
                        {f.nome}
                      </div>
                    </td>
                    <td>
                      <span className="tecnico-badge">{f.tecnico}</span>
                    </td>
                    <td className="muted">{f.regiao}</td>
                    <td className="muted center">{f.membros}</td>
                    <td className="muted">{f.tel}</td>
                    <td>
                      <span
                        className="status-dot"
                        style={{ background: STATUS_MAP[f.status].color }}
                        title={STATUS_MAP[f.status].label}
                      />
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="pagination">
          <button className="page-btn disabled">‹</button>
          {[1,2,3].map(n => (
            <button key={n} className={`page-btn${n === 1 ? ' page-btn--active' : ''}`}>{n}</button>
          ))}
          <span className="page-ellipsis">...</span>
          <button className="page-btn">31</button>
          <button className="page-btn">›</button>
        </div>
      </div>
    </Layout>
  );
};

export default Familias;
