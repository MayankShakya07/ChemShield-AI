import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ChemicalSelection from './pages/ChemicalSelection.jsx'
import VirtualLab from './pages/VirtualLab.jsx'
import SafetyResults from './pages/SafetyResults.jsx'
import AITutor from './pages/AITutor.jsx'
import Reports from './pages/Reports.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/chemicals" element={<ChemicalSelection />} />

        <Route path="/virtual-lab" element={<VirtualLab />} />

        <Route path="/safety-results" element={<SafetyResults />} />

        <Route path="/ai-tutor" element={<AITutor />} />

        <Route path="/reports" element={<Reports />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)