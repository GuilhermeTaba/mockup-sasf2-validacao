import Layout from '../components/Layout';
import './Dashboard.css';

const barData = [
  { month: 'Jan', value: 120 },
  { month: 'Fev', value: 142 },
  { month: 'Mar', value: 158 },
  { month: 'Abr', value: 168 },
  { month: 'Mai', value: 176 },
  { month: 'Jun', value: 187 },
];
const BAR_MAX = 220;

const faixas = [
  { label: '0-12',  value: 32, color: '#1d4ed8' },
  { label: '13-17', value: 22, color: '#3b82f6' },
  { label: '18-29', value: 28, color: '#22c55e' },
  { label: '30-59', value: 18, color: '#3b82f6' },
  { label: '60+',   value: 8,  color: '#93c5fd' },
];

const Dashboard = () => (
  <Layout>
    {/* ── HEADER ── */}
    <div className="dash-header">
      <div>
        <p className="dash-section">Geral</p>
        <h1 className="dash-title">Dashboard</h1>
        <p className="dash-sub">Visão geral da unidade Chico Mendes — junho de 2026</p>
      </div>
      <button className="btn-primary">+ Novo atendimento</button>
    </div>

    {/* ── STAT CARDS ── */}
    <div className="stats-grid">
      <div className="stat-card stat-card--green">
        <span className="stat-label">Famílias atendidas</span>
        <span className="stat-value">248</span>
        <span className="stat-delta green">↑ +4 este mês</span>
      </div>
      <div className="stat-card stat-card--green">
        <span className="stat-label">Pessoas cadastradas</span>
        <span className="stat-value">1.024</span>
        <span className="stat-delta green">↑ +22 este mês</span>
      </div>
      <div className="stat-card stat-card--blue">
        <span className="stat-label">Atendimentos no mês</span>
        <span className="stat-value">187</span>
        <span className="stat-delta gray">meta: 200</span>
      </div>
      <div className="stat-card stat-card--red">
        <span className="stat-label">Documentos pendentes</span>
        <span className="stat-value red">14</span>
        <span className="stat-delta red">requer ação</span>
      </div>
    </div>

    {/* ── CHARTS ROW ── */}
    <div className="charts-row">

      {/* BAR CHART */}
      <div className="chart-card chart-bar-card">
        <div className="chart-head">
          <div>
            <h3 className="chart-title">Atendimentos por mês</h3>
            <p className="chart-sub">últimos 6 meses · 2026</p>
          </div>
          <span className="chart-badge">187 total · <span className="green">+12% vs mês anterior</span></span>
        </div>

        <div className="bar-chart">
          {/* Y axis labels */}
          <div className="bar-y-axis">
            {[220, 165, 110, 55, 0].map(v => (
              <span key={v}>{v}</span>
            ))}
          </div>

          {/* Bars */}
          <div className="bars-area">
            {/* Grid lines */}
            <div className="grid-lines">
              {[0,1,2,3,4].map(i => <div key={i} className="grid-line" />)}
            </div>

            {barData.map((d) => {
              const heightPct = (d.value / BAR_MAX) * 100;
              return (
                <div key={d.month} className="bar-col">
                  <span className="bar-top-label">{d.value}</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: `${heightPct}%` }} />
                  </div>
                  <span className="bar-month">{d.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="charts-right">

        {/* DONUT */}
        <div className="chart-card donut-card">
          <h3 className="chart-title">Perfil por gênero</h3>
          <p className="chart-sub">1.024 pessoas</p>
          <div className="donut-row">
            <div className="donut-wrap">
              <div className="donut-ring" />
              <div className="donut-center-text">
                <span className="dc-number">1.024</span>
                <span className="dc-label">pessoas</span>
              </div>
            </div>
            <div className="donut-legend">
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#1d4ed8' }} />
                <span className="legend-label">Feminino</span>
                <span className="legend-pct">58%</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#60a5fa' }} />
                <span className="legend-label">Masculino</span>
                <span className="legend-pct">39%</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#f59e0b' }} />
                <span className="legend-label">Outros</span>
                <span className="legend-pct">3%</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAIXA ETÁRIA */}
        <div className="chart-card faixa-card">
          <h3 className="chart-title">Faixa etária</h3>
          <p className="chart-sub">distribuição das pessoas atendidas</p>
          <div className="faixa-list">
            {faixas.map(f => (
              <div key={f.label} className="faixa-row">
                <span className="faixa-label">{f.label}</span>
                <div className="faixa-track">
                  <div
                    className="faixa-fill"
                    style={{ width: `${f.value * 3}%`, background: f.color }}
                  />
                </div>
                <span className="faixa-val">{f.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </Layout>
);

export default Dashboard;
