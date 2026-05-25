import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import './index.css'
import Login         from './login/login.jsx'
import Dashboard     from './pages/Dashboard.jsx'
import Familias      from './pages/Familias.jsx'
import NovosCadastro from './pages/NovosCadastro.jsx'
import Atendimentos  from './pages/Atendimentos.jsx'
import PainelAdmin   from './pages/PainelAdmin.jsx'
import Configuracoes from './pages/Configuracoes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<Login />} />
        <Route path="/dashboard"      element={<Dashboard />} />
        <Route path="/familias"       element={<Familias />} />
        <Route path="/novo-cadastro"  element={<NovosCadastro />} />
        <Route path="/atendimentos"   element={<Atendimentos />} />
        <Route path="/painel-admin"   element={<PainelAdmin />} />
        <Route path="/configuracoes"  element={<Configuracoes />} />
        <Route path="*"              element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
