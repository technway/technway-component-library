import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../../../node_modules//@technway/stencil-library/dist/stencil-library/stencil-library.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)