import { useState } from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout';
import './NovosCadastro.css';

const NovosCadastro = () => {
  const [form, setForm] = useState({
    nome: 'Maria Oliveira da Silva',
    cpf: '123.456.789-00',
    nascimento: '04/11/1987',
    telefone: '(92) 99878-1234',
    cep: '69050-040',
    endereco: 'Rua das Acácias, 142',
    bairro: 'Jardim Chico Mendes',
    membros: '5',
    renda: 'R$ 1.420,00',
    programas: 'Bolsa Família; BPC',
  });

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <Layout>
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/familias" className="bc-link">Famílias</Link>
        <span className="bc-sep">›</span>
        <span className="bc-current">Nova família</span>
      </div>

      <h1 className="page-title">Cadastrar nova família</h1>
      <p className="page-sub">Preencha os dados do responsável familiar, integrantes e documentos.</p>

      <div className="cadastro-grid">
        {/* FORM */}
        <div className="form-card">
          <div className="form-card-header">
            <h2 className="form-section-title">Dados do responsável familiar</h2>
            <span className="etapa-badge">Etapa 1 de 4</span>
          </div>

          <div className="fields-grid">
            <div className="field-group">
              <label>Nome do responsável</label>
              <input name="nome" value={form.nome} onChange={handle} />
            </div>
            <div className="field-group">
              <label>CPF</label>
              <input name="cpf" value={form.cpf} onChange={handle} />
            </div>
            <div className="field-group">
              <label>Data de nascimento</label>
              <input name="nascimento" value={form.nascimento} onChange={handle} />
            </div>
            <div className="field-group">
              <label>Telefone</label>
              <input name="telefone" value={form.telefone} onChange={handle} />
            </div>
            <div className="field-group">
              <label>CEP</label>
              <input name="cep" value={form.cep} onChange={handle} />
            </div>
            <div className="field-group">
              <label>Endereço completo</label>
              <input name="endereco" value={form.endereco} onChange={handle} />
            </div>
            <div className="field-group">
              <label>Bairro / Região</label>
              <input name="bairro" value={form.bairro} onChange={handle} />
            </div>
            <div className="field-group">
              <label>Quantidade de membros</label>
              <input name="membros" value={form.membros} onChange={handle} />
            </div>
            <div className="field-group">
              <label>Renda familiar mensal</label>
              <input name="renda" value={form.renda} onChange={handle} />
            </div>
            <div className="field-group">
              <label>Programas sociais</label>
              <input name="programas" value={form.programas} onChange={handle} />
            </div>
          </div>
        </div>

        {/* DOCS */}
        <div className="docs-col">
          <div className="docs-card">
            <h3 className="docs-title">Documentos da família</h3>
            <p className="docs-sub">Você pode anexar agora</p>

            <div className="upload-area">
              <div className="upload-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="#1d4ed8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="upload-text">Arraste arquivos ou clique para enviar</p>
              <p className="upload-hint">PDF, JPG, PNG — até 10 MB cada</p>
            </div>

            <div className="docs-sugest">
              <p className="sugest-title">Sugestões de documentos</p>
              {['RG / CPF do responsável', 'Comprovante de residência', 'Certidão de nascimento'].map(s => (
                <label key={s} className="sugest-item">
                  <input type="checkbox" />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="save-row">
            <button className="btn-primary" style={{ width: '100%', padding: '14px' }}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NovosCadastro;
