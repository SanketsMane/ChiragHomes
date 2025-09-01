import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Developer credit message
console.log('%c🚀 Website Developer Information', 'color: #22c55e; font-size: 18px; font-weight: bold; margin-bottom: 8px;');
console.log('%cDeveloper: %cSanket Mane', 'color: #6b7280; font-size: 14px;', 'color: #111827; font-weight: 600; font-size: 14px;');
console.log('%cContact: %ccontactsanket1@gmail.com', 'color: #6b7280; font-size: 14px;', 'color: #2563eb; font-weight: 500; font-size: 14px;');
console.log('%c─────────────────────────────────────────', 'color: #e5e7eb;');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
